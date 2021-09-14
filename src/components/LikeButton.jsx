import React, { useState } from "react";
import "./LikeButton.css";
function LikeButton() {
  const [clickedLike, setClickedLike] = useState(false);

  if (clickedLike) {
    return (
      <button
        className="my-like-button"
        onClick={handleClick}
        style={{ backgroundColor: "green" }}
      >
        Like
      </button>
    );
  } else {
    return (
      <button
        className="my-like-button"
        onClick={handleClick}
        style={{ backgroundColour: "white" }}
      >
        Like
      </button>
    );
  }

  function handleClick() {
    setClickedLike(!clickedLike);
    console.log(clickedLike);
  }
}

export default LikeButton;
