import { Form } from 'formik'
import styled from 'styled-components'

export const CheckOutModalContainer = styled(Form)`
    display: flex;
    flex-direction: column;
    /* height: 80vh; */
    height: 90vh;
    padding: 20px;
    width: 50vw;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    margin: auto;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    align-items: center;
    border-radius: 20px;
    overflow-x: hidden;
    overflow-y: auto;
    
    @media (max-width:855px) {
    width: 70vw;
    }

    @media (max-width:700px) {
    width: 80vw;
    }

    @media (max-width:600px) {
        width: 90vw;
    }

    & > .closeBtn {
        position: absolute;
        top: 10px;
        width: fit-content;
        right: 15px;
        font-size: 1.1em;
        cursor: pointer;
        color: maroon;
    }
    & > h1 {
        width: 85%;
        margin-block: 0px 10px;
    }

    & > h4{
        width: 85%;
    }

    & > p {
        width: 85%;
        display: flex;
        align-items: center;
        gap: 5px;
        margin-block: 20px 30px;

        & > .infoIcon {
            padding: 5px 10px;
            border-radius: 50%;
            border: solid 2px black;
        }
    }
`

export const FieldRow = styled.div`
    display: flex;
    width: 85%;
    gap: 10px;
    margin-top: 10px;
    

    @media (max-width:550px) {
        flex-direction: column;
    }

    & > .aggreement {
        color: maroon;
        font-size: 0.9em;
    }
`

export const FieldInput = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap:5px;
    & > input, select {
        padding: 5px 10px;
        border-radius: 5px;
        border: solid 1px gray;
        outline: none;
        color: dimgray;
        &::placeholder {
            font-weight: 400;
        }
    }

    & > .error {
        color: maroon;
        font-size: 0.9em;
    }
`

export const CheckoutButtons= styled.div`
    width: 85%;
    display: flex;
    justify-content: flex-end;
    margin: 30px;
    gap:10px;
    & > button {
        /* flex: 1; */
        padding: 5px 80px;
        cursor: pointer;
        &:disabled {
            color: gray;
            cursor: default;
        }

    }
`