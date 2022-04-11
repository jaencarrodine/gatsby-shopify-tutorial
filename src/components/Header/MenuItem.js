import * as React from "react";
import { motion } from "framer-motion";
import {Link} from 'gatsby';
const variants = {
  open: {
    x: 0,
    zIndex: 1,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    zIndex: -1,
    x: -300,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 }
    }
  }
};

//const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const pages = ['Home', 'Shop', 'Cart'];
const links = ['/', '/products', '/cart'];
export const MenuItem = ({ i }) => {
  //const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      className="mobile-nav-menu-item"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >

      <Link to = {links[i]} style = {{textDecoration:'none', color:'black'}} className = 'mobile-nav-link'>{pages[i]}</Link>
    </motion.li>
  );
};
