import React from "react";

const AddFruit = (props) => {
  return (
    <div className="container-outer">
      <form onSubmit={props.addFruit}>
        <label>Name</label>
        <input
          type="text"
          name="tempName"
          value={props.tempName}
          onChange={props.handleInputChange}
        />
        <br />
        <label>Price</label>
        <input
          type="number"
          name="tempPrice"
          value={props.tempPrice}
          onChange={props.handleInputChange}
        />
        <br />

        <button> Add Fruit </button>
      </form>
    </div>
  );
};

export default AddFruit;
