import { Form } from "formik";
import styled from "styled-components";


export const ProductContainer = styled.div`
    display: flex;
    padding-block: 10px;
    flex-direction: column;
    gap: 20px;

    &:nth-child(even) {
        background: #EAEAEA;
    }
`

export const ProductBottomSide = styled(Form)`
    display: flex;
    width: 100%;

    & .error__message {
        color: maroon;
        font-size: 0.8em;
    }
    & > * {
        
    }
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
    background: rgb(51,102,51);
    color: white;
    cursor: pointer;
}
`

export const ItemRowInfoContainer = styled.div`
    display: flex;
    padding: 10px;
    gap: 10px;
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