import styled from "styled-components";

export const InputArea = styled.section`
    display: flex;
    max-width: 1024px;
    margin: auto;
    justify-content: space-between;
    padding: 40px 0px;
    input{
        height: 50px;
        width: 450px;
        border-radius: 2px;
        padding: 0px 10px;
        border: none;
        box-shadow: 2px 2px 1em rgba(0,0,0,0.2);
        outline: 0;
        font-size: 14px;
    }

    select{
        border-radius: 2px;
        padding: 0px 20px;
        border: none;
        box-shadow: 2px 2px 1em rgba(0,0,0,0.2);
        outline: 0;
        font-size: 14px;
    }

    @media (max-width: 1024px){
        display: flex;
        flex-direction: column;
        input{
            width: 343px;
        }
    }
`