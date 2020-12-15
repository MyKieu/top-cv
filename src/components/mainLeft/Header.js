import { Button, TextField } from "@material-ui/core";
import { Context } from "../../contexts/context";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import "./style.css";
import { Link } from "react-router-dom";
const style = {
  marginTop: 12,
  marginLeft: 8,
  marginRight: 8,
};

function Header() {
  const { content, updateHeaderData, removeData } = useContext(Context);
  const { register, handleSubmit, errors } = useForm();
  const { setContent } = useContext(Context);
  const onSubmit = (data) => {
    console.log(data);
    removeData();
    updateHeaderData(data);
  };
  const handleDelete= (event) => {
    event.preventDefault();
    setContent({
      ...content,
     header:{},
    });
    window.location.reload();
  };
  return (
    <div className="">
      <h2>Header</h2>
      <form className="form" noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Full Name"
          name="name"
          variant="outlined"
          defaultValue={content.header.name}
          inputRef={register({ required: true})}
          style={style}
          onChange={handleSubmit(onSubmit)}
        />
        {errors.name && errors.name.type === "required" && (
          <p>Please not empty</p>
        )}
      
        {/* <TextField
          id="outlined-basic"
          label="Gender"
          variant="outlined"
          name="gender"
          type='radio'
          defaultValue={content.header.gender}
          inputRef={register}
          style={style}
          onChange={handleSubmit(onSubmit)}
        /> */}
          <TextField
          id="outlined-basic"
          label="Image"
          variant="outlined"
          name="img"
       
          defaultValue={content.header.img}
          inputRef={register}
          style={style}
          onChange={handleSubmit(onSubmit)}
        />
        <select 
          className='gender'
          style={style}
          name="gender"
          ref={register}
          onChange={handleSubmit(onSubmit)}
        >
          <option value='' disabled selected>Choose your gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          
        </select>
      
        <TextField
          id="outlined-basic"
          label="Email"
          name="email"
          variant="outlined"
          defaultValue={content.header.email}
          inputRef={register({
            required: true,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          })}
          style={style}
          onChange={handleSubmit(onSubmit)}
        />
        {errors.email && errors.email.type === "required" && (
          <p>Please not email</p>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <p>This is field required email</p>
        )}
        <TextField
          id="outlined-basic"
          label="Phone"
          name="phone"
          variant="outlined"
          defaultValue={content.header.phone}
          inputRef={register}
          style={style}
          onChange={handleSubmit(onSubmit)}
        />

        <TextField
          id="outlined-basic"
          label="Address"
          name="address"
          variant="outlined"
          defaultValue={content.header.address}
          inputRef={register}
          style={style}
          onChange={handleSubmit(onSubmit)}
        />

        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          name="city"
          defaultValue={content.header.city}
          inputRef={register}
          style={style}
          onChange={handleSubmit(onSubmit)}
        />
        <Link to="/top-cv"></Link>
        <Button   style={style} component={Link} to="/top-cv/basic/Education">
          Next
        </Button>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            disableElevation
            style={style}
            onClick={handleDelete}
          >
            Delete
          </Button>
      </form>
    </div>
  );
}

export default Header;
