import React, { FC } from "react";
import { LayoutContainer } from "./styles";

const Layout: FC = (props) => {
  return <LayoutContainer>{props.children}</LayoutContainer>;
};

export default Layout;
