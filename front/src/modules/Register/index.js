import React from "react";

import { Helmet } from "react-helmet";

import "./style.css";

import Register from "./components/RegisterComponent";
import Layout from "shared/Layout";

// import bg from "assets/Blog-header.png";

export default function RegisterationPage(props) {

    // const style = {
    //     backgroundImage: `url(${bg})`
    // };

    return (
        <div className="page-component" id="sign-up">
            <Helmet>
                <title>Energia Powered | Registeration</title>
            </Helmet>

            <Layout>
                <main>
                    <div className="container">
                        <Register props={props} />
                    </div>
                </main>
            </Layout>
        </div>
    );
}
