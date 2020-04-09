import React from "react";

const EditFruit = (props) => {
  return (
    <div className="container-outer">
      <form>
        <label>Name</label>
        <input
          type="text"
          name="tempName"
          value={props.tempName}
          onChange={props.handleInputChange}
        />
        <label>Price</label>
        <input
          type="text"
          name="tempPrice"
          value={props.tempPrice}
          onChange={props.handleInputChange}
        />
        <button onClick={props.updateFruit}> Update </button>
        <button onClick={() => props.setEditForm(false)}>Cancel</button>
      </form>
    </div>
  );
};

export default EditFruit;
