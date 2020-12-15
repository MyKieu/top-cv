import React from "react";
import RightEducation from "./RightEducation";
import RightExperience from "./RightExperience";
import RightHeader from "./RightHeader";
import RightSkill from "./RightSkill";
import "../rightStyle.css";
;
function Paper() {
  // const createPdf = (html) => {
  //   savePDF(html, {
  //     paperSize: "A4",
  //     fileName: "cv.pdf",
  //     margin: 3,
  //   });
  // };

  return (
    <div className="paper">
      <div style={{ size: "A4" }}>
        {/* <PdfContainer createPdf={createPdf}> */}
          <RightHeader />
          <RightEducation />
          <RightExperience />
          <RightSkill />
        {/* </PdfContainer> */}
      
      </div>
    </div>
  );
}
export default Paper;
