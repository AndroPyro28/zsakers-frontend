import styled from "styled-components";

const excludeRoutes = [
    '/customer/payment'
]

export const CustomerNavbarContainer = styled.div`
    display: flex;
    height: 90px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    background: white;
    /* box-shadow: 1px 3px 5px #EAEAEA; */
    display: ${({url} : {url: string}) => excludeRoutes.includes(url) ? 'none' : 'flex'};

    & > .hamburger__nav {
        align-self: center;
        flex: 1;
        display: none;
        font-size: 1.5em;
        cursor: pointer;
        @media (max-width: 968px) {
            display: flex;
        }
    }
`

export const CustomerLinks = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    padding-inline:20px;
    @media (max-width: 968px) {
            display: none;
        }

    & > a {
        padding: 10px ;
        margin: 5px;
        font-size: 0.9em;
    }
`

export const UserProfile = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    padding-inline: 30px;
`

export const Cart = styled.div`
    padding: 5px 20px;
    border: solid 2px black;
    border-radius: 10px;
    cursor: pointer;
    transition: all .3s ease-in-out;
    & > .title {
        padding-inline:10px;
        font-size: 0.9em;
    }
    & > .cart__number {
        padding: 0px 5px;
        background: black;
        border-radius: 10px;
        color: white;
        font-size: 0.9em;
    }

    &:hover {
        background: rgb(56,77,38);
        color: white !important;
        border-color: transparent;
        & > .cart__number {
            color: white !important;
            /* background: rgb(56,77,38); */
        }
    }
`
export const User = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    font-size: 1.3em;

    & > .icon-container {
        padding:7px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        cursor: pointer;

        &:hover {
            background: #EAEAEA;

        }
    }
`

export const PhotoBorder = styled.div`
    border-radius: 50%;
    width: fit-content;
    height: fit-content;
    width: 50px;
    height: 50px;
    border: solid 1px gray;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Photo = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`