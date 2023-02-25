import styled from "styled-components";

export const AdminNavbarContainer = styled.nav`
    display: flex;
    background: white;
    height: 80px;
    align-items: center;
    border-radius: 20px;
    box-shadow: 1px 3px 5px gray;
`

export const AdminLinks = styled.div`
flex: 1;
padding-inline:20px;
& > a {
    padding: 10px;
    margin: 5px;
    font-size:0.8em;
}
`

export const UserProfile = styled.div`
height: 50px;
display: flex;
align-items: center;
margin-right: 50px;
gap: 10px;
& > img {
    width: 50px;
}

& > .user-firstname {
    font-size: 0.9em;
}
`

export const DropDown = styled.div`
    & .i {
        cursor: pointer;
        padding: 5px;
        border-radius: 50%;
        &:hover {
            background: #eaeaea;
        }
    }
`

export const DropdownContent = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    margin-left: -60px;
    margin-top: 10px;
    background: white;
    gap: 5px;
    border: solid 1px gray;
    border-radius: 10px;
    overflow: hidden;
    z-index: 1;
    & > a {
    width: 100%;
    padding: 10px 30px;
        &:hover { 
            background: #EAEAEA;
        }
    }
`