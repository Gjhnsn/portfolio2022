import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 30px 40px;
//   border: 1px solid red;
`;

export const LinkList = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: row;
//   align-items: center;
  list-style: none;
//   border: 1px solid yellow;
`;
export const Link = styled.li`
  margin-left: 50px;
  color: ${(props) => props.theme.tertiaryColor};
`;
