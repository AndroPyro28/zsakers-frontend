import styled from "styled-components";



export const WeeklyWrapper = styled.div`
display: flex;
align-items: center;
flex-direction: column;
    & > .backBtn {
        font-weight: 1000;
        margin: 20px;
        font-size: 1.5em;
        align-self: flex-start;
        cursor: pointer;
    }
    overflow-x: hidden;
    & > button {
        width: fit-content;
    }

   
`

export const WeeklyContainer = styled.div`
background-size: 1000px;
/* height: 100vh; */
width: 100vw;
background-repeat: no-repeat;
background-position: center;
overflow-x: hidden;
`

export const BusinessName = styled.h1`
    text-align: center;
    margin: 20px 20px 5px 20px;
    font-size: 2em;
    font-style: oblique;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

export const Address = styled.h3`
    text-align: center;
    margin: 5px 20px 20px 20px;
    font-size: 1.3em;
    font-style: oblique;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`

export const Table = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    margin: 50px auto;
    
`

export const SummaryTableContent = styled.div`
display: flex;
justify-content: space-between;
`

export const SummaryTitle = styled.div`
border:solid 1px black;
flex: 1;
padding: 10px;

`

export const SummaryValue = styled.div`
border:solid 1px black;
flex: 1;
padding: 10px;
text-align: right;

`