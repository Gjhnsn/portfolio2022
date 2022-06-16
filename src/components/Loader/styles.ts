import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/logo.svg";

import { motion } from 'framer-motion'


export const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: ${(props) => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderLogo = styled(motion(Logo))`
  fill: ${(props) => props.theme.tertiaryColor};
  height: 200px;
  width: auto;
`;
