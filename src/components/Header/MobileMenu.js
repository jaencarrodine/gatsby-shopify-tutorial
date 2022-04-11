import React, {useState, useEffect} from 'react'
import {Link, withPrefix} from 'gatsby'


import Logo from './Logo'
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";


const sidebar = {
  open: (height = 1000) => ({
    height:'100vh',
    width: '250px',
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      clipPath:{type: "spring",stiffness: 20,restDelta: 2},
      default: { duration: .001 }
    }
  }),
  closed: {
    height: '100px',
    width:'100px',

    clipPath: "circle(0px at 40px 40px)",
    transition:{
      clipPath:{delay: 0, type: "spring", stiffness: 400, damping: 40},
      default: {duration: 3}
    }
  }
};


const MobileMenu = ({location: {pathname}, token, cartCount, signout}) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="mobile-menu"
      
      
    >
      <motion.div className="background" variants={sidebar} />
       <Navigation  /> 
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );

}

export default MobileMenu
