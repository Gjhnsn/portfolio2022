import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
`

export const Divider = styled.div`
    height: 60px;
    width: 2px;
    background-color: ${props => props.theme.secondaryText};
    margin: 0 15px;
`

export const Button = styled.button`
    position: absolute;
    margin-top: 150px;
`