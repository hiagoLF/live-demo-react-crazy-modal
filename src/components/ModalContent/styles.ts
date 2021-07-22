import styled from "styled-components";

export const ModalContentContainer = styled.div`
   background-image: linear-gradient(to top right, #ffc947, #ff165d);
   color: #f6f7d7;
   text-shadow: 0 0 4px #0a1931;
   padding: 50px;
   border-radius: 20px;

   button {
      border: none;
      background-color: rgba(0, 0, 0, 0);
      outline: none;
      position: absolute;
      right: 10px;
      top: 10px;
      cursor: pointer;

      img {
         height: 30px;
      }
   }

   h1 {
      font-family: "Permanent Marker", cursive;
      font-weight: 500;
      font-size: 50px;
   }

   h3 {
      font-family: "Bangers", cursive;
      font-weight: 300;
      font-size: 25px;
   }
`;
