import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import moxyLogo from "../assets/moxyLogo.png";
import moxyHotels from "../assets/moxyHotels.jpeg";
const StyledMoxyHotels = styled.div`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  .picture,
  .description {
    border: solid 1px rgba(245, 245, 245, 0.549);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    max-width: 750px;
    width: 100%;
  }
  .picture {
    align-items: center;
    justify-content: center;
    img {
      max-width: 100%;
    }
  }
  .description {
    flex: 1 0 0;
    display: flex;
    /* justify-content: center; */
    justify-content: space-between;
    flex-direction: column;
    padding: 40px 80px;
    gap: 25px;
    h1,
    p {
      margin: 0;
      line-height: 110%;
      color: white;
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
    a {
      text-decoration: underline;
      color: white;
    }
    p {
      color: rgb(197, 197, 197);
      font-size: clamp(12px, 1.4vw, 17px);
      font-weight: 100;
      letter-spacing: 1px;
      margin: 0;
    }

    img {
      max-height: 85px;
      object-fit: contain;
    }
    @media only screen and (max-width: 1000px) {
      padding: 20px;
    }
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
  width: 80%;
  align-self: center;
  @media only screen and (max-width: 1000px) {
    padding: 20px 10px;
  }
  @media only screen and (max-width: 768px) {
    padding: 10px;
  }
`;

const MoxyHotels = ({
  content,
}: {
  content: {
    type: "HOUSE" | "DAW";
    content_type: "link" | "code";
    content: string;
  };
}) => {
  const reveal = () => {
    window.open("https://www.marriott.com/en-us/hotels/miaox-moxy-miami-south-beach", "_blank");
  };
  return (
    <StyledMoxyHotels>
      <div className="picture">
        <img src={moxyHotels} alt="" />
      </div>
      <div className="description">
        <img src={moxyLogo} alt="" />
        <h1>
          Miami South Beach Coolest Hotel
          <br /> FREE Day Pass Coupon - {content.content}
        </h1>
        <p>
          For reservation, email <a href={"mailto:pool@moxysouthbeach.com"}>pool@moxysouthbeach.com</a> with the coupon
          code.
        </p>
        <StyledPurchaseButton whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} onClick={reveal}>
          CHECK MOXY
        </StyledPurchaseButton>
      </div>
    </StyledMoxyHotels>
  );
};

export default MoxyHotels;
