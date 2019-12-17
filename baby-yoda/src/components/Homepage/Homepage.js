import React from "react";
import Header from "../Header/Header";
import Settings from "../Settings/index";
import Footer from "../Footer/Footer";

const Homepage = ( submitted ) => (
     <React.Fragment>
          {/* <div style={{ display: submitted ? "block" : "none" }}> */}
               <Header />
               <Settings />
               <Footer />
          {/* </div> */}
     </React.Fragment>
);

export default Homepage;