import styled, { keyframes } from "styled-components";

const onStart = keyframes`{
  0% {
      opacity: 0;
      transform: scale(0.5);
  }
100% {
    transform: translateY(-100px);
    opacity: 1;
}
}`;

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  bottom: -100px;
  margin-left: 20px;
  animation: ${onStart} 1.3s 1 ease forwards;
  transform-origin: bottom;
`;

export const LongLine = styled.div`
  width: 1px;
  height: 80px;
  background-color: black;
`;

export const IconPlaceHolder = styled.div`
  width: 25px;
  height: 25px;
  background-color: grey;
  margin-bottom: 20px;
`;

export const Email = styled.p`
  transform: rotate(180deg);
  text-orientation: sideways;
  writing-mode: vertical-lr;
`;

export const ShortLine = styled.div`
  width: 1px;
  height: 20px;
  background-color: black;
  margin: 20px 0;
`;
