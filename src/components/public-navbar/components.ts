import styled from "styled-components";

export const PublicNavbarContainer = styled.nav`
    display: flex;
    height: 90px;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    background: white;
    top: 0;
    left: 0;
    padding-inline: 50px;
    z-index: 1;
    & > img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }

     & > span {
        font-size: 1.1em;
        font-weight: 1000;
        text-transform: uppercase;
        color: rgb(51,102,51);
        position: relative;
        cursor: pointer;
        text-decoration: wavy;
     }

     & > .hambuger__nav {
        font-size: 1.5em;
        font-weight: 1000;
        color: rgb(51,102,51);
        cursor: pointer;
        display: none;
        padding: 10px 20px;
        border-radius:10px;
        transition: all .1s ease-in-out;

        &:hover {
            background: rgb(51,102,51);
            color: white;
        }

        @media (max-width:768px) {
            display: block;
        }
     }
`

export const DropdownContent = styled.div`
    /* display: none; */
    display: flex;
    flex-direction:column;
    position: absolute;
     background: white;
     border-radius: 10px;
     padding: 10px 0px;
     right: -30px;
     top: 60px;
     border: solid 1px gray;
     
    & > a {
        font-size: 0.8em;
        margin-inline: 10px;
        color: rgb(51,102,51);
        font-weight: 1000;
        /* text-transform: uppercase; */
        padding: 10px 20px;
        border-radius:10px;
        transition: all .1s ease-in-out;
        &:hover {
            background: rgb(51,102,51);
            color: white;
        }
    }
`

export const Links = styled.div`
    display: flex;
    & > a {
        font-size: 1.1em;
        margin-inline: 10px;
        color: rgb(51,102,51);
        font-weight: 1000;
        text-transform: uppercase;
        padding: 10px 20px;
        border-radius:10px;
        transition: all .1s ease-in-out;
        &:hover {
            background: rgb(51,102,51);
            color: white;
        }
    }

    @media (max-width:768px) {
        display: none;
    }
`
