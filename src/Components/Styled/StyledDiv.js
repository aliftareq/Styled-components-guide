import styled from "styled-components";

export const StyleDiv = styled.div`
    background-color:steelblue;
    width:200px;
    height:200px;
    padding:1rem;

    p{
        color:white;
        font-weight:2rem;
        a{
            color:red;
            &:hover{
                transform:rotate(-15deg);
            }
        }
    }
    a{
        color:tomato;
        display:inline-block;
        margin-top:1rem;
    }
`