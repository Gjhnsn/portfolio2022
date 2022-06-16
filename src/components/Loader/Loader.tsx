import React from "react";
import { Container, LoaderLogo } from "./styles";
import Logo from "../../assets/logo.svg";

import { motion } from "framer-motion";

const pulseVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    scale: [
      0.4, 0.42, 0.4, 0.44, 0.4, 0.4, 0.4, 0.42, 0.4, 0.44, 0.4, 0.4, 0.4, 0.42,
      0.4, 0.44, 0.4, 0.4, 0.4, 0.4, 0,
    ],
    transition: {
      duration: 3,
      type: "spring",
      delay: 0.5,
    },
  },
};

const fadeOut = {
  animate: {
    opacity: 0,
    transition: {
      delay: 3.8,  
      duration: .7,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const Loader = () => {
  return (
    <Container {...fadeOut}>
      <motion.div {...pulseVariant}>
        {/* <LoaderLogo src={Logo} /> */}
        <LoaderLogo />
      </motion.div>
    </Container>
  );
};

export default Loader;
