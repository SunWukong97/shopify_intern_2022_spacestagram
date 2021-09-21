import React from "react";

import "./MyToast.css";

function MyToast(props) {
  let styling = "my-toast my-toast-animation";

  return (
    <div className={styling}>
      <p>Link Copied</p>
    </div>
  );
}
export default MyToast;
