import React from 'react'
import styled from "styled-components";
import ClockLoader from 'react-spinners/ClockLoader';
const Loading = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: fit-content;
    height: fit-content;
    
`;

const Backdrop = styled.div`
 background: rgba(255, 255, 255, 0.945); 
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1111;
  top: 0;
  left: 0;`


function Loader() {

  return (
    <Backdrop>
      <Loading>
        <ClockLoader color={"#36D7B7"} size={60} />
      </Loading>
    </Backdrop>
  )
}

export default Loader