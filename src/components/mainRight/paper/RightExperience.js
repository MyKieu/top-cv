import { Context } from "contexts/context";
import React, { useContext } from "react";
import "../rightStyle.css";

function RightExperience() {
  const { control, content, contentFake } = useContext(Context);
  console.log(contentFake,control,content);
  let contentUse;
  if (control) {
    contentUse = contentFake;
  } else {
    contentUse = content;
  }
  let title;
  console.log(contentUse.experience);
  if (Object.keys(contentUse.experience).length < 3) {
    title = "";
  } else {
    title = <h3>Professional Experience</h3>;
  }
  let Description1 = contentUse.experience.description.map((item, index) => {
    if (item === "") {
      return "";
    } else {
      return <li key={index}>{item}</li>;
    }
  });
  console.log(Description1);
  let Description2 = contentUse.experience.description2.map((item, index) => {
    if (item === "") {
      return "";
    } else {
      return <li key={index}>{item}</li>;
    }
  });
  console.log(Description2);
  return (
    <div className="rightExperence">
      <div className="">
        <h3 >{title}</h3>
        <ul>
        <p>
          <strong>{contentUse.experience.company}</strong> {""}
          <p>{contentUse.experience.city}</p>
        </p>
       
        <p>
          {contentUse.experience.position}
        <p>   {contentUse.experience.start} </p>
           {""}
        <p> {contentUse.experience.end}</p> 
        </p>
        </ul>
        <ul>{Description1}</ul>
<ul>
        <p>
          <strong>{contentUse.experience.company2}</strong> {""}
          <p>{contentUse.experience.city2}</p>
        </p>
        <p>
         <p> {contentUse.experience.position2}</p> 
         <p>{contentUse.experience.start2}</p> {""}
          {contentUse.experience.end2}
        </p></ul>
        <ul>{Description2}</ul>
      </div>
    </div>
  );
}

export default RightExperience;
