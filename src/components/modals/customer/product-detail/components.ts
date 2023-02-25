import styled from "styled-components";
import {motion} from 'framer-motion'

export const ProductDetailsContainer = styled(motion.div)`
    height: 95vh;
    max-width: 65vw;
    width: 35vw; 
    background: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 10px;
    overflow: hidden;
    display: flex;

    & > button {
        position: absolute;
        top: 0px;
        right: 10px;
        border: none;
        background: none;
        color: maroon;
        font-size: 1.3em;
        font-weight: 1000;
        cursor: pointer;
    }
`

export const ImageContainer = styled.div`
width: 90%;
height: 250px;
background: rgb(232,241,243);
/* height: fit-content; */
padding: 20px;
border-radius: 10px;
display: flex;
justify-content: center;
& > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
`


export const Details = styled.div`
width: 90%;
display: flex;
flex-direction: column;
gap: 20px;
`

export const Title = styled.h1`
    font-weight: 100;
    margin: 20px;
    font-size: 1.3em;
`
export const Name = styled.span`
    font-size: 1.1em;
    font-weight: 500;
`

export const BundleSize = styled.span`
font-size: 1.1em;
    font-weight: 500;
`

export const Description = styled.p`
font-size: 0.8em;
color: gray;
text-align: justify;
max-height: 150px;
overflow-y: auto;
`

export const Price = styled.span`
font-weight: 1000;
`

export const Others = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const AddToCartBtn = styled.button`
    padding: 8px 20px;
    background: rgb(56,77,38);
    /* background: pink; */
    border: none;
    color: white;
    /* width: 50%; */
    border-radius: 5px;
    cursor: pointer;
`
export const ProductDetail = styled.div`
    height: 100%;
    width: 100%;
    max-width: 35vw;
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

export const ProductFlavors = styled.div`
    flex: 2;
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;

    & > h2 {
        margin: 30px;
        color: gray;
    }
`
export const Flavors = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 220px;
    gap: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    padding: 20px;
`
export const VariantContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 1px 3px 5px gray;
    border-radius: 10px;
    justify-content: center;
    min-width: 180px;
    gap: 5px;
    
    & > .product__name {
        font-size: 0.9em;
        color: rgb(51,102,51);
    }
    & > .product__setcategory {
        font-size: 0.9em;
        color:rgb(179,50,57);
    }
    & > .product__image {
        width: 70%;
        height: 50%;
        object-fit: cover;
        border-radius: 10px;
    }

    & > .product__description {
        text-align: center;
        font-size: 0.8em;
        max-height: 50px;
        overflow: hidden;
    }

    & > .buttons {
        width: 60%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        & > button {
            cursor: pointer;
            padding: 2px 7px;
            border-radius: 10px;
            border: none;
            color: gray;
            font-size: 1em;
            &.decrement {
                background: pink;
            }
            &.increment {
                background: rgb(198,240,198);
            }
        }
    }
`









export const Category = styled.span`

`

export const SubCategory = styled.span`

`

export const SetCategory = styled.span`

`

