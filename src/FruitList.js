import React from "react";

const FoodList = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Food</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.fruitList.length > 0 ? (
          props.fruitList.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.fruitName}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => props.editFruit(item)}>Edit</button>
                <button onClick={() => props.deleteFruit(item.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No food for a lazy man</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default FoodList;
