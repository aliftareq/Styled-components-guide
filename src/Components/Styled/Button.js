import styled from "styled-components";

export const StyleButton = styled.button`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: transparent;
    color: white;
    border: 2px solid white;
    cursor: pointer;
    background-color:${(props) =>
        props.variant === 'primary' ? 'white' : 'transparent'
    };
    color:${(props) =>
        props.variant === 'primary' ? 'Black' : 'white'};

    &:hover{
        background-color:white;
        color:black;
    };

    &:last-child{
        background-color: orange;
    }
`;

export const styledButtonWithHover = styled.button`
        
`