import React, { useState } from "react";
import "./LikeButton.css";
function LikeButton() {
  const [clickedLike, setClickedLike] = useState(false);

  let icon = clickedLike ? <i class="fas fa-heart"></i> : "Like";
  let backgroundColour = clickedLike ? "red" : "white";
  return (
    <button
      className="my-like-button"
      onClick={handleClick}
      style={{ backgroundColor: backgroundColour }}
    >
      {icon}
    </button>
  );

  function handleClick() {
    setClickedLike(!clickedLike);
  }
}

export default LikeButton;
