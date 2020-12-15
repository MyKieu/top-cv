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
        <h3>{title}</h3>
        <p>
          <strong>{contentUse.experience.company}</strong> {""}
          <p>{contentUse.experience.city}</p>
        </p>
        <p>
          {contentUse.experience.position} {contentUse.experience.start} {""}
          {contentUse.experience.end}
        </p>
        <ul>{Description1}</ul>

        <p>
          <strong>{contentUse.experience.company2}</strong> {""}
          <p>{contentUse.experience.city2}</p>
        </p>
        <p>
          {contentUse.experience.position2} {contentUse.experience.start2} {""}
          {contentUse.experience.end2}
        </p>
        <ul>{Description2}</ul>
      </div>
    </div>
  );
}

export default RightExperience;
