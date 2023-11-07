import React from "react";

const Body = (props) => {
  return (
    <div className="p-3">
      <h2 className="uppercase text-center p-2">{props.name}</h2>
      {props.description}
    </div>
  );
};

export default Body;
