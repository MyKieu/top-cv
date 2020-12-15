import { Button, StepContent, TextField } from "@material-ui/core";
import { Context } from "contexts/context";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./style.css";
const style = {
  marginTop: 12,
  marginLeft: 8,
  marginRight: 8,
};
function Education() {
  const { content, updateEducationData, removeData } = useContext(Context);
  const [Text, setText] = useState("add");
  const { register, handleSubmit } = useForm();
  const { setContent } = useContext(Context);

  const onSubmit = (data) => {
    console.log(data);
    updateEducationData(data);
    setText("update");
    removeData();
  };
  const handleDeleteEdu =(event)=>{
    event.preventDefault();
    setContent({
      ...content,
      education:{},
    })

window.location.reload();
  }
  return (
    <div className="education">
      <h2>Education</h2>
      <form
        className="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          id="outlined-basic"
          label="Institution"
          name="institition"
          variant="outlined"
          inputRef={register}
          style={style}
          defaultValue={content.education.institition}
        />
        <TextField
          id="outlined-basic"
          label="City/State/Country"
          name="city"
          variant="outlined"
          inputRef={register}
          style={style}
          defaultValue={content.education.city}
        />
        <TextField
          id="outlined-basic"
          label="Major"
          name="major"
          variant="outlined"
          inputRef={register}
          style={style}
          defaultValue={content.education.major}
        />
        <TextField
          id="outlined-basic"
          label="Gradution Year"
          name="gradution"
          variant="outlined"
          inputRef={register}
          style={style}
          defaultValue={content.education.gradution}
        />
        <TextField
          id="outlined-basic"
          label="Additional Info"
          name="add"
          variant="outlined"
          inputRef={register}
          style={style}
          defaultValue={content.education.add}
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          disableElevation
          style={style}
        >
          {Text}
        </Button>
        <Link to="/top-cv"></Link>
        <Button   style={style} component={Link} to="/top-cv/basic/Experience">
           Next
        </Button>
        <Link to ='/top-cv'></Link>
        <Button   style={style} component={Link} to='/top-cv/basic/Header'>Previous</Button>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          disableElevation
          style={style}
          onClick ={handleDeleteEdu}
        >
          Delete
        </Button>
      </form>
    </div>
  );
}

export default Education;
