import Home from "modules/Home";
import SingleCommittee from "modules/Committees/components/SingleCommitteePage";
import Contacts from "modules/Contact";
import AboutPage from "modules/About/components/page";

export default [
  {
    path: "/",
    component: Home,
    inNavbar: {
      shown: true,
      label: "Home"
    }
  },
  {
    path: "/about-us",
    component: AboutPage,
    inNavbar: {
      shown: true,
      label: "About"
    }
  },
  {
    path: "/committee/:id",
    component: SingleCommittee,
    inNavbar: {
      shown: false,
      label: "" // generated dynamically
    }
  },
  // {
  //   path: "/events",
  //   component: Events,
  //   inNavbar: {
  //     shown: true,
  //     label: "Events"
  //   }
  // },  {
  //   path: "/events/:id/:title",
  //   component: SingleEvent,
  //   inNavbar: {
  //     shown: false,
  //     label: "Events"
  //   }
  // },

  {
    path: "/contact-us",
    component: Contacts,
    inNavbar: {
      shown: true,
      label: "Contact us"
    }
  }
];
