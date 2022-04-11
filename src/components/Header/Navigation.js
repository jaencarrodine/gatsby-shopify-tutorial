import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    zIndex: 1,
    width:'230px',
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    
  },
  closed: {
    width : '0',
    zIndex: -1,
    transition: { duration:0.001}
  }
};

export const Navigation = () => (
  <motion.ul variants={variants} className = 'mobile-nav-links'>
    {itemIds.map(i => (
      <MenuItem i={i} key={i} variants = {variants}/>
    ))}
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];