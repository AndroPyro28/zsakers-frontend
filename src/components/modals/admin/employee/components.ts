import { Form } from "formik";
import styled from "styled-components";

export const CreateEmployeeForm = styled(Form)`
    /* height: 80vh; */
    height: fit-content;
    width: 35vw;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border-radius: 10px;

    & .exit {
        position: absolute;
        top:15px;
        right:15px;
        color: maroon;
        font-size: 1.3em;
        cursor: pointer;
    }

    & > h1 {
        text-align: center;
        margin: 20px 0px;
    }
        display: flex;
        flex-direction: column;

    & > button {
        width: 80%;
        align-self: center;
        padding: 5px 10px;
        margin: 20px 0px;
        border-radius: 8px;
        border: none;
        background: #EAEAEA;    
        transition: all .3s ease-in-out;
        background: black;
        color: white;
        cursor: pointer;
        &:hover {
            background: gray;
        }
    }
`

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 5px;
    align-self: center;

    & > label {
        color: black;
        /* font-size: 0.9em; */
    }

    & > input {
        border: solid 1px gray;
        outline: none;
        padding: 5px 10px;
        border-radius: 5px;
    }

    & > .error {
        color: maroon;
        font-size: 0.9em;
    }


`