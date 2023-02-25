import styled from "styled-components";
import {Form} from "formik"
import { motion } from "framer-motion";

export const InventoryCreateModalBackdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height:100vh;
  background: rgba(0, 0, 0, 0.548);
  z-index: 1;
`

export const FormFormik = styled(Form)`
    min-height: 30vh;
    height: fit-content;
    width: 40vw;
    background: white;
    position: absolute;
    overflow-y: auto;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > button {
        padding: 10px 20px;
        align-self: flex-end;
        margin: 20px 50px;
        background: rgb(51,102,51);
        border-radius: 10px;
        border: solid 1px gray;
        color: white;
        cursor: pointer;
    }

    & > h1 {
        text-align: center;
        margin-block: 10px;
        font-size: 1.8em;
        
    }
`
export const FormFieldContainer = styled.div`
    width: 85%;
    display: flex;
    margin: 8px;
    & > label {
        flex: 1;
        font-size: 0.9em;
        color: gray;
    }
`
export const FieldInputContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    &.setcategory {
        display: flex;
        justify-content: space-evenly;
    }
    & > input, select, textarea{
        width: 100%;
        padding: 5px 10px;
        font-size: 0.8em;
        border-radius: 5px;
        border: solid 1px gray;
        outline: none;
        resize: none;
    }

    & > textarea {
        height: 70px;
    }

    & > .error__message {
        color: maroon;
        text-align: center;
        font-size: 0.9em;
    }

    & > label {
        align-items: center;
        text-transform: capitalize;
    }
`