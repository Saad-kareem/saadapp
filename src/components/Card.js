import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img alt="myPic" src={props.imgsrc} className="card_img" />
          <div className="card_Info">
            <span className="card_category">{props.title}</span>
            <h3 className="card_title">{props.sname}</h3>
            <a href={props.link} target="blank">
              <button> Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
