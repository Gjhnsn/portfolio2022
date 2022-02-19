import styled from "styled-components";
import background from "../../assets/treeBg.jpg";


export const Wrapper = styled.div`
    border: 2px solid blue;
    height: 100%;
    width: 100%;
    padding: 0 150px;
    margin: 0 auto;
`

export const ImageBackground = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(${background});

  height: 100%;
  width: 40%;

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  z-index: -10;
  right: 0;
`;