import styled, {createGlobalStyle} from "styled-components"

export const GlobalStyles =  createGlobalStyle`
    body {
        background: rgb(240,248,255);
        height: 100vh;
    }
`
export const SaleContainerPage = styled.div`
    display: flex;
    flex-direction:column;
    align-items: center;
    height: 100%;
    & > .exportButtons {
        align-self: flex-end;
        display: flex;
        & > button {
        background: white;
        border: none;
        padding: 10px 20px;
        margin: 0px 20px 20px 20px;
        cursor: pointer;
        border-radius: 10px;
        &:hover {
            box-shadow: 1px 3px 5px gray;
        }
    }
    }
    
`

export const Title = styled.h2`
    font-size: 1.5em;
    color: rgb(166,183,241);
    flex: 1;
    text-align: start;
    padding-inline: 20px;
`
export const FilterDataContainer = styled.div`
    width: 97%;
    margin: -0px 20px 20px 20px;
    border-radius: 10px;
    background: white;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    @media (max-width:800px) {
    flex-direction: column-reverse;
    }
`

export const FilterDataContainer2 = styled.div`
    width: 97%;
    margin: 10px 20px 20px 20px;
    border-radius: 10px;
    background: white;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px 0px;
    @media (max-width:800px) {
    flex-direction: column-reverse;
    }
`


export const PrintExport = styled.div`
    gap: 10px;
    display: flex;
    align-items: center;
    margin: 5px 20px;
    & > label {
    }
    &>select {
        padding: 5px 10px;
        outline: none;
    }

    &>button {
        padding: 4px 20px;
    }
`

export const PdfContent = styled.div`
    display: flex;
    justify-content: center;

    flex-direction: column;
    align-items: center;
    background: rgb(1, 1, 41);
    /* height: 100%; */
    /* width: 50%; */
    & > h1 {
        margin: 5px;
        color: white;
    }
`

export const Summary = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 100px;
`

export const MonthSummary = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px;

    & > .content {
        font-size: 0.5em;
    }

    & > h4 {
        margin: 5px 0px;
        color: gray;
        /* color: lightgreen; */
    }
`