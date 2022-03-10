import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  width: 50%;
  border: 1px solid white;
`;

export const ProjectCardPlaceholder = styled.div`
  height: 450px;
  width: 500px;
  background-color: grey;
  border: gold 1px solid;
  transition: transform 0.5s ease;
  transform: translateX(-20px);
  margin: 0 5px;
  z-index: 1;
  position: absolute;
`;

export const ProjectCardPlaceholder2 = styled.div`
  height: 500px;
  width: 500px;
  border: green 3px solid;
  transition: transform 0.5s ease;
  transform: translateX(5px);
  z-index: -1;
`;

export const ProjectContainer = styled.div`
  border: 1px solid purple;
  padding: 0 15px;
  margin-top: 70px;
  margin-bottom: 30px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    width: 100%;
  }

  /* slide top card to left on hover */
  &:hover {
    ${ProjectCardPlaceholder} {
      background-color: purple;
      transition: transform 0.5s ease;
      transform: translateX(-45%);
    }
  }

  /* slide bottom card right on hover */
  &:hover {
    ${ProjectCardPlaceholder2} {
      background-color: red;
      transition: transform 0.5s ease;
      transform: translateX(45%);
    }
  }
`;
