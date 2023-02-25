import styled from "styled-components";

export const FeaturedProductsContainer = styled.div`
    display: flex;
    width: 90%;
    margin-block: 150px;
    margin-inline: auto;
    border-radius: 10px;
    box-shadow: 1px 3px 5px gray;
    overflow: hidden;
    /* height: 500px; */
`

export const Productsidebar = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    & > span {
        width: 100%;
        color: rgb(51,102,51);
        padding: 10px;
        font-size: 1.5em;
        font-weight: 1000;
        text-transform: uppercase;
        display: flex;
        text-align: start;
        padding: 15px 50px;
        cursor: pointer;
        transition: all .3s ease-in-out;
        &:hover {
            background: rgb(179,202,179);
        }
        &.active {
            background: rgb(179,202,179);
        }
    }
`
export const Products = styled.div`
    flex: 3;
    border: solid 2px rgb(51,102,51);
    border-radius: 5px;
    & > h1 {
        padding: 20px;
        font-size: 2em;
        color: rgb(51,102,51);
        background: #EAEAEA;
    }
`

export const ProductList = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    margin-top: 50px;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 300px;
    gap: 20px;
    padding: 20px;
    min-height: 900px;
`

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 10px;
    gap: 10px;
    cursor: pointer;
     & > img {
        width: 90%;
        max-height: 200px;
        height: 200px;
        object-fit: cover;
        border-radius: 10px;
     }
`

export const ProductName = styled.div`
    color: rgb(51,102,51);
    font-size: 1em;
`
export const ProductPrice = styled.div`
    color:rgb(179,50,57);
    font-size: 0.9em;
`