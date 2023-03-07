import styled from "styled-components";


export const ForgotPasswordWrapper = styled.div`
    background: url('/assets/Screenshot1.png');
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;

    
    
`

export const BackgroundBlur = styled.div`
    background: rgba(0, 0, 0, 0.507);
    height: 100vh;
    width: 100vw;
    position: fixed;
`

export const ForgotPasswordContainer = styled.div`
    width: 35vw;
    height: 70vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

    @media (max-width: 1000px) {
        width: 45vw;
    }
    @media (max-width: 800px) {
        width: 55vw;
    }

    @media (max-width: 650px) {
        width: 65vw;
    }

    @media (max-width: 550px) {
        width: 75vw;
    }

    @media (max-width: 480px) {
        width: 95vw;
    }
                
    & > .reset-password-form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        & > .passwordFieldContainer {
            display: flex;
            flex-direction: column;
        }

        & > button {
            width: 90%;
            align-self: center;
            padding: 10px 20px;
            border-radius: 5px;
            margin: 20px;
            cursor: pointer;
            border: solid 1px gray;
        }
    }

    & .back-a {
        margin: 15px 20px;
        font-size: 1.5em;
        width: fit-content;
    }
    
    & h1 {
        /* margin: 5px 15px; */
        text-align: center;
        font-weight: 500;
        font-size: 2.0em;
    }

    & p {
        /* margin: 5px 15px; */
        text-align: center;
    }

    & > img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        margin: 10px auto;
    }
`
export const ForgotPasswordFieldWrapper = styled.div`
    display: flex;
    flex-direction: column;

    & > .error__message {
        text-align: center;
        font-size: 0.9em;
        margin: -10px 0px 10px 0px;
    }
`

export const ResetPasswordFieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    align-self: center;
    margin: 5px;
    
    & > .error__message {
        font-size: 0.9em;
        color: maroon;
    }

    & > input {
        outline: none;
        border: none;
        padding: 5px 10px;
        border-radius: 3px;
        border: solid 1px gray;
    }
`

export const ForgotPasswordFieldContainer = styled.div`
    margin: 10px;
    width: 90%;
    display: flex;
    align-self: center;

    & > input {
        flex: 3;
        padding: 10px 10px;
    }

    & > button {
        flex: 1;
    }
`