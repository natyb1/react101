import React from "react";

const SingleSkill = (props) => {
  console.log(props);
  return (
    <div>
      <p
        style={{ backgroundColor: "yelow" }}
        className="mx-2 rounded-lg p-2 mt-4 shadow-xl"
      >
        {props.skill}
      </p>
    </div>
  );
};

export default SingleSkill;
