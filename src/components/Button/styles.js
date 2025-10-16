import styled from "styled-components";


export const Button = styled.button`
    border: ${(props) =>
        props.theme === 'primary'
        ? 'none'
        : '1px solid white'};
    background: ${(props) => 
        props.theme === 'primary' 
            ? 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)' 
            : 'transparent'}; 
    font-size: 16px;
    color: #FFF;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 30px;
    transition: all 300ms ease;

    &:hover {
        background:${props =>
            props.theme === 'primary'
            ? ''
            : 'white'};
        opacity: 0.8;
        transform: scale(1.1);
        color: ${props =>
            props.theme === 'primary'
            ? 'white'
            : '#1c1c36ff'};

    }

    &:active {
        opacity: 0.5;
        transform: scale(0.9);
    }
`

