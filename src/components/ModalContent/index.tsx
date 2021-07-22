import React from "react";

import { ModalContentContainer } from "./styles";
import cancelIcon from "../../assets/cancel.svg";

type ModalContentProps = {
   onCloseClick: () => void;
};

const ModalContent: React.FC<ModalContentProps> = ({ onCloseClick }) => {
   return (
      <ModalContentContainer>
         <button onClick={onCloseClick}>
            <img src={cancelIcon} alt="" />
         </button>
         <h1>React Crazy Modal</h1>
         <h3>It's just a simple modal</h3>
      </ModalContentContainer>
   );
};

export default ModalContent;
