import React, { useEffect, useState } from "react";
import Layout from "shared/Layout";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router";
import { getSingleEvent } from "../../services/events.services";
import StreamingAntennas from "assets/Streaming-antennas.png";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SingleEvent = (props) => {
    const [event, setEvent] = useState(null);
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getSingleEvent(props.match.params.id).then(res => {
            setEvent(res.data);
        }).catch(err => {
            return <Redirect to="/events" />
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (event == null) return null;
    if (localStorage.getItem("user") == null) {
        alert('You must log in to open this event');
        return <Redirect to='/login' />;
    }

    const CommentsSection = () => comments.map((comment, index) => (
        <div key={index}>
            <div className="comment-icon">{comment.firstname.charAt(0).toUpperCase()}{comment.lastname.charAt(0).toUpperCase()}</div>
            <div className="comment-info">
                <h6>{comment.firstname} {comment.lastname}</h6>
                <p>{comment.comment}</p>
            </div>
        </div>
    ));

    const handleChange = (e) => {
        setComment(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (comment) {
            const { firstname, lastname } = JSON.parse(localStorage.getItem("user"));
            setComments([...comments, { firstname, lastname, comment }]);
            setComment("");
            setTimeout(() => {
                const commentsContainer = document.querySelector(".streaming-comments");
                commentsContainer.scrollTop = commentsContainer.scrollHeight;
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
                            <div className="streaming-video"></div>
                            <div className="streaming-description">
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