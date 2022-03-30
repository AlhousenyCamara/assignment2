import React, { useState } from "react";
import Form from "./Form";
import Table from "./Table";

export const LinkContainer = (props) => {
  /* TODO - Create state object for storing favLinks */
  const [favLink, setFavLink] = useState([]);
  // const [url, setUrl] = useState([]);
  const handleRemove = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */

    if (index > -1) favLink.splice(index, 1);
    setFavLink([...favLink]);
  };

  const handleSubmit = (favLinks) => {
    /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
    setFavLink([...favLink, favLinks]);
  };

  return (
    <div className="container">
      <h2>My Favorite Links</h2>
      <p>Add a new url with a name and link to the table.</p>
      {/*TODO - Add Table Component */}
      <Table linkData={favLink} removeLink={handleRemove} />
      <br />

      <h3>Add New</h3>
      {/*TODO - Add Form Component */}
      <Form addLink={handleSubmit} />
    </div>
  );
};
