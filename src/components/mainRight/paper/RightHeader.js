import { Context } from "contexts/context";
import React, { useContext } from "react";
import '../rightStyle.css'
function RightHeader() {
  const { control, content, contentFake } = useContext(Context);

  let contentUse;
  if (control) {
    contentUse = contentFake;
  } else {
    contentUse = content;
  }

  return (
    <div className='row'>
      <div className="col-xs-6">
      
        <img className='imgg1' src ={contentUse.header.img} alt=''></img>
        </div>
          <div className="col-xs-6" className="headerR">
          <h1 className="h1Name">{contentUse.header.name} </h1>
            {contentUse.header.gender} <br />
            {contentUse.header.email} <br />
            {contentUse.header.phone} <br />
            {contentUse.header.address} <br />
            {contentUse.header.city} <br />
          </div>
          <hr className="hrrr"></hr>
      </div>
    
  );
}

export default RightHeader;
