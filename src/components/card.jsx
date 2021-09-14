import React from "react";
import LikeButton from "./LikeButton";
function Card(props) {
  const { title, mediaType, imageUrl, date, description } = props;
  let imageElement;
  if (mediaType === "image") {
    imageElement = (
      <img
        src={imageUrl}
        alt="an picture taken by NASA of space"
        className="card-img-top"
      />
    );
  } else {
    imageElement = (
      <iframe
        title={"youtube video of " + title}
        style={{ height: "20em", width: "auto" }}
        controls
        src={imageUrl}
        alt="an picture taken by NASA of space"
        className="card-img-top"
      />
    );
  }
  return (
    <div className="card pb-2 shadow-sm">
      {/* <img
        src={imageUrl}
        alt="an picture taken by NASA of space"
        className="card-img-top"
      /> */}
      {imageElement}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{date}</p>
        <p className="card-text">{description}</p>
        <LikeButton />
      </div>
    </div>
  );
}

export default Card;
