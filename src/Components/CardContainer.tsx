import React from "react";
import styled from "styled-components";
import Card, { ICardProps } from "./Card";
import Samsara from "./Samsara";
import SnapChat from "./Snapchat";
import bag_image from "../assets/bag.jpeg";
import chains_image from "../assets/chain.jpg";
import beer_image from "../assets/beer.jpeg";
import wagmi_product from "../assets/wagmi_product.png";
import wagmi_logo from "../assets/wagmi_logo.png";
import alchemy_logo from "../assets/alchemy_logo.jpg";
import rcd_logo from "../assets/rcd_logo.jpg";
import sunday_logo from "../assets/sunday_logo.png";
import showfields_logo from "../assets/showfields_logo.png";
import batch_logo from "../assets/batch_logo.png";
import sunday_product from "../assets/sunday_product.png";
import showfields_product from "../assets/showfields_product.png";
import batch_product from "../assets/batch_product.png";

const cards: ICardProps[] = [
  {
    // title: "Rich Class Decor",
    text: (
      <>
        <p>
          Daw Logo Purse - <s>$150</s> $100 including shipping
        </p>
      </>
    ),
    logo: rcd_logo,
    image: bag_image,
    buttonText: "Purchase",
    link: "https://www.richclassdecor.com/products/official-daw-purse",
  },
  {
    // title: "Alchemy Chains",
    text: (
      <>
        <p>
          14K Gold Plated Pendant and Necklace <br />
          DAW NFT Hexagon <s>$120</s> $96.
          <br />
          DAW NFT Cutout <s>$160</s> $128.
          <br />
          Send a DM to @alchemychains
        </p>
      </>
    ),
    logo: alchemy_logo,
    image: chains_image,
    buttonText: "@alchemychains",
    link: "https://twitter.com/alchemychains",
  },
  {
    // title: "WAGMI Beer",
    text: (
      <>
        <p>
          Crystal Custom 6 Pack 0.1 ETH
          <br />
          Crystal custom 6 beers with Limited Edition Diamond Hands Holder 0.2 ETH
        </p>
      </>
    ),
    logo: wagmi_logo,
    image: wagmi_product,
    buttonText: "Purchase",
    link: "https://wagmidelightlab.xyz/daw",
  },
  {
    // title: "Rich Class Decor",
    text: (
      <>
        <p>
          The Most Interesting Store In The World
          <br />
          $25 Coupon Code - <b>DOW25</b>
        </p>
      </>
    ),
    logo: sunday_logo,
    image: sunday_product,
    buttonText: "Purchase",
    link: "https://sundaycitizen.co",
  },
  {
    // title: "Alchemy Chains",
    text: (
      <>
        <p>
          A Boutique CBD Manufacturer and Brand
          <br />
          $25 Coupon Code - <b>save25date</b>
        </p>
      </>
    ),
    logo: showfields_logo,
    image: showfields_product,
    buttonText: "Purchase",
    link: "http://showfields.com/",
  },
  {
    // title: "WAGMI Beer",
    text: (
      <>
        <p>
          Radical Softness For Home, Body & Soul
          <br />
          20% Coupon Code - <b>COMING SOON</b>
        </p>
      </>
    ),
    logo: batch_logo,
    image: batch_product,
    buttonText: "Purchase",
    link: "http://hellobatch.com/",
  },
];
const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
const AniversaryContent = styled.div`
  display: flex;
  width: 92.5%;
  gap: 15px;
  flex-basis: 0;
  flex-grow: 1;
  /* height: 210px; */
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    /* width: 80%; */
    width: 90%;
    gap: 30px;
    align-items: stretch;
    justify-content: stretch;
  }
`;
const RegularContent = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
interface ICardContainerProps {
  content: { type: "DAW" | "HOUSE"; content_type: "link" | "code"; content: string }[];
  connected: boolean;
}
const CardContainer = ({ content, connected }: ICardContainerProps) => {
  return (
    <StyledCardContainer>
      {connected && (
        <>
          {content.filter((c) => c.type == "DAW").length > 0 && (
            <AniversaryContent>
              {cards.slice(0, 3).map((card) => (
                <Card {...card} />
              ))}
            </AniversaryContent>
          )}
          {content.filter((c) => c.type == "DAW").length && (
            <AniversaryContent>
              {cards.slice(3, 7).map((card) => (
                <Card {...card} revertLogo />
              ))}
            </AniversaryContent>
          )}
          <RegularContent>
            {/* {content.filter((c) => c.type == "DAW").length && <ShopifyComponent />} */}
            {content.length ? (
              content.map((content) =>
                content.type === "DAW" ? <Samsara content={content} /> : <SnapChat content={content} />
              )
            ) : (
              <p style={{ color: "whitesmoke" }}>You don't have unblockables</p>
            )}
          </RegularContent>
        </>
      )}
    </StyledCardContainer>
  );
};

export default CardContainer;
