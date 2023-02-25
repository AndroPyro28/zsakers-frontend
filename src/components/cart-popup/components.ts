import styled from "styled-components";

export const CartPopupBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 35%;
  margin-right: 50px;
  right: -30px;
  top: 70px;
  background: white;
  box-shadow: 1px 3px 5px gray;
  border-radius: 10px;
  color: black;
  min-height: 10vh;
  z-index: 10000;

  max-height: 75vh;

  @media (max-width: 1000px) {
    width: 40%;
  }

  @media (max-width: 900px) {
    width: 45%;
  }

  @media (max-width: 750px) {
    width: 55%;
  }

  @media (max-width: 550px) {
    width: 70%;
  }

  @media (max-width: 450px) {
    width: 80%;
  }

  @media (max-width: 400px) {
    width: 90%;
  }

  @media (max-width: 350px) {
    width: 100%;
    margin-right: 30px;
  }
`;
export const CartPopupBoxContainer = styled.div`
 position: relative;
   height: 100%;
   z-index: 10000;
   & > h1 {
     margin: 20px;
     text-align: start;
     color: #181818;
     font-size: 1.3em;
     @media (max-width:550px) {
      font-size: 1em;
     }
    }
`;

export const CartSummary = styled.div`
  height: 100px;
  text-align: start;
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media (max-width: 550px) {
    font-size: 1em;
  }

  & > button {
    padding: 5px;
    border-radius: 10px;
    border: none;
    /* background: rgb(248,181,81); */
    color: white;
    font-size: 0.9em;
    margin: 5px;
    cursor: pointer;
    background: rgb(56,77,38);
    transition: all 0.3s ease;
    @media (max-width: 550px) {
      font-size: 0.8em;
    }
    &:hover {
      background: black;
    }
  }
`;

export const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0vh;
  max-height: 45vh;
  overflow: auto;
  @media (max-width: 550px) {
    font-size: 1em;
  }
`;

export const SummaryRow = styled.div`
  display: flex;
  margin: 5px;
  justify-content: space-between;
  @media (max-width: 550px) {
    font-size: 0.9em;
  }
  & > h1 {
    flex: 1;
    color: #181818;
    font-size: 1em;
    @media (max-width: 550px) {
      font-size: 1em;
    }
  }

  & > span {
    flex: 1;
    text-align: end;
    color: #181818;
    @media (max-width: 550px) {
      font-size: 1em;
    }
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  border-bottom: solid 2px lightgray;
  border-width: 80%;
  margin: 10px;
  padding: 10px;
  gap: 10px;
  @media (max-width: 550px) {
    font-size: 1em;
  }

 
  & > img {
    width: 100px;
    max-height: 80px;
    max-width: 100px;
    margin: 0;
    object-fit: contain;
  }

  & > * {
    flex: 1;
    margin-top: 10px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  & > i {
    color: red;
    flex: 0.5;
    padding: 10px 0px;
    border-radius: 50%;
    height: fit-content;
    width: fit-content;
    margin-top: 0px;
    cursor: pointer;
    &:hover {
      background: lightgray;
    }
  }
`;

export const ProductName = styled.div`
  font-size: 0.9em;
  flex: 2 !important;
  color: #181818;
  font-weight: 500;
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media (max-width: 550px) {
    font-size: 0.7em;
  }

  & > small {
    color: gray;
    font-weight: 500;
  }
`;
export const ProductQuantity = styled.div`
  font-size: 0.9em;
  font-weight: 500;
  color: gray;
  & > button {
    margin: 5px;
    border: none;
    padding: 2px 4px;
    border-radius: 10px;
    color: gray;
    cursor: pointer;
    background: none;
    font-size: 1.1em;
    font-weight:1000;
    &.incremeant {
    color: lightgreen;
      &:disabled {
        color: gray;
      }
    }
  }

  @media (max-width: 550px) {
    font-size: 0.7em;
  }
`;
export const ProductPrice = styled.div`
  font-size: 0.9em;
  font-weight: 600;
  color: gray;

  @media (max-width: 550px) {
    font-size: 0.7em;
  }
`;