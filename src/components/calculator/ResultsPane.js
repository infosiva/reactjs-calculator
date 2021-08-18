import React from "react";

const ResultComponent = (props) => {
  let { result } = props;
  return (
    <div className="result">
      <p data-testid="results">{result}</p>
    </div>
  );
};
export default ResultComponent;
