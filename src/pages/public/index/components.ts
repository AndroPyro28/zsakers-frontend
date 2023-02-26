import styled from "styled-components";

export const IndexContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Intro = styled.div`
  height: 620px;
  width: 100%;
  background: url("/assets/intro2.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

export const Content = styled.div`
  margin-inline: 120px;
  font-size: 3em;
  text-shadow: 1px 3px 5px black;

  @media (max-width:768px) {
    margin-inline: auto;
    font-size: 2.5em;
  }

  @media (max-width:468px) {
    margin-inline: auto;
    font-size: 2em;
  }
  & > p,
  span {
    color: white;
  }

  & > span {
    font-weight: 1000;
  }
`;

export const CircleContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: -50px;
  display: flex;
  justify-content: center;
  gap: 50px;
`;

export const Circle = styled.div`
  height: 230px;
  width: 230px;
  background: white;
  border-radius: 50%;
  border: solid 5px rgb(51, 102, 51);
  color: rgb(51, 102, 51);
  padding: 5px;

  @media (max-width:768px) {
    display: none;
  }
`;

export const Inner = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  color: rgb(51, 102, 51);
  display: flex;
  border: solid 1px black;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  & > p {
    font-weight: 1000;
    color: inherit;
    font-size: 1.5em;
  }

  /* & > .icon {
    font-size: 5em;
  } */
`;
