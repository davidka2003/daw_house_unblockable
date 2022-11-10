import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import samsara from "../assets/samsara.png";
import "../scss/unblockable.scss";
const StyledSamsara = styled.div`
  width: 57%;
  max-width: 750px;
  padding: 40px 80px;
  max-height: 400px;
  border-radius: 5px;
  border: solid 1px rgba(245, 245, 245, 0.549);
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 25px;
  img {
    text-align: center;
    /* width: 50%; */
    height: 85px;
  }
  h1 {
    /* font-size: 20pt; */
    font-size: clamp(20px, 1.9vw, 27px);
    font-weight: 300;
    word-spacing: 3px;
    letter-spacing: 1px;
    margin: 0 !important;
    color: white;
  }
  p {
    color: rgb(197, 197, 197);
    font-size: clamp(12px, 1.4vw, 17px);
    font-weight: 100;
    letter-spacing: 1px;
    margin: 0;
  }
  @media only screen and (max-width: 1000px) {
    padding: 20px;
  }
  @media only screen and (max-width: 768px) {
    padding: 20px;
    width: 100%;
  }
`;
const StyledPurchaseButton = styled(motion.button)`
  background-color: rgb(80, 170, 210);
  margin-bottom: 0;
  letter-spacing: 2px;
  font-size: clamp(8pt, 1vw, 13pt);
  padding: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  @media only screen and (max-width: 1000px) {
    padding: 20px 10px;
  }
  @media only screen and (max-width: 768px) {
    padding: 10px;
  }
`;
const CardSamsaraRow = styled.div``;
const Samsara = ({
  content,
}: {
  content: {
    type: "HOUSE" | "DAW";
    content_type: "link" | "code";
    content: string;
  };
}) => {
  const reveal = () => {
    window.open("https://www.samsaraluggage.com/", "_blank");
  };
  return (
    <StyledSamsara>
      <img src={samsara} alt="" />
      <h1>Use discount code: {content.content}</h1>
      <p>The code is applicable through the Samara Luggage store.</p>
      <StyledPurchaseButton whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} onClick={reveal}>
        VISIT SAMSARA LUGGAGE
      </StyledPurchaseButton>
    </StyledSamsara>
  );
};

export default Samsara;
