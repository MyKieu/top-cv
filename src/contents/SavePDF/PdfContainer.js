import React from 'react';
import Tooltip from "@material-ui/core/Tooltip";
import Avatar from "@material-ui/core/Avatar";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
export default (props) => {
  console.log(props);
 const style={
   background:'blue',
   marginTop:'10px',
   marginLeft:'10px'
 } 
 
  const bodyRef = React.createRef();
  console.log(bodyRef);
  const createPdf = () => props.createPdf(bodyRef.current);
  return (
    <section className="pdf-container">
      <section className="pdf-toolbar">
       {/* <button onClick={createPdf}>Create PDF</button> */}
          <Tooltip title="Save to PDF" placement="right">
            <Avatar   style={style}>
              <PictureAsPdfIcon onClick={createPdf} />
            </Avatar>
          </Tooltip>
      </section>
      <section className="pdf-body" ref={bodyRef}>
        {props.children}
      </section>
    </section>
  )
}
