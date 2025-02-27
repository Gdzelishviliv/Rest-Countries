import styled from "styled-components";

export const CountiesArea=styled.main`
    min-height: calc(100vh)-90px;
    .countries{
        display: grid;
        width:1024px;
        margin: auto;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 30px;
    }
    @media (max-width: 1024px) {
        .countries {
            grid-template-columns: repeat(2, 1fr);
            width: 500px;
        }
    }
`