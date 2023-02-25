import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 50px auto;
  align-items: center;

  & > h1 {
    margin: 20px;
    font-size: 2em;
    margin-top: 50px;
    font-weight: 100;
  }
`;

export const CategoryList = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  /* background: #EAEAEA; */
  padding-block: 10px;
  width: 100%;
`;

export const Category = styled.div`
  font-size: 1em;
  text-align: center;
  transition: all 0.2s ease-in-out;
  padding: 10px;
  text-transform: capitalize;
  border-bottom: ${({ active }: { active: boolean }) =>
    active ? "3px solid black" : "3px solid transparent"};
  color: ${({ active }: { active: boolean }) => (active ? "black" : "gray")};
  cursor: pointer;
  & > span {
    color: ${({ active }: { active: boolean }) => (active ? "black" : "gray")};
  }
  &:hover {
    color: black;
    border-bottom: black solid 3px !important;
    & > span {
      color: black;
    }
  }
`;

export const Filters = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-top: 50px;

  & > .filter__container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 20px;
    background: white;
    & > .filter {
      display: flex;
      align-items: center;
      /* border: solid 1px rgb(198,240,198); */
      border: solid 1px rgb(56,77,38);
      padding: 5px 10px;
      border-radius: 8px;
      gap: 5px;
      & > label {
        font-size: 0.8em;
        color: gray;
        transition: all .2s ease-in-out;
      }

      & > input,
      select {
        border: none;
        border-radius: 1px;
        outline: none;
        padding: 0px 5px;
      }
      & > select {
        text-align: center;
      }
    }
  }
`;

export const StoreBannerContainer = styled.section`
  background: url("/assets/storepic1.jpg");
  height: 400px;
  /* background-size: cover; */
  /* background-repeat: no-repeat; */
`;

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    align-items: center;
    justify-content: space-between;
    transition: all .3s ease-in-out;
    /* box-shadow: 1px 3px 5px gray; */
    opacity: ${({isOutOfStock}: {isOutOfStock: boolean}) => isOutOfStock ? '0.7' : '1'};
    pointer-events: ${({isOutOfStock}: {isOutOfStock: boolean}) => isOutOfStock ? 'none' : 'all'};
    text-decoration: ${({isOutOfStock}: {isOutOfStock: boolean}) => isOutOfStock ? ' line-through black 2px' : 'none'};
    cursor: default;
    &:hover {
      box-shadow: 1px 3px 5px gray;
    }

    
`

export const Price = styled.span`
  align-self: flex-end;
  color:rgb(56,77,38);
  /* font-size: 0.9em; */
  background: rgb(198, 240, 198);
  font-weight: 1000;
  padding: 5px 10px;
  border-radius: 10px;
  border-top-left-radius:0px ;
  border-bottom-right-radius:0px ;
`
export const Image = styled.img`
  object-fit: contain;
  width:65%;
  height: 150px;
  align-self: center;
`
export const Name = styled.span`
  font-weight: 1000;
  /* color: rgb(56,77,38); */
  text-transform: capitalize;
`

export const Details = styled.p`
  color: gray;
  font-size: 0.8em;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 90%;
`

export const Buttons = styled.span`
  margin: 20px;
  display: flex;
  width: 90%;
  justify-content: space-between;
    align-items: center;
  & > .add__to__cart {
  padding: 5px 13px;
  background: rgb(56,77,38);
  color: white;
  border-radius: 15px;
  font-size: 0.9em;
  align-self: flex-end;
  cursor: pointer;

  }
  & > .view {
    font-size: 1.3em;
    color: rgb(56,77,38);
    cursor: pointer;
  }
`