import { Form } from "formik";
import styled from "styled-components";


export const ProductContainer = styled.div`
    display: flex;
    padding-block: 10px;
    flex-direction: column;
    gap: 20px;
    /* overflow: auto; */

    &:nth-child(even) {
        background: #EAEAEA;
    }
`

export const ProductBottomSide = styled(Form)`
    display: flex;
    width: 100%;
    overflow: auto;
    overflow-x: hidden;
    flex-direction: column;
    & .error__message {
        color: maroon;
        font-size: 0.8em;
    }
    & > * {
        
    }
`

export const ProductMenu = styled.div`
    display: flex;
    width: 100%;
    overflow: auto;
    overflow-x: hidden;

`

export const LeftProductContent = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
& > label {
    padding: 10px;
    border-radius: 10px;
    border: solid 1px gray;
    margin: 15px;
    cursor: ${({disableUpdate}: {disableUpdate: boolean}) => disableUpdate ? 'default': 'pointer'} ;
    background: ${({disableUpdate}: {disableUpdate: boolean}) => disableUpdate ? 'none': '#EAEAEA'} ;
    & > img {
    width: 110px;
    height: 110px;
    border-radius: 10px;
    object-fit: cover;

}
};

`
export const RightProductContent = styled.div`
flex: 3;
display: flex;
flex-direction: column;

`

export const ActionButtons = styled.div`
    display: flex;
    margin: 10px;
    & > button, input {
    padding: 10px 20px;
    margin: 5px;
    border-radius: 10px;
    border: none;
    background: rgb(1,59,77);
    color: white;
    cursor: pointer;
}
`

export const ItemRowInfoContainer = styled.div`
    display: flex;
    padding: 10px;
    gap: 10px;

    @media (max-width:500px) {
        flex-direction: column;
    }
`

export const ItemRowInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    & > label {
        font-size: 0.9em;
        color: gray;
        margin: 10px 0px;
    }
    & > input, select, textarea {
        width: 90%;
        border: none;
        border-bottom: solid 1px gray;
        outline: none;
        padding: 5px 10px;
        background: none;
        resize: none;
        &:disabled {
            color: gray;
            font-style: italic;
        }
    }

    & > textarea {
        border: solid 1px gray !important;
        width: 96%;
        border-radius: 10px;
        height: 90px;

    }

    & > select {
        border-radius: 0.1em;
    }
`

export const BundleProducts = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 130px;
    gap: 50px;
    padding: 20px 50px;
    overflow-x: hidden;
    @media (max-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
    }
`

export const BundledProductContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 10px;
    border: solid 1px gray;;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:active {
        scale: 1.1;
    }
    & > img {
        width: 80%;
        height: 80%;
        object-fit: cover;
        border-radius: 10px;
    }

    & > .check {
        color: darkgreen;
        position: absolute;
        top: 3px;
        right: 3px;
        font-size: 1em;
    }

    & > span {
        color: darkgreen;
        font-size: 0.9em;
        width: 100%;
    }

`

export const BundleProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & >h1 {
        margin: 20px;
    }
`