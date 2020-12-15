import { Context } from "contexts/context";
import React, { useContext } from "react";
import "../rightStyle.css";

function RightHeader() {
  const { control, content, contentFake } = useContext(Context);

  let contentUse;
  if (control) {
    contentUse = contentFake;
  } else {
    contentUse = content;
  }

  return (
    <div>
      <div className="headerR">
        <div className="">
          <h1 className="h1Name">{contentUse.header.name}
          </h1>
           <img className='imgg1' src ={contentUse.header.img} alt=''></img>
          <p>
            {contentUse.header.gender} <br />
            {contentUse.header.email} <br />
            {contentUse.header.phone} <br />
            {contentUse.header.address} <br />
            {contentUse.header.city} <br />
          </p>
          <hr className="hrrr"></hr>
        </div>
      </div>
    </div>
  );
}

export default RightHeader;
