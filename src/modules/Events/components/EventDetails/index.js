import React, { useEffect, useRef, useState } from "react";
import Layout from "shared/Layout";
import { io } from "socket.io-client"
import { Helmet } from "react-helmet";
import { Redirect } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getEventChat, getSingleEvent, getUser } from "../../services/events.services";
import jwt_docode from "jwt-decode";
import StreamingAntennas from "assets/Streaming-antennas.png";
import authHeader from "globals/auth-header";
import configs from "globals/config";
import "./index.css";

const SingleEvent = (props) => {
    const [userId, setUserId] = useState(null)
    const [event, setEvent] = useState(null);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [socket, setSocket] = useState();
    const [isAdmin, setIsAdmin] = useState(false);
    const [isBroadcaster, setIsBroadcaster] = useState(false);
    const [peerConnections, setPeerConnections] = useState({});

    const userVideo = useRef();
    const streamingComments = useRef();

    const config = {
        iceServers: [
            {
                urls: "stun:stun.stunprotocol.org"
            },
            {
                urls: 'turn:numb.viagenie.ca',
                credential: 'muazkh',
                username: 'webrtc@live.com'
            }
        ]
    };

    function getStream() {
        if (window.stream) {
            window.stream.getTracks().forEach(track => {
                track.stop();
            });
        }

        navigator.mediaDevices.getUserMedia({ audio: true, video: true })
            .then(gotStream)
            .catch((error) => {
                console.error("Error: ", error);
            });
    }

    function gotStream(stream) {
        window.stream = stream;
        userVideo.current.srcObject = stream;
        socket.emit("broadcaster");
    }

    function startStreaming() {
        setIsBroadcaster(true);
        getStream();
    }

    useEffect(() => {
        const token = authHeader();
        if (!token) return;
        setUserId(jwt_docode(token['x-auth-token'])._id);
        const s = io(configs.HOST, { extraHeaders: token });
        setSocket(s);
        getUser().then(res => {
            setIsAdmin(res.data.isAdmin);
        });

        return () => {
            s.disconnect();
        }
    }, []);

    useEffect(() => {
        Promise.all([getSingleEvent(props.match.params.id), getEventChat(props.match.params.id)])
            .then(([{ data: event }, { data: comments }]) => {
                setEvent(event);
                setComments(comments);
                setTimeout(() => {
                    streamingComments.current.scrollTop = streamingComments.current.scrollHeight;
                }, 100);
            })
            .catch(err => {
                console.error(err.message);
                return <Redirect to="/events" />
            })
    }, [props.match.params.id]);

    useEffect(() => {
        if (socket == null || event == null) return;
        let peerConnection;
        const messageHandler = message => {
            setComments([...comments, message]);
            setTimeout(() => {
                streamingComments.current.scrollTop = streamingComments.current.scrollHeight;
            }, 100);
        }
        const broadcasterHandler = () => {
            socket.emit("watcher");
        }
        const watcherHandler = id => {
            const peerConn = new RTCPeerConnection(config);
            const temp = peerConnections;
            temp[id] = peerConn;
            setPeerConnections(temp);

            let stream = userVideo.current.srcObject;
            stream.getTracks().forEach(track => peerConn.addTrack(track, stream));

            peerConn.onicecandidate = event => {
                if (event.candidate) {
                    socket.emit("candidate", id, event.candidate);
                }
            };

            peerConn
                .createOffer()
                .then(sdp => peerConn.setLocalDescription(sdp))
                .then(() => {
                    socket.emit("offer", id, peerConn.localDescription);
                });
        }
        const offerHandler = (id, description) => {
            const peerConn = new RTCPeerConnection(config);
            peerConn.setRemoteDescription(description)
                .then(() => peerConn.createAnswer())
                .then(sdp => peerConn.setLocalDescription(sdp))
                .then(() => {
                    peerConnection = peerConn;
                    console.log(peerConnection);
                    socket.emit("answer", id, peerConn.localDescription);
                });
            peerConn.ontrack = event => {
                userVideo.current.srcObject = event.streams[0];
                console.log("ontrack", userVideo.current.srcObject);
            };
            peerConn.onicecandidate = event => {
                if (event.candidate) {
                    socket.emit("candidate", id, event.candidate);
                }
            };
        }
        const answerHandler = (id, description) => {
            peerConnections[id].setRemoteDescription(description);
        }
        const candidateHandler = (id, candidate) => {
            console.log("In candidate", id);
            if (peerConnection) {
                console.log("In");
                peerConnection
                    .addIceCandidate(new RTCIceCandidate(candidate))
                    .catch(e => console.error(e));
            }
        }
        const disconnectPeerHandler = id => {
            if (peerConnections[id]) {
                peerConnections[id].close();
                const temp = peerConnections;
                delete temp[id];
                setPeerConnections(temp);
            }
        }

        window.onunload = window.onbeforeunload = () => {
            socket.close();
            !isBroadcaster && peerConnection.close();
        };

        socket.on("message", messageHandler);
        socket.on("broadcaster", broadcasterHandler);
        socket.on("watcher", watcherHandler);
        socket.on("offer", offerHandler);
        socket.on("answer", answerHandler);
        socket.on("candidate", candidateHandler);
        socket.on("disconnectPeer", disconnectPeerHandler);

        return () => {
            socket.off("message", messageHandler);
            socket.off("broadcaster", broadcasterHandler);
            socket.off("watcher", watcherHandler);
            socket.off("offer", offerHandler);
            socket.off("answer", answerHandler);
            socket.off("candidate", candidateHandler);
            socket.off("disconnectPeer", disconnectPeerHandler);
        }
    }, [socket, event, comments, config, peerConnections, isBroadcaster]);

    useEffect(() => {
        if (socket == null || event == null) return;
        socket.emit("joinRoom", event._id);
        socket.emit("watcher");
    }, [socket, event]);

    if (event == null) return null;
    if (authHeader() === {}) {
        alert('You must log in to open this event');
        return <Redirect to='/login' />;
    }

    const CommentsSection = () => comments.map((comment, index) => (
        <div key={index}>
            <div className="comment-icon">{comment.firstname.charAt(0).toUpperCase()}{comment.lastname.charAt(0).toUpperCase()}</div>
            <div className="comment-info">
                {userId === comment.userId ? (
                    <h6>Me</h6>
                ) : (
                    <h6>{comment.firstname} {comment.lastname}</h6>
                )}
                <p>{comment.comment}</p>
            </div>
        </div>
    ));

    const handleChange = (e) => {
        setComment(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (comment.trim()) {
            socket.emit('chatMessage', comment);
            setComment("");
            setTimeout(() => {
                streamingComments.current.scrollTop = streamingComments.current.scrollHeight;
            }, 100);
        }
    }

    return (
        <div className="page-component">
            <Helmet>
                <title>Events | {event.name}</title>
            </Helmet>
            <Layout>
                <div className="streaming-container">
                    <div className="streaming-antennas">
                        <div className="streaming-title">
                            <h1 id="dropE">{event.name}</h1>
                        </div>
                        <img src={StreamingAntennas} alt="Streaming Antennas" />
                    </div>
                    <div className="streaming-sections">
                        <div className="streaming-section1">
                            <div className="streaming-video">
                                <video playsInline autoPlay muted={isBroadcaster} ref={userVideo} />
                            </div>
                            <div className="streaming-description">
                                {isAdmin && (
                                    <button className="streaming-button" onClick={startStreaming}>Start Streaming</button>
                                )}
                                <h3>About</h3>
                                <div
                                    dangerouslySetInnerHTML={{ __html: event.eventDescription }}
                                ></div>
                            </div>
                        </div>
                        <div className="streaming-section2">
                            <div ref={streamingComments} className="streaming-comments">
                                {comments.length ? (
                                    <div className="comments">
                                        <CommentsSection />
                                    </div>
                                ) : (
                                    <div className="h-100 d-flex justify-content-center align-items-center">
                                        <h5>There are no comments yet.</h5>
                                    </div>
                                )}
                            </div>
                            <div className="streaming-send-comment">
                                <form onSubmit={handleSubmit}>
                                    <input type="text" placeholder="Write a comment" onChange={handleChange} value={comment} />
                                    <button>
                                        <FontAwesomeIcon icon="location-arrow" className="icon" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default SingleEvent;