import React from "react";
import { Layout, TextContainer } from "./styles";

const Hero = () => {
  return (
    <>
      {/* <ImageBackground /> */}
      <Layout>
        <div>
          <TextContainer>
            <h1>Garrett Johnson</h1>
          </TextContainer>
          <div style={{ border: "1px solid white" }}>
            <p>software developer</p>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Hero;
