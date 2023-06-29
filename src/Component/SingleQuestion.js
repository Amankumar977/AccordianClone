import React, { useState } from "react";
import "./SingleQuestion.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [flexDirection, setFlexDirection] = useState("row");
  const clickHandler = () => {
    setShowInfo(!showInfo);
    setFlexDirection(flexDirection === "row" ? "column" : "row");
  };
  return (
    <div>
      <header>
        <article>
          <div className="questionBox">
            <div>
              <h3>{title}</h3>
            </div>
            <div>
              <button className="button" onClick={clickHandler}>
                {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </button>
              {showInfo && <p className="info">{info}</p>}
            </div>
          </div>
        </article>
      </header>
    </div>
  );
};
export default SingleQuestion;
