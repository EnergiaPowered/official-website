import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

/**
 * Component which contain Navbar and Footer
 * 
 * @component 
 * @returns {JSX} Return the layout that is the Navbar and Footer
 */

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
