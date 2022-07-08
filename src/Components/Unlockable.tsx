import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { web3Modal } from "./provider";
import axios from "axios";
import "../scss/unblockable.scss";
import logo_black from "../assets/logo_black.jpg";

axios.defaults.baseURL = "http://localhost:4040";
// axios.defaults.withCredentials = true;
const Unlockable = () => {
  const [signer, setSigner] = useState<ethers.Signer | undefined>(undefined);
  const [connected, setConnected] = useState(false);
  const [content, setContent] = useState<string[]>([
    // "http://localhost:8080/mint",
    // "https://www.google.com",
    // "https://www.google.com",
    // "https://www.google.com",
  ]);
  const [error, setError] = useState<string | undefined>(undefined);
  const connect = async () => {
    try {
      const instance = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      const signer = provider.getSigner();
      //   const contract = new ethers.Contract(
      //     contractAddress,
      //     abi,
      //     signer
      //   ) as DAWHouse;
      await getContent(signer);
      setConnected(true);
    } catch (error) {
      console.error(error);
      setConnected(false);
    }
  };
  const getContent = async (signer?: ethers.Signer) => {
    try {
      setError(undefined);
      //   console.log("init", signer);
      if (signer) {
        // getNonce and return sessionId to cookie
        const {
          data: { nonce },
        } = await axios.get<{
          nonce: string;
        }>("/nonce");
        const signature = await signer.signMessage(nonce);
        const wallet = await signer.getAddress();
        // send to server signature, address
        //
        const {
          data: { content },
        } = await axios.post<{ content: string[] }>("/getcontent", {
          nonce,
          signature,
          wallet,
        });
        setContent(content);
      }
    } catch (error) {
      console.log(error);
      setError("Something went wrong");
    }
  };
  return (
    <>
      <div className="header">
        <div className="header__logoContainer">
          <img className="logo" src={logo_black} alt="" />
        </div>

        <div className="header__buttonContainer">
          <button onClick={connect} className="buttonPrimary">
            {connected ? "Change wallet" : "Connect wallet"}
          </button>
        </div>
      </div>

      {connected && (
        <>
          <div>connected</div>
          <div className="link-container">
            <div className="link-raw">
              {content.length ? (
                content.map((c, index) => {
                  return (
                    <div>
                      <button
                        onClick={() => (document.location = c)}
                        className="links"
                      >
                        {"Content " + (index + 1)}
                      </button>
                    </div>
                  );
                })
              ) : (
                <p style={{ color: "whitesmoke" }}>
                  You don't have unblockables
                </p>
              )}
            </div>
          </div>
        </>
      )}
      <div className="errorContainer"> {error && <p>{error}</p>}</div>
    </>
  );
};

export default Unlockable;
