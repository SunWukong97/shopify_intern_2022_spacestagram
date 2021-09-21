import React, { useState, useEffect, useRef } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import MyToast from "./MyToast";
import "./ShareButton.css";

function ShareButton(props) {
  const { urlLink, description, title } = props;
  const [showShareOptions, setShowShareOptionsDisplay] = useState(false);
  const [copyLinkClicked, setCopyLinkClicked] = useState(false);
  const ref = useRef(null);

  let shareOptions;
  function share() {
    setShowShareOptionsDisplay(true);
  }
  function copyLink() {
    navigator.clipboard.writeText(urlLink);
    setCopyLinkClicked(true);
    setTimeout(() => {
      setCopyLinkClicked(false);
    }, 2000);
  }

  //used to check if the component has mounted onto the DOM
  //in order to execute the function
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        showShareOptions &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setShowShareOptionsDisplay(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      //cleans up the event listener when component unmounts from the dom
      document.removeEventListener("click", handleClickOutside);
    };
  });

  if (showShareOptions) {
    shareOptions = (
      <div ref={ref} className="share-options">
        <FacebookShareButton url={urlLink} quote={description}>
          <FacebookIcon size={50} />
        </FacebookShareButton>
        <TwitterShareButton url={urlLink} title={title}>
          <TwitterIcon size={50} />
        </TwitterShareButton>
        <i className="fas fa-link" onClick={copyLink}></i>
      </div>
    );
  }
  return (
    <div>
      <div className="share-button-container">
        <button className="my-share-button" onClick={share}>
          Share
        </button>
        {shareOptions}
      </div>
      {copyLinkClicked ? <MyToast /> : ""}
    </div>
  );
}

export default ShareButton;
