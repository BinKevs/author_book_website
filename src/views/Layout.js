import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "./NavBar";

import FooterPart from "./Footer";
const Layout = (props) => {
  const [hamBurgetState, setHamBurgetState] = useState(false);
  return (
    <>
      <NavBar />

      <div className="font-Montserrat">
        {/* <Outlet /> */}
        {props.children}
      </div>
      <FooterPart />
    </>
  );
};

export default Layout;
