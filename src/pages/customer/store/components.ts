import styled, { createGlobalStyle } from "styled-components";

export const StoreGlobalStyles = createGlobalStyle`
body {
}
`
export const StoreContainer = styled.div`

`

export const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 320px;
    background: rgb(232,241,243);
    gap: 30px;
    padding: 50px 40px;

    @media (max-width:900px) {
    grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width:634px) {
    grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width:420px) {
    grid-template-columns: repeat(1, 1fr);
    }
`

export const ProductDetailsContainer = styled.div`
    display: flex;
`