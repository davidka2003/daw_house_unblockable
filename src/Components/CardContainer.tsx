import React from "react";
import styled from "styled-components";
import Card, { ICardProps } from "./Card";
import Samsara from "./Samsara";
import SnapChat from "./Snapchat";
import bag_image from "../assets/bag.jpg";
import chains_image from "../assets/chain.jpg";
import beer_image from "../assets/beer.jpeg";
import wagmi_logo from "../assets/wagmi_logo.png";
import alchemy_logo from "../assets/alchemy_logo.jpg";
import rcd_logo from "../assets/rcd_logo.jpg";
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
          14K gold plated pendant and necklace <br />
          DAW NFT Hexagon <s>$120</s> $96.
          <br />
          DAW NFT Cutout <s>$160</s> $128.
          <br />
          Sent a DM to @alchemychains
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
          Crystal custom 6 pack 0.1 ETH
          <br />
          Limited Edition Crystal custom 3 beers with Diamond Hands can holder 0.2 ETH
        </p>
      </>
    ),
    logo: wagmi_logo,
    image: beer_image,
    buttonText: "Purchase",
    link: "https://wagmidelightlab.xyz/",
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
  /* flex-wrap: wrap; */
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 80%;
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
              {cards.map((card) => (
                <Card {...card} />
              ))}
            </AniversaryContent>
          )}
          {/*content.filter((c) => c.type == "DAW").length &&  <AniversaryContent>
            {cards.map((card) => (
              <Card {...card} />
            ))}
          </AniversaryContent> */}
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
