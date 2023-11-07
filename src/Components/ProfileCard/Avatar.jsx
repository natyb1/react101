import React from "react";

const Avatar = (props) => {
  return (
    <div>
      <img
        className="w-20 block mx-auto h-24 pt-3 sm:mx-0 sm:shrink-0"
        src={props.img}
        alt="man profile"
      />
    </div>
  );
};

export default Avatar;
