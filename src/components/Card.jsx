import React from "react";
import LikeButton from "./LikeButton";
import ShareButton from "./ShareButton";
import "./Card.css";
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
        <div className="my-buttons">
          <LikeButton />
          <ShareButton
            urlLink={imageUrl}
            description={description}
            title={title}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
