import styled from "styled-components";

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
`

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 25px;
`

export const Divider = styled.div`
    height: 60px;
    width: 2px;
    background-color: ${props => props.theme.secondaryText};
    margin: 0 15px;
`