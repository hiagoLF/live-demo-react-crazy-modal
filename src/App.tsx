import React, { useState } from "react";
import "./App.css";
import CrazyModal from "react-crazy-modal";
import ModalContent from "./components/ModalContent";

const animations = [
   ["showByDownSlide", "fadeByDownSlide", "Down"],
   ["showByRightSlide", "fadeByRightSlide", "Right"],
   ["showByUpSlide", "fadeByUpSlide", "Up"],
   ["showByLeftSlide", "fadeByLeftSlide", "Left"],
   ["showByOpacity", "fadeByOpacity", "Opacity"],
   ["showByApproachSpin", "fadeByApproachSpin", "Spin"],
];

function App() {
   const [modalOpen, setModalOpen] = useState(false);
   const [animationTypes, setAnimationTypes] = useState([
      "showByDownSlide",
      "fadeByDownSlide",
   ]);

   const handleOpenModalButtonClick = (
      showAnimation: string,
      fadeAnimation: string
   ) => {
      setAnimationTypes([showAnimation, fadeAnimation]);
      setModalOpen(true);
   };

   return (
      <div className="App">
         <div>This is the app. Do everything you want!</div>

         {/* <CrazyModal
            open={modalOpen}
            onBackGroundClick={() => setModalOpen(false)}
            backgroundColor="#000"
            backgroundOpacity={0.5}
            animations={{
               background: {
                  appear: "showByOpacity",
                  disappear: "fadeByOpacity",
                  timingFunction: "ease",
                  time: 400,
               },
               modal: {
                  appear: animationTypes[0],
                  disappear: animationTypes[1],
                  timingFunction: "ease",
                  time: 400,
               },
            }}
         >
            <ModalContent onCloseClick={() => setModalOpen(false)} />
         </CrazyModal> */}

         <div
            style={{
               width: "100%",
               height: "100vh",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               flexDirection: "column",
            }}
         >
            {animations.map((animation, index) => (
               <button
                  style={{
                     width: "150px",
                     height: "60px",
                     margin: "20px",
                     fontSize: "30px",
                     fontWeight: 600,
                  }}
                  key={index}
                  onClick={() =>
                     handleOpenModalButtonClick(animation[0], animation[1])
                  }
               >
                  {animation[2]}
               </button>
            ))}
         </div>
      </div>
   );
}

export default App;
