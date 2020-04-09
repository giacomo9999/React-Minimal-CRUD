import React, { Component } from "react";
import "./App.css";

import FruitList from "./FruitList";
import AddFruit from "./AddFruit";
import EditFruit from "./EditFruit";

class App extends Component {
  state = {
    id: null,
    tempName: "",
    tempPrice: "",
    tempFruit: {},
    fruitList: [
      { id: 1, fruitName: "Apple", price: 1.99 },
      { id: 2, fruitName: "Orange", price: 2.99 },
      { id: 3, fruitName: "Banana", price: 0.79 },
    ],
    editFormOpen: false,
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addFruit = (e) => {
    e.preventDefault();

    const newFruit = {
      id: this.state.fruitList.length + 1,
      fruitName: this.state.tempName,
      price: this.state.tempPrice,
    };

    this.setState({
      tempName: "",
      tempPrice: "",
      tempFruit: {},
      fruitList: [...this.state.fruitList, newFruit],
    });
  };

  deleteFruit = (id) => {
    const fruitList = this.state.fruitList.filter((item) => item.id !== id);
    this.setState({ fruitList: fruitList });
  };

  // invoked from Edit button in Fruit List
  editFruit = (fruit) => {
    // console.log(`editFruit: ${fruit.id},${fruit.fruitName},${fruit.price}`);
    this.setEditForm(true);
    this.setState({
      id: fruit.id,
      tempName: fruit.fruitName,
      tempPrice: fruit.price,
      tempFruit: fruit,
    });
  };

  setEditForm = (value) => {
    this.setState({
      editFormOpen: value,
    });
  };

  updateFruit = (e) => {
    e.preventDefault();
    // console.log("updateFruit here...");
    const updatedName = this.state.tempName;
    const updatedPrice = this.state.tempPrice;
    const updatedFruit = Object.assign({}, this.state.tempFruit, {
      fruitName: updatedName,
      price: updatedPrice,
    });
    const newFruitList = this.state.fruitList.map((fruit) =>
      fruit.id === this.state.id ? updatedFruit : fruit
    );
    this.setState({
      id: null,
      tempName: "",
      tempPrice: "",
      fruitList: newFruitList,
      editFormOpen: false,
    });
  };

  render() {
    const { fruitList, editFormOpen } = this.state;
    return (
      <div>
        <div className="container-outer">
          <FruitList
            fruitList={fruitList}
            deleteFruit={this.deleteFruit}
            editFruit={this.editFruit}
          />
        </div>
        <div>
          {editFormOpen ? (
            <EditFruit
              tempName={this.state.tempName}
              tempPrice={this.state.tempPrice}
              handleInputChange={this.handleInputChange}
              setEditForm={this.setEditForm}
              updateFruit={this.updateFruit}
            />
          ) : (
            <AddFruit
              tempName={this.state.tempName}
              tempPrice={this.state.tempPrice}
              handleInputChange={this.handleInputChange}
              addFruit={this.addFruit}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
