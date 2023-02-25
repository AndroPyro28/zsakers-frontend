import styled from 'styled-components'

export const EmployeeContainer = styled.div`
    margin: 10px;

    & > h3 {
        color: gray;
        text-align: center;
        margin: 20px;
    };
`

export const Header = styled.div`
    background: rgb(250,250,252);
    padding:50px;
    & > h2 {
        color: rgb(49,50,80);
    }
    & > p {
        color: gray;
        font-size: 0.9em;
    }
`;

export const EmployeeList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    & > h1 {
        text-align: center;
    }
`

export const Filters = styled.div`
    display: flex;
    margin: 40px 0px;
    width: 100%;
    justify-content: space-between;
    padding: 0px 20px;
    height: 40px;
    & > button {
        padding: 0px 15px;
        color: white;
        background: rgb(1,59,77);
        border: none;
        cursor: pointer;
        border-radius: 10px;
    }
`

export const SearchBarContainer = styled.div`
    background: rgb(245,245,248);
    padding: 5px;
    border-radius: 5px;
    display: flex;
    margin: 0px 20px;
    align-items: center;
    & > .i{
        color: gray;
    }
& > input {
    border: none;
    background: transparent;
    outline: none;
    padding: 3px 5px;
}

`

export const EmployeeListHeaderContainer = styled.thead`
    display: flex;
    background: rgb(247,247,249);
    padding: 15px 0px;
    margin: 10px 0px;
    & > th {
        flex: 1;
        color: gray;
        font-weight: 500;
        &.action {
        flex:0.5;
        color: gray;
    }
    }    
`