import React from "react";

import "./index.css";
import Header from "./Header/Header";
import SupVis from "./Supervisor/SupVis";
import Partners from "./Partners/Partners";
import Footer from "./Footer";
import Committees from "./Committees";

export default () => {
    return (
        <div className="page-component" id="HomePage">
            <Header />
            <SupVis />
            <Committees />
            <Partners />
            <Footer />
        </div>
    );
};
