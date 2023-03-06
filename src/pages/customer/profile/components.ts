import { Form } from "formik";
import styled from "styled-components";

export const ProfilePageContainer = styled.section`
  background: rgb(235, 236, 240);
  display: flex;
  flex-direction: column;
  width: 100vw;
  position: relative;
  & > i {
    position: relative;
    margin: 10px;
    font-size: 1.5em;
    padding: 15px;
    border-radius: 50%;
    transition: all 0.3s ease;
    cursor: pointer;
    width: fit-content;
    &:hover {
      background: lightgray;
    }
    @media (max-width: 400px) {
      position: relative;
      width: fit-content;
      margin: 10px;
      justify-self: end;
    }
  }
`;

export const ProfileAvatar = styled.div`
  display: flex;
  margin: 60px 50px;
  position: relative;
  @media (max-width: 430px) {
    margin: 30px 0px;
  }
  & > div {
    width: 80px;
    & > img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: solid 3px gray;
      object-fit: cover;
      display: flex;
      flex-direction: column-reverse;
      @media (max-width: 430px) {
        width: 70px;
        height: 70px;
      }
    }
    & > input {
      cursor: pointer;
      width: fit-content;
      padding: 5px;
      margin-top: 10px;
      background: rgb(192, 192, 192);
      border-radius: 10px;
    }
  }
  & > .full-name {
    font-size: 1.5em;
    margin: 10px;
    font-family: "Open Sans", sans-serif !important;
    display: flex;
    flex-direction: column;
    @media (max-width: 430px) {
      font-size: 1.3em;
    }
    & > .icons {
      display: flex;
      justify-content: space-between;
      & > .button-icons {
        & > button {
          margin: 5px;
          padding: 3px 5px;
          border-radius: 5px;
          cursor: pointer;
          color: white;
          border: none;
        }
      }
    }
  }
`;

export const ListNavigationButton = styled.div`
  margin: 0px 20px 50px 150px;
  text-align: start;
  @media (max-width: 430px) {
    margin: 20px auto;
  }
  & > a {
    text-align: start;
    padding: 10px 20px;
    font-size: 0.9em;
    color: rgb(75, 74, 74);
    transition: all 0.3s ease-in-out;
    border-bottom: solid 2px rgb(235, 235, 235);
    &:hover {
      border-bottom: solid 2px rgb(99, 98, 98);
    }
  }
`;

export const ActivitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
`;

export const UserInfo = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background: white;
  padding: 40px 50px;
  position: relative;
  overflow-x: hidden !important;
  @media (max-width: 430px) {
    padding: 10px 10px;
  }
  & .editBtn {
      position: absolute;
      right: 20px;
      top: 10px;
      margin: 10px;
      font-size: 1.5em;
      cursor: pointer;
    }
  & > button {
    width: fit-content;
    align-self: flex-start;
  }

  

`;

export const RowInfo = styled.div`
  display: flex;
  width: 60%;
  margin: 15px 90px;
  text-align: start;
  @media (max-width: 600px) {
    margin: 15px 0px;
    width: 100%;
    flex-direction: column;
  }

  & > .info {
    display: flex;
    flex-direction: column;
    flex: 1;
    max-width: 80%;
    @media (max-width: 600px) {
      margin: 0 10px;
    }
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    & > input {
      padding: 10px;
      border-radius: 10px;
      width: 70%;
      border: solid 1px gray;
      outline: none;
      @media (max-width: 600px) {
        width: 100%;
      }
    }
    & > h3 {
      /* font-family: "Open Sans", sans-serif; */
      margin: 5px 0px;
    }
    & > span {
      font-size: 0.9em;
    }

    & > .error__message {
      font-size: 0.9em;
      color: maroon !important;
      margin: 5px;
    }
  }
`;


export const UserActivities = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background: white;
  padding: 40px 50px;
  @media (max-width:600px) {
    padding: 40px 0px;
  }
  & > h2 {
    margin: 20px 90px;
    text-transform: uppercase;
    text-align: start;
    @media (max-width:600px) {
    font-size: 1.3em;
    text-align: center;
    }
  }
  & > h4 {
      text-align: center;
      font-size: 1.5em;
      color: gray;
      margin: 20px;
      @media (max-width:600px) {
      font-size: 1em;
    }
  }
`;

export const RowInfoHistory = styled.div`
  display: flex;
  width: 90%;
  margin: 15px 90px;
  /* cursor: pointer; */
  @media (max-width:700px) {
    width: 100%;
    margin: 15px 0px;
  }
  @media (max-width:600px) {
    font-size: 0.9em;
    margin-inline: auto;
  }
`;

export const Activity = styled.div`
  @keyframes onGoingAnimation {
    0% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
    }
  }
  display: flex;
  flex: 1;
  font-size: 0.9em;
  align-items: center;
  font-weight: 500;
  & > .status {
    padding: 5px 20px;
    border-radius: 10px;
    color: white;
    background: #eaeaea;
    text-transform: capitalize;
    text-decoration: none;
    background: ${({ status }: {status: string}) => {
      return status == "cancelled"
        ? "rgb(234,67,53)"
        : status == "pending" ? 
        "rgb(255, 207, 67)"
        : status == "onGoing"
        ? "rgb(66,133,244)"
        : "rgba(7, 207, 90, 0.822)";
    }};
    @media (max-width:500px) {
    padding: 5px 10px;
    }
  }
  & > span {
    text-transform: capitalize;
    color: ${({ status }) => (status == "cancelled" ? "gray" : "black")};
    text-decoration: ${({ status }) =>
      status == "cancelled" ? "line-through" : "none"};
    animation: ${({ status }: {status: string}) =>
      status == "onGoing"
        ? "onGoingAnimation 800ms alternate Infinite ease-in-out"
        : "none"};
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  position: absolute;
  bottom: 0px;
  & > .i {
    padding: 10px;
    color: black;
    cursor: pointer;
  }
  & > span {
    font-size: 1em;
    font-weight: 500;
  }
`
