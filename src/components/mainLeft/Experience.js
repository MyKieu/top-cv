import { Button, TextField } from "@material-ui/core";
import { Context } from "contexts/context";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslate } from "react-redux-multilingual/lib/context";
import { Link } from "react-router-dom";
import "./style.css";
const style = {
  marginTop: 12,
  marginLeft: 8,
  marginRight: 8,
};

function Experience() {
  const t=useTranslate()
  const { content, updateExperienceData, removeData ,setContent} = useContext(Context);
  const [Text, setText] = useState("Add");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    updateExperienceData(data);
    removeData();
    setText("Update");
  };
  const handleDeleteExp=(e)=>{
 e.preventDefault();
 setContent({
   ...content,
   experience:{ description: ["", "", ""], description2: ["", ""] },
 })
 window.location.reload();
  }
  return (
    <div className="experience">
      <h2>{t('experience')}</h2>
      <form
        className="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h4>Company 1</h4>
        <TextField
          id="outlined-basic"
          label={t('Company')}
          name="company"
          variant="outlined"
          style={style}
          inputRef={register}
          defaultValue={content.experience.company}
        />
        <TextField
          id="outlined-basic"
          label={t('State')}
          name="city"
          variant="outlined"
          style={style}
          inputRef={register}
          defaultValue={content.experience.city}
        />
        <TextField
          id="outlined-basic"
          label={t('Position')}
          name="position"
          variant="outlined"
          style={style}
          inputRef={register}
          defaultValue={content.experience.position}
        />
        <TextField
          id="outlined-basic"
          label={t('start')}
          name="start"
          variant="outlined"
          style={style}
          inputRef={register}
          defaultValue={content.experience.start}
        />
        <TextField
          id="outlined-basic"
          label={t('end')}
          name="end"
          variant="outlined"
          style={style}
          inputRef={register}
          defaultValue={content.experience.end}
        />
        <TextField
          id="outlined-basic"
          label={t('Descrition')}
          name="description[0]"
          variant="outlined"
          style={style}
          inputRef={register}
          defaultValue={content.experience.description[0]}
        />
        <TextField
          id="outlined-basic"
          label={t('Descrition')}
          name="description[1]"
          variant="outlined"
          style={style}
          inputRef={register}
          defaultValue={content.experience.description[1]}
        />
        <hr />

        <h4>Company 2</h4>

        <TextField
          id="outlined-basic"
          label={t('Company')}
          name="company2"
          variant="outlined"
          style={style}
          inputRef={register}
          defaultValue={content.experience.company2}
        />
        <TextField
          id="outlined-basic"
          label={t('State')}
          name="city2"
          variant="outlined"
          style={style}
          inputRef={register}
          defaultValue={content.experience.city2}
        />
        <TextField
          id="outlined-basic"
          label={t('Position')}
          name="position2"
          variant="outlined"
          style={style}
          inputRef={register}
          defaultValue={content.experience.position2}
        />
        <TextField
          id="outlined-basic"
          label={t('start')}
          name="start2"
          variant="outlined"
          style={style}
          inputRef={register}
          defaultValue={content.experience.start2}
        />
        <TextField
          id="outlined-basic"
          label={t('end')}
          name="end2"
          variant="outlined"
          style={style}
          inputRef={register}
          defaultValue={content.experience.end2}
        />
        <TextField
          id="outlined-basic"
          label={t('Descrition')}
          name="description2[0]"
          variant="outlined"
          style={style}
          inputRef={register}
          defaultValue={content.experience.description2[0]}
        />
        <TextField
          id="outlined-basic"
          label={t('Descrition')}
          name="description2[1]"
          variant="outlined"
          style={style}
          inputRef={register}
          defaultValue={content.experience.description2[1]}
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          disableElevation
          style={style}
         
        >
          {t('Text')}
        </Button>
        <Link to="/top-cv"></Link>
        <Button style={style} component={Link} to="/top-cv/basic/addittional">
        {t('Next')} 
        </Button>
        <Link to='/top-cv'/>
        <Button style={style} component={Link} to='/top-cv/basic/Education'>{t('Previous')}</Button>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          disableElevation
          style={style}
          onClick={handleDeleteExp}
        >
          {t('Delete')}
        </Button>
      </form>
    </div>
  );
}

export default Experience;
