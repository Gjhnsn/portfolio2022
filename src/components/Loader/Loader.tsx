import React from "react";
import { Container, LoaderLogo } from "./styles";
import { pulseVariant, fadeOut } from "./animations";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <Container {...fadeOut}>
      <motion.div {...pulseVariant}>
        <LoaderLogo />
      </motion.div>
    </Container>
  );
};

export default Loader;
