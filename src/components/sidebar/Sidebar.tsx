import React from "react";
import {
  LongLine,
  Container,
  IconPlaceHolder,
  ShortLine,
  Email,
} from "./styles";

const Sidebar = () => {
  
  return (
    <Container>
      <LongLine />
      <IconPlaceHolder />
      <IconPlaceHolder />
      <IconPlaceHolder />
      <ShortLine />
      <Email>garrett.bjnsn@gmail.com</Email>
      <ShortLine />
    </Container>
  );
};

export default Sidebar;
