import React from "react";
import SingleSkill from "./SingleSkill";
const Skills = () => {
  return (
    <div className="flex flex-wrap">
      <SingleSkill skill="Html" color="red" />
      <SingleSkill skill="css" color="green" />
      <SingleSkill skill="React" color="white" />
      <SingleSkill skill="Tailwind" color="purple" />
      <SingleSkill skill="Bootstrap" color="yellow" />
    </div>
  );
};

export default Skills;
