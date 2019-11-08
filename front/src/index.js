import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faHeart,
    faFire,
    faPalette,
    faMapPin,
    faMapMarker,
    faMailBulk,
    faPhone
} from "@fortawesome/free-solid-svg-icons";

// Adding all the icons we need in the project
library.add(faHeart, faFire, faPalette, faMapPin, faMapMarker, faPhone, faMailBulk);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
