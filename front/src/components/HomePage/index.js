import React from "react";

import "./index.css";
import Header from "./Header/Header";
import SupVis from "./Supervisor/SupVis";
import Partners from "./Partners/Partners";
import Footer from "./Footer";
import Committees from "./Committees";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faFire, faPalette } from "@fortawesome/free-solid-svg-icons";

// Adding all the icons we need in the project
library.add(faHeart, faFire, faPalette);

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
