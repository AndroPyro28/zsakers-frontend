import styled from "styled-components";

export const PopupCashierContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    height: fit-content;
    width: fit-content;
    display: flex;
    flex-direction: column;
    background: white;
    align-items: center;
    gap: 10px;
    padding: 20px;
    border-radius: 10px;
    & > button {
        width: 100%;
    }

    & .closeBtn {
        position: absolute;
        top: 10px;
        right: 15px;
        font-size: 1.3em;
        color: maroon;
    }
`

export const CashierInput = styled.div`
    padding: 10px;
    display: flex;
    gap: 10px;
    align-items: center;

    & > label {
        font-size: 0.9em;
    }

    & > input {
        font-size: 0.9em;
        outline: none;
        padding: 0px 5px;
    }
`