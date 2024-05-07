import React from "react";
import java from "../assist/java.svg";
import spring from "../assist/springboot.svg";
import html from "../assist/html.svg";
import css from "../assist/css.svg";
import javascript from "../assist/javascript.svg";
import sql from "../assist/mysql.svg";
import git from "../assist/github.svg";
import node from "../assist/nodejs.svg";

function Skills() {
  return (
    <>
      <div
        className="text-4xl justify-center flex underline font-bold mt-10 font-roboto "
        id="skills"
      >
        Skills
      </div>
      <div className="bg-gray-500 mt-6 w-full h-full px-4 rounded-xl">
        <div className="flex space-x-48 px-60 mt-5">
          <img className="h-36 w-36 m-" src={java} />
          <img className="h-36 w-36" src={spring} />
          <img className="h-36 w-36 " src={html} />
          
        </div>
        <br />
        <div className="flex space-x-48 px-64 mt-2">
          <img className="h-36 w-36" src={css} />
          <img className="h-36 w-36" src={javascript} />
          <img className="h-36 w-36 m-" src={sql} />
         
        </div>
        <div className="flex space-x-48 px-64  ">
          <img className="h-36 w-36" src={node} />
          <img className="h-36 w-36 mt-4" src={git} />
          
        </div>
        <br />
      </div>
    </>
  );
}

export default Skills;
