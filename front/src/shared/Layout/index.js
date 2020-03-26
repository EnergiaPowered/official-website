import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Layout(props) {
  let { children } = props;
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
