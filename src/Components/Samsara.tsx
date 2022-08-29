import React from "react";
import samsara from "../assets/samsara.png";
import "../scss/unblockable.scss";

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
    <div className="card_samsara">
      <div className="card_samsara__row">
        <div className="card_samsara__row--samsara">
          <img src={samsara} alt="" />
        </div>
      </div>
      <h1>Use discount code: {content.content}</h1>
      <p>The code is applicable through the Samara Luggage store.</p>
      <button onClick={reveal}>VISIT SAMSARA LUGGAGE</button>
    </div>
  );
};

export default Samsara;
