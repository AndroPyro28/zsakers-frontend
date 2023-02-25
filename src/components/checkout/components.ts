import styled from "styled-components";

export const PaymentSectionContainer = styled.section`
  flex: 1;
  display: flex;
  height: 100%;
  background: rgb(86, 92, 186);
  border-radius: 20px;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h1`
  color: white;
  margin: 15px;
  font-size: 1.5em;
`;
export const PaymentType = styled.div`
  margin-top: 30px;
  & > h3 {
    color: white;
    font-size: 1em;
    text-align: center;
  }
`;

export const Payments = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
  gap: 10px;
`;

export const Payment = styled.div`
  width: 80px;
  height: 80px;
  padding: 5px;
  border-radius: 5px;
  border: ${({ isSelected }: { isSelected: boolean }) =>
    isSelected ? `solid 2px white` : `solid 2px gray`};

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 5px;
  }
`;

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 80%;
  align-self: center;
`;

export const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
`;

export const ChekoutButton = styled.button`
  width: 90%;
  font-size: 1em;
  padding: 10px;
  align-self: center;
  margin: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  font-weight: 1000;
  border: none;
  background: rgb(0, 62, 204);
  color: white;
  font-size: 0.9em;
  cursor: pointer;
  &:hover {
    background: black;
  }
  & > span {
    margin: 0px 10px;

    &.title {
      text-transform: capitalize;
    }
  }
`;

export const CartSectionContainer = styled.section`
  flex: 2;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  & > h1 {
    color: rgb(92, 92, 92);
    margin-bottom: 40px;
    font-size: 1.5em;
  }
`;

export const CartProducts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex: 2;
  background: rgb(230, 233, 234);
  border-radius: 20px;
  padding: 20px;
  gap: 20px;
  box-shadow: 1px 3px 5px gray;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const CartProductContainer = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 15px;
  border-radius: 15px;
  max-height: 120px;
  min-height: 120px;
  width: 100%;
  overflow: hidden;
  /* border: solid 1px none; */
  border: ${({ isInCheckout }: { isInCheckout: boolean }) =>
    isInCheckout ? `solid 2px rgb(240,175,76)` : `solid 2px none`} !important;
  & > td {
    flex: 1;
    display: flex;
    justify-content: center;
    font-size: 1em;

    color: rgb(59, 59, 59);

    &.checkout {
      color: ${({ isInCheckout }: { isInCheckout: boolean }) =>
        isInCheckout ? `rgb(240,175,76)` : `rgb(255,231,147)`};
      font-size: 1.6em;

      & > span {
        cursor: pointer;
      }
    }

    &.name-details {
      display: flex;
      flex-direction: column;
      align-items: center;
      overflow: hidden;
      flex: 2;
      height: 100%;
      padding: 10px;
      & > .name {
        font-weight: 1000;
      }

      & > .details {
        font-size: 0.7em;
        font-weight: 1000;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 190px;
        color: gray;
      }
    }
    & > img {
      width: 90px;
      height: 90px;
      border-radius: 10px;
      object-fit: cover;
    }
    &.remove {
      align-self: flex-start;
      font-size: 0.7em;
      color: red;
      & > span {
        cursor: pointer;
      }
    }

    &.calculation,
    &.price {
      font-size: 0.9em;
    }

    &.quantity {
      gap: 10px;

      & > button {
        background: none;
        border: none;
        font-weight: 1000;
        color: gray;
        cursor: pointer;
        &.inc {
          color: lightgreen;
        }

        &:disabled {
          color: gray;
        }
      }
    }
  }
`;
