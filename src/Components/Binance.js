import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import binanceLogo from "../binance.png";
import TrustImage from "../qr.png";
import BASE_URL from "./Api";

const Binance = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [transactionHash, setTransactionHash] = useState("");
  const [hashError, sethashError] = useState(false);
  const [Failedmessage, setFailedmessage] = useState(false);
  const [trxIdexistmessage, SettrxIdexistmessage] = useState(false);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [paymentstatus, setPaymentstatus] = useState("Payment Completed");
  const walletAdd = "0x05EB007739071440158fc9e1CDb43e2626701cdD";
  const [isCopied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(walletAdd)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
  };
  const clientId = localStorage.getItem('clientId');
  console.log(clientId, '======================')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://sspmitra.in/base/encrypt-decrypt/?clientId=${clientId}`
        );
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const payAmount = () => {
    try {
      if (transactionHash.trim() === "") {
        sethashError(true);
        return;
      }
      sethashError(false);
      setLoading(true);
      setShowProgressBar(true);
      setTimeout(() => {
        document
          .getElementById("progressbar")
          .children[1].classList.add("active");
      }, 2000);
      setTimeout(async () => {
        try {
          const response = await axios.get(
            `https://sspmitra.in/base/api/paymentbinance/?userId=${userData["userId"]}&transactionID=${transactionHash}&original_amount=${userData["Amount"]}&success_url=https%3A%2F%2Fwww.google.com%2F&failure_url=https%3A%2F%2Fwww.facebook.com%2F&fundpip_wallet_address=0x05EB007739071440158fc9e1CDb43e2626701cdD`
          );
          const data = response.data;
          document
            .getElementById("progressbar")
            .children[2].classList.add("active");
          document.getElementById('js-spinner').classList.add('--spinner-complete');
          document.getElementById('js-success-tick').classList.add('--tick-complete');
          document.getElementById('js-success-ring').classList.add('--ring-complete');
          setTimeout(()=>{
            window.location.href = userData['redirect_url'] + '?clientId=' + data["clientId"];


          }, 1500);
        } catch (error) {
          setLoading(false);
          if (error?.response?.status === 500) {
            payAmount();
          }
          if (error?.response?.status === 400) {
            setPaymentstatus("Payment Failed");
            setFailedmessage(true);
          }
          if (error?.response?.status === 406) {
            setPaymentstatus("Payment Failed");
            SettrxIdexistmessage(true);
          }
          setTimeout(()=>{
            window.location.href = userData['redirect_url'] + '?clientId=' + data["clientId"];
          }, 1500);
        }
      }, 2000);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="main-wrap">
          <div className="copy">
            <div className="payment">
              <div className="datta" contentEditable="false">
                {walletAdd.slice(0, 7)}...
                {walletAdd.slice(walletAdd.length - 7, walletAdd.length)}
              </div>
              <FontAwesomeIcon
                icon={faCopy}
                onClick={handleCopy}
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  top: 0,
                  right: "-14px",
                }}
              />
              {isCopied && <span id="copied">Copied</span>}
            </div>
          </div>
          <div className="pt-4">
            <img
              src={isFlipped ? TrustImage : binanceLogo}
              className="logo-biance app-logo"
              alt="logo"
              onClick={() => setIsFlipped(!isFlipped)}
              style={{
                cursor: "pointer",
                transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                transition: "transform 0.5s",
              }}
            />
          </div>
          <div className="payment">
            <div className="datta" contentEditable="false">
              Pay:${userData ? userData["Amount"] : 0}
            </div>
          </div>
          <br />
          <div className="payment">
            <input
              id="transactionHash"
              type="text"
              placeholder="Enter Transaction Hash"
              value={transactionHash}
              onChange={(e) => setTransactionHash(e.target.value)}
            />
          </div>
          {hashError && (
            <div
              className="error-message"
              style={{ color: "red", fontSize: "15px" }}
            >
              Transaction Hash is required.
            </div>
          )}
          <div>
            <button
              className="App-link"
              onClick={loading ? null : payAmount}
              disabled={loading ? true : false}
              style={{ pointerEvents: loading ? "none" : "auto" }}
            >
              {loading ? (
                <div className="spinner-animate-to-result">
                  <svg viewBox="0, 0, 100, 100">
                    <g transform="">
                      <circle
                        className="spinner"
                        id="js-spinner"
                        stroke-miterlimit="10"
                        cx="50"
                        cy="50"
                        r="44"
                      />
                      <polyline
                        className="tick"
                        id="js-success-tick"
                        stroke-miterlimit="10"
                        points="93,15 49,65 28,42"
                      />
                      <svg viewBox="0 0 50 50">
                        <path
                          className="success-ring"
                          id="js-success-ring"
                          d="M37.06,4.74A23.6,23.6,0,0,0,6.63,8.93a23.32,23.32,0,0,0-.91,29.25,23.34,23.34,0,0,0,29.86,6.06A23.46,23.46,0,0,0,46.1,16.36"
                        />
                      </svg>
                    </g>
                  </svg>
                </div>
              ) : (
                "Submit Payment"
              )}
            </button>
          </div>
          {showProgressBar && (
            <form id="multistepsform">
              <ul id="progressbar">
                <li className="active">Payment Initiated</li>
                <li>In Progress</li>
                <li>{paymentstatus}</li>
              </ul>
            </form>
          )}
          {Failedmessage && (
            <div
              className="error-message"
              style={{ color: "red", fontSize: "15px" }}
            >
              We are not able to verify your Payment. Please check your
              transction hash and try again
            </div>
          )}
          {trxIdexistmessage && (
            <div
              className="error-message"
              style={{ color: "red", fontSize: "15px" }}
            >
              The Transction Id you are useing is already used. Please enter a new Trasction id.
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Binance;
