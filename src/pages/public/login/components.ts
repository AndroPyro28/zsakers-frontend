import { useLocation } from "react-router-dom";
import styled from "styled-components";


export const AuthContainer = styled.div`
    display: flex;
    justify-content: center;
    /* padding: 0px 50px; */
    max-height: 100vh;
    & > .form {
        display: flex;
        flex-direction: column;
        flex: 0.6;
        gap: 20px;
        padding: 0px 50px;
        justify-content: center;

        & > .back-a {
            width: fit-content;
        }
        & > h1 {
            color: rgb(51,102,51);
            font-size: 2.5em;
        }
        & .backBtn {
            color: gray;
            font-size: 1.3em;
            color: gray !important;
        }
         & > p {
            color: dimgray;
            font-size: 500;
         }

         & > button {
            padding: 8px 0px;
            border-radius: 5px;
            outline: none;
            border: none;
            background: rgb(51,102,51);
            color: white;
            cursor: pointer;
         }

         & > a {
            color: gray;
            font-size: 0.9em;
            margin-inline: 10px;
         }
    }
`
export const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    & > label {
        font-weight: 1000;
        color: rgb(51,102,51);
        font-size: 1em;
    }
    & > input {
        padding: 5px 10px;
        outline: none;
        border: solid 2px gray;
        border-radius: 5px;
        /* font-size: em; */
    }

    & > .error__message {
        color: maroon;
        margin-inline: 5px;
        font-size: 0.9em;
    }
`
export const SideContent = styled.div`
    flex: 1;
    background: ${() => {
        const {pathname} = useLocation();
        if(pathname.includes('signup')) return `url('/assets/undraw7.png')`
        else { return `url('/assets/undraw5.png')`}
    }}; 
    /* background:url('/assets/screenshot1.png'); */
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right;
    height: 100vh;
    width: 100%;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    & > button, input {
            padding: 8px 0px;
            border-radius: 5px;
            outline: none;
            border: none;
            background: rgb(51,102,51);
            color: white;
            cursor: pointer;
            flex: 1;
         }
`