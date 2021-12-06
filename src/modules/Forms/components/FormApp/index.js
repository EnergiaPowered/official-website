import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Layout from "shared/Layout";
import QuestionApp from "./QuestionApp/QuestionApp";
import $ from "jquery";
import configs from "globals/config";
//import AdSense from 'react-adsense';
import "./index.css";

function FormApp(props) {
  const FORM_END_POINT = `${configs.HOST}form/${props.match.params.title}`;
  const [myForm, setmyForm] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [starteded, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    fetch(FORM_END_POINT)
      .then((res) => res.json())
      .then((data) => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        setmyForm(data[0]);
        let start = data[0]["startDate"].split("T")[0].split("-");
        start = new Date(start[0], start[1] - 1, start[2]);
        let end = data[0]["endDate"].split("T")[0].split("-");
        end = new Date(end[0], end[1] - 1, end[2]);
        const dateNow = new Date();
        window.scrollTo(0, 0);
        if (dateNow > end) setFinished(true);
        if (dateNow > start) setStarted(true);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [submitted]);

  const submit = (values) => {
    setLoading(true);
    const sheet =
      "https://script.google.com/macros/s/AKfycbxRyo4KkNofbRrDy_eArNm-emeLUygc48AVTwniiiJ-zC7j5BANLIKt7aL0AJtFflhh/exec";

    if (!finished) {
      $.ajax({
        url: sheet,
        method: "POST",
        dataType: "json",
        data: values,
        success: () => {
          setSubmitted(true);
          setLoading(false);
        },
        error: () => {
          alert(
            "Your application didn't get saved successfully. Please try again."
          );
          setLoading(false);
        },
      });
    }
  };

  return (
    <div
      className="site-layout page-component"
      style={{ padding: "0 50px", marginTop: "180px" }}
    >
      {myForm && (
        <>
          <Helmet>
            <title>{myForm.title}</title>
          </Helmet>
          <Layout>
            <div className="recruitment-page row">
              <div className="col-lg-2 col-sm-0"></div>
              <div
                className="col-lg-8 col-sm-12"
                style={{ backgroundColor: "#0000002e", padding: "1.5rem 1rem" }}
              >
                <div className="info-section">
                  <div className="name">
                    <div className="col">
                      <h1 style={{ textAlign: "center" }}>{myForm.title}</h1>
                    </div>
                  </div>
                  <div
                    className="info"
                    style={{ padding: "0.8rem", textAlign: "center" }}
                  >
                    {submitted ? (
                      <h4>{myForm.postSubmit}</h4>
                    ) : (
                      <div>
                        {finished ? (
                          <h4>{myForm.postEvent}</h4>
                        ) : !starteded ? (
                          <h4>{myForm.preEvent}</h4>
                        ) : (
                          <div>{myForm.description}</div>
                        )}
                      </div>
                    )}
                  </div>
                  {submitted || finished || !starteded ? null : (
                    <QuestionApp
                      submit={submit}
                      loading={loading}
                      Fields={myForm.fields}
                    />
                  )}
                </div>
              </div>
            </div>

            <ins
              className="adsbygoogle"
              style={{ display: "block" }}
              data-ad-client="ca-pub-5365245317481587"
              data-ad-slot="1405867898"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins>
          </Layout>
        </>
      )}
    </div>
  );
}

export default FormApp;
{
  /* <AdSense.Google
        
        client="ca-pub-5127266833297496"
        slot="7753668297"
        style={{ display: 'block' }}
        format='auto'
        responsive='true'
        layoutKey='-gw-1+2a-9x+5c'
    /> */
}

//     <ins className='adsbygoogle'
//       style={{ display: 'block' }}
//       data-ad-client= 'ca-pub-5127266833297496'
//       data-ad-slot="7753668297"
//       data-ad-format= 'auto'
//       data-full-width-responsive="true"
//   >
//   </ins>
