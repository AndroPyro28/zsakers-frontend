import styled from "styled-components";
import {
  Button,
  ButtonGroup,
  DropDownButton,
  DropDownButtonItem,
  FloatingActionButton,
  SplitButton,
  SplitButtonItem,
  Toolbar,
  ToolbarItem,
  ToolbarSeparator,
  ChipList,
} from "@progress/kendo-react-buttons";

export const FilterItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`;

export const Search = styled.div`
  width: 100%;
  border: solid 1px rgb(56, 77, 38);
  display: flex;
  padding: 0px 10px;
  align-items: center;
  border-radius: 5px;

  & > label {
    color: gray;
  }
  & > input {
    flex: 1;
    padding: 5px 10px;
    width: 100%;
    outline: none;
    background: none;
    border: none;
  }
`;

export const CategoryList = styled.div`
  display: flex;
  margin: 10px;
  justify-content: flex-start;
  gap: 10px;
`;

export const Category = styled.span`
  max-width: 200px;
  padding: 5px 20px;
  border-radius: 20px;
  font-size: 0.9em;
  text-align: center;
  border: solid 1px rgb(56, 77, 38);
  color: rgb(56, 77, 38);
  background: ${({ active }: { active: boolean }) =>
    active ? "black" : "white"};
  color: ${({ active }: { active: boolean }) =>
    active ? "white" : "rgb(56,77,38)"};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: black;
    color: white;
  }
`;

export const SubSetCategory = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  border: solid 1px rgb(56, 77, 38);
  padding: 5px 8px;
  border-radius: 10px;
  & > label {
    font-size: 0.8em;
    color: rgb(56, 77, 38);
  }
  & > select {
    min-width: 100px;
    background: none;
    text-align: center;
    border: none;
    border-radius: 0.1px;
    outline: none;
    color: rgb(56, 77, 38);
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 3px 5px gray;
  justify-content: space-evenly;
  border-radius: 10px;
  align-items: center;
  background: white;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 80%;
  height: 60%;
  object-fit: cover;
`;

export const Name = styled.span`
  width: 80%;
  font-size: 0.9em;
`;

export const Price = styled.span`
  width: 80%;
  font-size: 0.9em;
`;
export const ProductsContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2.5;
  /* background: rgb(232,241,243); */
  min-height: 100vh;
`;
export const Products = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 250px;
  padding: 50px 20px;
  gap: 20px;
  overflow: auto;
  max-height: 80vh;
`;

export const CashierContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.5;
  & > h1 {
    margin: 20px;
    text-align: center;
  }
`;

export const Orders = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 55vh;
  overflow-y: auto;
  margin: 20px;
  gap: 10px;
  min-height: 55vh;
  /* justify-content: center; */
  & > h3 {
    color: gray;
    text-align: center;
    margin: auto;
  }
`;

export const OrderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 0.9em;
  & > td {
    flex: 1;
    /* gap: 10px; */
    & > .image {
      width: 80px;
      height: 80px;
    }

    &.remove {
      /* color: maroon; */
      font-size: 0.7em;
      color: red;
      /* font-weight: ; */
      align-self: flex-start;
    }

    & > button {
      background: #eaeaea;
      outline: none;
      border: solid 1px gray;
      padding: 5px 8px;
      border-radius: 20px;
      font-size: 1.1em;
      margin: 5px;
      cursor: pointer;
    }
    & > .name {
      width: fit-content;
    }
  }
`;

export const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 150px;
  width: 90%;
  align-self: center;
`;

export const Summary = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Subtotal = styled.span`
  font-size: 1.2em;
`;

export const SubtotalAmount = styled.span`
  font-size: 1.2em;
`;

export const Tax = styled.span`
  color: gray;
  font-size: 0.9em;
`;

export const TaxAmount = styled.span`
  color: gray;
  font-size: 0.9em;
`;

export const Discount = styled.span`
  color: gray;
  font-size: 0.9em;
`;
export const DiscountAmount = styled.span`
  font-size: 0.9em;
  color: gray;
`;

export const Total = styled.span`
  font-size: 1.2em;
`;

export const TotalAmount = styled.span`
  font-size: 1.2em;
`;

export const PrintReceiptButton = styled.button`
  padding: 10px 0px;
`;

export const ReceiptContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ReceiptContent = styled.div`
  background: #eaeaea;
  padding: 20px;
  border-radius: 10px;
  gap: 20px;

  & > h3 {
    text-align: center;
  }
`;

export const ReceiptHeader = styled.div`
  text-align: center;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

export const BranchName = styled.h2``;
export const Address = styled.div``;
export const Contact = styled.div``;

export const Date = styled.div``;

export const OrderId = styled.strong`
  & > span {
    font-weight: 100;
  }
`;

export const CashierInfo = styled.strong`
  display: flex;

  margin: 10px 0px;
  justify-content: space-between;
  & > span {
    font-weight: 100;
  }
`;

export const ReceiptBody = styled.div`
  border-top: dashed black 2px;
  border-bottom: dashed black 2px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;

export const ReceiptProduct = styled.div`
  display: flex;
  /* justify-content: space-evenly; */
  width: 100%;
  align-items: center;
  & > span {
    flex: 1;
    text-align: center;
  }
`;
export const ReceiptFooter = styled.div`
  margin: 10px;
  gap: 10px;
`;

export const SummaryContent = styled.section`
  display: flex;
  justify-content: space-between;
  & > {
    &.items-count {
      font-size: 1000;
    }
    &.sub-total {
      font-weight: 100;
    }
    &.total-amount {
      font-size: 1000;
    }
  }
`;
