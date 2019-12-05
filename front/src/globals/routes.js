import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import SingleCommitteePage from "../pages/SingleCommitteePage";
import ContactsPage from "../pages/ContactsPage"
import Events from "../pages/EventsPage";
/*
 "inNavbar" property is for diplaying the link in the navbar if u want the link to be shown in the navbar, for example, if u define "/committees/:id" of course u don't want it to be shown in the navbar so set the "inNavbar.shown" property of this route to false
*/
export default [
  {
    path: "/",
    component: HomePage,
    inNavbar: {
      shown: true,
      label: "Home"
    }
  },
  {
    path: "/aboutus",
    component: AboutPage,
    inNavbar: {
      shown: true,
      label: "About"
    }
  },
  {
    path: "/committee/:id",
    component: SingleCommitteePage,
    inNavbar: {
      shown: false,
      label: "" // generated dynamically
    }
  },
  {
    path: "/events",
    component: Events,
    inNavbar: {
      shown: true,
      label: "Events"
    }
  },
  {
    path: "/contacts",
    component: ContactsPage,
    inNavbar: {
      shown: true,
      label: "Contacts"
    }
  }
];
