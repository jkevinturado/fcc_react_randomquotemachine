import React from "react";

const QuotesDisplay = (props) => {
  const { author, quote } = props.data;
  return (
    <div className="quote-content">
      <p id="text">{quote}</p>
      <div id="author">{author}</div>
    </div>
  );
};

export default QuotesDisplay;
