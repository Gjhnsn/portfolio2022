import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 50%;
  border: 1px solid white;
`;
export const ProjectContainer = styled.div`
  border: 1px solid purple;
  padding: 0 15px;
  margin-top: 70px;
  display: grid;
  place-items: center;
  grid-template-areas: "inner-div";
`;

export const ProjectCardPlaceholder = styled.div`
  height: 450px;
  width: 500px;
  background-color: grey;
  border: gold 1px solid;
  transform: translateX(-20px);
  margin: 0 5px;
  z-index: 1;
  grid-area: inner-div;
`;

export const ProjectCardPlaceholder2 = styled.div`
  height: 500px;
  width: 500px;
  border: green 1px solid;
  transform: translateX(5px);
  z-index: 0;
  grid-area: inner-div;
`;