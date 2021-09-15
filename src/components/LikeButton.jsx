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
  // if (clickedLike) {
  //   return (
  //     <button
  //       className="my-like-button"
  //       onClick={handleClick}
  //       style={{ backgroundColor: "green" }}
  //     >
  //       <i class="fas fa-heart"></i>
  //     </button>
  //   );
  // } else {
  //   return (
  //     <button
  //       className="my-like-button"
  //       onClick={handleClick}
  //       style={{ backgroundColour: "white" }}
  //     >
  //       Like
  //     </button>
  //   );
  // }

  function handleClick() {
    setClickedLike(!clickedLike);
    console.log(clickedLike);
  }
}

export default LikeButton;
