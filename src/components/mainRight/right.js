import Tooltip from "@material-ui/core/Tooltip";
import Avatar from "@material-ui/core/Avatar";
import { Button, Link } from "@material-ui/core";
import { Context } from "contexts/context";
import React, { useContext } from "react";
import Paper from "./paper/Paper";
import { makeStyles } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";
import green from "@material-ui/core/colors/green";
import ClearIcon from "@material-ui/icons/Clear";
import "./rightStyle.css";
import { savePDF } from "@progress/kendo-react-pdf";
import PdfContainer from "contents/SavePDF/PdfContainer";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "translation/translationSlice";
import { red } from "@material-ui/core/colors/red";
import GTranslateIcon from '@material-ui/icons/GTranslate';
const useStyles = makeStyles((theme) => ({
 
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    margin: 10,

  },
  green: {
    color: "#fff",
    backgroundColor: green[500],
    margin: 10,
   
  },
  change:{
    margin:10,
    backgroundColor:red
  },
  bt:{
    display:'flex'
  }
}));
const createPdf = (html) => {
  savePDF(html, {
    paperSize: "A4",
    fileName: "cv.pdf",
    margin: 3,
  });
};

function Right() {
  const currentLanguage = useSelector(state=>state.Intl)
  console.log(currentLanguage);
  const dispatch=useDispatch()
  const { setContent } = useContext(Context);
  const classes = useStyles();
  const handleChangeClick = () =>{

    dispatch(changeLanguage(currentLanguage.locale==="en"?"vi":"en"))
  }
  const handleDeleteDate = (event) => {
    event.preventDefault();
    localStorage.clear();
    setContent({
      header: {},
      experience: { description: ["", "", ""], description2: ["", ""] },
      education: {},
      skill: [],
    });
  };
  
  return (
    <div className="right">

      <div className={classes.bt}>
        <Link href="/top-cv" onClick={handleDeleteDate}>
          <Tooltip title="Delete All Data" placement="right">
            <Avatar className={classes.pink}>
              <ClearIcon />
            </Avatar>
          </Tooltip>
        </Link>  
        <Link href="/top-cv">
          <Tooltip title="View" placement="right">
            <Avatar className={classes.green}></Avatar>
          </Tooltip>
        </Link>
        <Tooltip title="Change" placement="right">
            <Avatar onClick={()=>handleChangeClick()} className={classes.change}>
          <GTranslateIcon />
            </Avatar>
          </Tooltip>
        <PdfContainer className='pdf'  createPdf={createPdf}>
          <Paper className='pp'/>
        </PdfContainer> 
      </div>
        </div>
    
  );
}
export default Right;
