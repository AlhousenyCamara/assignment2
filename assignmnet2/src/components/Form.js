import React, { useState } from "react";

export const Form = (props) => {
  /*
            TODO - set initial state for link name and URL 
        */
  const [nameAndUrl, setNameAndUrl] = useState({ name: "", url: "" });

  const handleChange = (e) => {
    /*
            TODO - Logic for changing state based on form changes
        */
    const value = e.target.value;
    setNameAndUrl({ ...nameAndUrl, [e.target.name]: value });
  };

  const onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault();

    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
    console.log(nameAndUrl.name);
    console.log(nameAndUrl.url);
    props.addLink(nameAndUrl);
    let entry = { ...nameAndUrl };
    console.log(props.addLink(entry));
  };
  return (
    <form>
      {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
      <div className="form-group">
        <label>Name</label>
        <input
          name="name"
          value={nameAndUrl.name}
          onChange={handleChange}
          type="text"
          className="form-control"
          placeholder="Enter a name"
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="url">URL</label>
        <input
          name="url"
          value={nameAndUrl.url}
          onChange={handleChange}
          type="text"
          className="form-control"
          placeholder="Enter a URL"
        ></input>
      </div>
      <button onClick={onFormSubmit} type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
