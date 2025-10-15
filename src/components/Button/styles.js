import styled from "styled-components";


export const Button = styled.button`
    border: none;
    background: linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%);
    font-size: 16px;
    color: #FFF;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 30px;
    transition: all 300ms ease;

    &:hover {
        opacity: 0.8;
        transform: scale(1.1);

    }

    &:active {
        opacity: 0.5;
        transform: scale(0.9);
    }
`