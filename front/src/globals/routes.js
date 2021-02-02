import Home from "modules/Home";
import SingleCommittee from "modules/Committees/components/SingleCommitteePage";
import Contacts from "modules/Contact";
import Crew from "modules/Crew/Crew";
import AboutPage from "modules/About/components/page";
import Events from "modules/Events/Events";
import BlogsPage from './../modules/Blogs/index';

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
    path: "/Blogs",
    component: BlogsPage,
    inNavbar: {
      shown: true,
      label: "Blogs"
    },
  },
  {
    path: "/committee/:id",
    component: SingleCommittee,
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
    path: "/crew",
    component: Crew,
    inNavbar: {
      shown: true,
      label: "Crew"
    }
  },
  // {
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
