import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const StyledCard = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  width: fit-content;
  border: solid 1px rgba(245, 245, 245, 0.549);
  border-radius: 5px;
  /* padding: 20px 0; */
  @media screen and (max-width: 768px) {
    height: 220px;
    width: 100%;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    /* max-height: 180px; */
    /* max-height: 180px; */
  }
`;
const StyledSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  height: auto;
  gap: 15px;
  padding: 10px;

  h1 {
    margin: 0;
    font-size: clamp(4pt, 5vw, 12pt);
  }
`;
const StyledPurchaseButton = styled(motion.button)`
  width: fit-content;
  width: clamp(100px, 100%, 130px);
  background-color: rgb(80, 170, 210);
  letter-spacing: 2px;
  font-size: clamp(2pt, 3vw, 8pt);
  padding: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
`;
const StyledLogo = styled.img`
  /* width:20px; */
  height: 40px;
`;
const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  p {
    margin: 0;
    line-height: 200%;
  }
  white-space: pre-line;
  /* font-size: clamp(5pt, 4vw, 9pt); */
  font-size: clamp(10px, 0.9vw /* 10pt */, 22px);
  @media screen and (max-width: 768px) {
    /* font-size: 10px; */
  }
`;
export interface ICardProps {
  //   title: string;
  text: React.ReactNode;
  logo: string;
  image: string;
  buttonText: string;
  link: string;
}
const Card = ({ image, text, logo, buttonText, link }: ICardProps) => {
  const OpenLink = () => open(link);
  return (
    <StyledCard>
      <LeftSide>
        <img src={image} alt="" />
      </LeftSide>
      <StyledSide>
        <div>
          {/* <h1>{title}</h1> */}
          <StyledLogo src={logo} alt="" />
        </div>
        <StyledText>{text}</StyledText>
        <StyledPurchaseButton onClick={OpenLink} whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }}>
          {buttonText}
        </StyledPurchaseButton>
      </StyledSide>
    </StyledCard>
  );
};

export default Card;
