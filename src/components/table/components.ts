import styled from "styled-components";

export const TableRow = styled.div`
  display: flex;
  width: 100%;
  & > th,
  td {
    flex: 1;
    font-weight: 500;
    display: flex;
    justify-content: center;
    &.image {
      flex: 1;
      
      & > .image-border {
        padding: 8px;
        border-radius: 10px;
        border: solid 1px gray;
        display: flex;
        justify-content: center;
        align-items: center;
        
        & > img {
          width: 65px;
          height: 65px;
          object-fit: contain;
          border-radius: 10px;
        }
      }
    }

    &.name {
      flex: 1.5;
    }

    &.action {
      flex: 0.8;
    }
  }

  & > th {
    margin: 20px 0px;
    color: gray;
    font-weight: 100;
  }
  & > td {
    align-items: center;
    height: 80px;
    font-weight: 100;
    font-size: 0.9em;
  }
`;
