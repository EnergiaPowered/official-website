import React, { useState, useEffect } from "react";
import Layout from "shared/Layout";
import Application from "./components/Application";
import $ from "jquery";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";
import "./index.css";

function RecruitmentForm() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        if (new Date() > new Date(2022, 6, 2, 20, 59, 59))
            setFinished(true);
    }, []);

    console.log(useParams())

    const submit = (values) => {
        if (!finished) {
            setLoading(true);
            $.ajax({
                url:
                    "https://script.google.com/macros/s/AKfycbxWYUgpXB6AO6ZAUSQbntwd9V2m6kWOfGTG1jtQn5WBHnLjRZIU3Rg6U8Nf83dkPIDqJg/exec",
                method: "POST",
                dataType: "json",
                data: values,
                success: () => {
                    setSubmitted(true);
                    setLoading(false);
                },
                error: () => {
                    alert("Your application didn't get saved successfully. Please try again.");
                }
            });
        }
    };

    return (
        <div
            className="site-layout page-component"
            style={{ padding: "0 50px", marginTop: "100px" }}
        >
            <Helmet>
                <title>Energia Powered | Members Recruitment</title>
            </Helmet>
            <Layout>
                <div className="recruitment-page row">
                    <div className="col-lg-2 col-sm-0"></div>
                    <div
                        className="col-lg-8 col-sm-12"
                        style={{ backgroundColor: "#0000002e", paddingTop: "1rem" }}
                    >
                        <div className="info-section">
                            <div className="name">
                                <div className="col">
                                    <h1 style={{ textAlign: "center" }}>
                                        Members' Recruitment
                                    </h1>
                                </div>
                            </div>
                            <div
                                className="info"
                                style={{ padding: "0.8rem", textAlign: "center" }}
                            >
                                {submitted ? (
                                    <p>
                                        Thank you for filling out your information!<br />
                                        We will get in touch with you for more details about the sessions as soon as possible. So, keep waiting for us.<br />
                                        And if you have any questions, don’t hesitate to ask us through our page messages.
                                    </p>
                                ) : (
                                    <div>
                                        <p>
                                            Energia Powered is a student activity, which was founded in Cairo University 9 years ago.<br />
                                            This application form to join our Energia Gates <strong>DME</strong> Session, so if you are interested, fill this form and join us.
                                        </p>
                                        {finished && (
                                            <h4>
                                                The form is closed
                                                <span role="img" aria-label="sad">
                                                    😥
                                                </span>
                                                <br />
                                                Better luck next time
                                                <span role="img" aria-label="twink">
                                                    😉
                                                </span>
                                            </h4>
                                        )}
                                    </div>
                                )}
                            </div>
                            {submitted || finished ? null : <Application submit={submit} loading={loading} />}
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default RecruitmentForm;