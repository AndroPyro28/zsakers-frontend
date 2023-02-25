import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const DonutsBg = styled.div`
    height: 350px;
    width: 100%;
    background: url('/assets/donutsbg3.jpg');
    background-size:cover;
    background-repeat: no-repeat;
    background-position: center;
`

export const AboutContent = styled.div`
    width: 90%;
    box-shadow: 1px 3px 5px gray;
    margin-top: -200px;
    background:white ;
    position: relative;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:100px;
    gap: 50px;
    & > h1 {
        text-align: center;
        font-size: 3em;
        color: rgb(51, 102, 51);
    }

     & > img {
        width: 200px;
        border-radius: 50%;
     }

     & > p {
        text-align: justify;
        font-size: 1.1em;
        color: rgb(54,48,48);
     }

     & > video {
        width: 80%;
        border-radius: 20px;
     }

    & > h2 {
        text-align: center;
        font-size: 3em;
        color: rgb(51, 102, 51);
    }
`

export const StoreContent = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
`

export const Content = styled.div`
    display: flex;
    flex-direction:column;
    gap: 20px;
     & > img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 10px;
     }

      & > h3 {
        text-align: center;
        font-size: 2em;
      }

      & > p {
        font-size: 1em;
        text-align: justify;
        color: rgb(54,48,48);

      }
`