import styled from "styled-components";

export const SideNavModal = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  height:100vh;
  position: fixed;
  background: rgba(0, 0, 0, 0.548);
  z-index: 1;
  display: none;
  cursor: pointer;
  @media (max-width: 968px) {
            display: block;
  }
`

export const MenuList = styled.div`
flex-direction: column;
  display: flex;
  background: white;
  height: 100vh;
  width: 70%;
  justify-content: space-evenly;
  & > a {
    font-size: 1.2em;
    font-weight: 500;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background: #EAEAEA;
    }
  }
`