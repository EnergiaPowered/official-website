import React, { useEffect, useRef, useState } from "react";
import Layout from "shared/Layout";
import { io } from "socket.io-client"
import { Helmet } from "react-helmet";
import { Redirect } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getEventChat, getSingleEvent, getUser } from "../../services/events.services";
import jwt_docode from "jwt-decode";
import StreamingAntennas from "assets/Streaming-antennas.png";
import "./index.css";
import authHeader from "globals/auth-header";
import configs from "globals/config";

const SingleEvent = (props) => {
    const [userId, setUserId] = useState(null)
    const [event, setEvent] = useState(null);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const [socket, setSocket] = useState();
    const [isAdmin, setIsAdmin] = useState(false);

    const userVideo = useRef();
    const peerRef = useRef();
    const otherUser = useRef();
    const userStream = useRef();

    function startStreaming() {
        navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(stream => {
            userVideo.current.srcObject = stream;
            userStream.current = stream;
            socket.emit("streamingStarted");
        });
    }

    function callUser(userID) {
        peerRef.current = createPeer(userID);
        // console.log("Here I am\n", userStream.current.getTracks());
        // userStream.current.getTracks().forEach(track => peerRef.current.addTrack(track, userStream.current));
    }

    function createPeer(userID) {
        const peer = new RTCPeerConnection({
            iceServers: [
                {
                    urls: "stun:stun.stunprotocol.org"
                },
                {
                    urls: 'turn:numb.viagenie.ca',
                    credential: 'muazkh',
                    username: 'webrtc@live.com'
                },
            ]
        });

        peer.onicecandidate = handleICECandidateEvent;
        peer.onnegotiationneeded = () => handleNegotiationNeededEvent(userID);

        return peer;
    }

    function handleNegotiationNeededEvent(userID) {
        peerRef.current.createOffer().then(offer => {
            return peerRef.current.setLocalDescription(offer);
        }).then(() => {
            const payload = {
                target: userID,
                caller: socket.id,
                sdp: peerRef.current.localDescription
            };
            socket.emit("offer", payload);
        }).catch(e => console.log(e));
    }

    function handleRecieveCall(incoming) {
        peerRef.current = createPeer();
        const desc = new RTCSessionDescription(incoming.sdp);
        peerRef.current.setRemoteDescription(desc).then(() => {
            userStream.current.getTracks().forEach(track => peerRef.current.addTrack(track, userStream.current));
        }).then(() => {
            return peerRef.current.createAnswer();
        }).then(answer => {
            return peerRef.current.setLocalDescription(answer);
        }).then(() => {
            const payload = {
                target: incoming.caller,
                caller: socket.id,
                sdp: peerRef.current.localDescription
            }
            socket.emit("answer", payload);
        })
    }

    function handleAnswer(message) {
        const desc = new RTCSessionDescription(message.sdp);
        peerRef.current.setRemoteDescription(desc).catch(e => console.log(e));
    }

    function handleICECandidateEvent(e) {
        if (e.candidate) {
            const payload = {
                target: otherUser.current,
                candidate: e.candidate,
            }
            socket.emit("ice-candidate", payload);
        }
    }

    function handleNewICECandidateMsg(incoming) {
        const candidate = new RTCIceCandidate(incoming);

        peerRef.current.addIceCandidate(candidate)
            .catch(e => console.log(e));
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
        getSingleEvent(props.match.params.id).then(res => {
            setEvent(res.data);
        }).catch(err => {
            return <Redirect to="/events" />
        });
        getEventChat(props.match.params.id).then(res => {
            setComments(res.data);
        }).catch(err => {
            setComments([]);
        });
    }, [props.match.params.id]);

    useEffect(() => {
        if (socket == null || event == null) return;
        const handler = message => {
            setComments([...comments, message]);
        }
        socket.on("message", handler);

        return () => {
            socket.off("message", handler);
        }
    }, [socket, event, comments]);

    useEffect(() => {
        if (socket == null || event == null) return;
        socket.on('other user', userID => {
            console.log("other user", userID);
            callUser(userID);
            otherUser.current = userID;
        });

        socket.on("user joined", userID => {
            console.log("user joined", userID);
            otherUser.current = userID;
        });

        socket.on("offer", handleRecieveCall);

        socket.on("answer", handleAnswer);

        socket.on("ice-candidate", handleNewICECandidateMsg);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [socket, event]);

    useEffect(() => {
        if (socket == null || event == null) return;
        socket.emit("joinRoom", event._id);
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
            setComment("");
            setTimeout(() => {
                const commentsContainer = document.querySelector(".streaming-comments");
                commentsContainer.scrollTop = commentsContainer.scrollHeight;
                socket.emit('chatMessage', comment);
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
                                <video autoPlay muted ref={userVideo} />
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
                            <div className="streaming-comments">
                                {comments.length ? (
                                    <div className="comments">
                                        <CommentsSection />
                                    </div>
                                ) : (
                                    <div className="h-100 d-flex justify-content-center align-items-center">
                                        <h5>There are no comment yet.</h5>
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