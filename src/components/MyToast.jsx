import React, { useState } from "react";

import "./MyToast.css";

function MyToast(props) {
  const { linkButtonClicked } = props;
  let bool = linkButtonClicked;

  const mountedStyle = { display: "block" };
  const unmountedStyle = {
    display: "none",
  };
  let styling = "my-toast";

  return (
    <div className={styling} style={bool ? mountedStyle : unmountedStyle}>
      <p>Link Copied</p>
    </div>
  );
}
export default MyToast;
