import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";

/*
 "page" property is for diplaying the link in the navbar if it's page not just a link, for example, if u define "/committees/:id" of course u don't want it to be shown in the navbar so set the "page" property of this route to false
*/
export default [
  { path: "/", component: HomePage, label: "Home", page: true },
  { path: "/aboutus", component: AboutPage, label: "About", page: true },
];
