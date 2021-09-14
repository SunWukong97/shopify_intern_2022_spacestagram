import React from "react";

function Card(props) {
  const { title, imageUrl, date, description } = props;
  return (
    <div>
      <h2>{title}</h2>
      <p>{date}</p>
      <img
        src={imageUrl}
        alt="an picture taken by NASA of space"
        className="img-fluid"
      />
      <p>{description}</p>
    </div>
  );
}
export default Card;
