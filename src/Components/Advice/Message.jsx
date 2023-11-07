import React from "react";

const Message = (props) => {
  return (
    <>
      <div className="card">
        <div className="card-header">Quote</div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>{props.advice}</p>
            <footer className="blockquote-footer">
              {props.count + " "}
              <cite title="Source Title">
                {props.count > 1 ? "Advices" : "Advice"} Given
              </cite>
            </footer>
          </blockquote>
        </div>
      </div>
      <button onClick={props.getadvice} className="btn btn-secondary mt-3">
        Get Advice
      </button>
    </>
  );
};

export default Message;
