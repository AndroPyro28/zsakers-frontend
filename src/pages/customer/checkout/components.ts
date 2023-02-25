import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
    body {
        background: rgb(230,233,234);
        /* display: flex;
        align-items: center;
        justify-content: center;
        height: 50vh;
        width: 100vw; */
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const CheckoutContainer = styled.div`
    display:flex;
    position: relative;
    flex-direction: column;
    width: 85vw;
    background: white;
    height: 85vh;
    align-items: center;
    border-radius: 20px;
    /* margin: auto; */

    
    & > .backBtn {
        position: absolute;
        left: 15px;
        top: 15px;
        width: fit-content;
        font-size: 1.2em;
        padding: 10px;
        color: rgb(92,92,92);
        border-radius: 50%;
        background: #EAEAEA;
    }

    & > h1 {
        color: rgb(92,92,92);
        margin-top: 40px;
        margin-bottom: 30px;
        text-transform: uppercase;
        font-size: 1.5em;
    }
`
export const ShoppingCart = styled.div`
    display: flex;
    width:95%;
    height: 80%;
    gap: 20px;
    /* margin-top: 50px; */
`