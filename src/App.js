import { hasUnreliableEmptyValue } from "@testing-library/user-event/dist/utils";
import { useEffect, useReducer, useState } from "react";
import { act } from "react-dom/test-utils";
import "./App.css";
import Box from "./Box";
import "./Box.css";
import "./Box.js";
const url = "https://eucs23v2.ksearchnet.com/cs/v2/search";
var data = {
  context: { apiKeys: ["klevu-160320037354512854"] },
  recordQueries: [
    {
      id: "configLayoutProducts564",
      typeOfRequest: "SEARCH",
      settings: {
        query: { term: "bags" },
        typeOfRecords: ["KLEVU_PRODUCT"],
        limit: 12,
        typeOfSearch: "WILDCARD_AND",
      },
    },
  ],
};

fetch(url, {
  method: "post",
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((j) => {
    var dataFetched = j.queryResults[0].records;
    return dataFetched;
  })
  .then((bData) => {
    window.bagsData = bData;
  });
var bags_data = window.bagsData;
console.log(bags_data);
const initialCall = () => {
  console.log(bags_data);
};

var initialState = [];
const reducer = (state, action) => {
  state = [];
  bags_data = window.bagsData;
  for (let i = 0; i < bags_data.length; i++) {
    state.push(
      <Box
        src={bags_data[i].imageUrl}
        alt={bags_data[i].name}
        name={bags_data[i].name}
        sku={bags_data[i].sku}
        salePrice={bags_data[i].salePrice}
        shortDesc={bags_data[i].shortDesc}
        color={bags_data[i].color}
        type={bags_data[i].type}
        inStock={bags_data[i].inStock}
        brand={bags_data[i].brand}
        size={bags_data[i].size}
      />
    );
  }
  if (action.type === "Low_High") {
    bags_data = window.bagsData;
    var newArr = bags_data.sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
    state = [];
    for (let i = 0; i < newArr.length; i++) {
      state.push(
        <Box
          src={newArr[i].imageUrl}
          alt={newArr[i].name}
          name={newArr[i].name}
          sku={newArr[i].sku}
          salePrice={newArr[i].salePrice}
          shortDesc={newArr[i].shortDesc}
          color={newArr[i].color}
          type={newArr[i].type}
          inStock={newArr[i].inStock}
          brand={newArr[i].brand}
          size={newArr[i].size}
        />
      );
    }
    return state;
  } else if (action.type === "High_Low") {
    bags_data = window.bagsData;
    var newArr = bags_data.sort(
      (a, b) => parseFloat(a.price) - parseFloat(b.price)
    );
    newArr.reverse();
    state = [];
    for (let i = 0; i < newArr.length; i++) {
      state.push(
        <Box
          src={newArr[i].imageUrl}
          alt={newArr[i].name}
          name={newArr[i].name}
          sku={newArr[i].sku}
          salePrice={newArr[i].salePrice}
          shortDesc={newArr[i].shortDesc}
          color={newArr[i].color}
          type={newArr[i].type}
          inStock={newArr[i].inStock}
          brand={newArr[i].brand}
          size={newArr[i].size}
        />
      );
    }
    return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    initialCall();
  }, []);
  return (
    <div>
      <div class="modal-container" id="modal_container">
        <div class="modal">
          <h1 class="heading" id="head">
            This is a HEading
          </h1>
          <img id="addImg" alt="This is ima" />
          <p id="content"></p>
          <button id="close">Close Me</button>
        </div>
      </div>
      <label for="kuDropSortBy">Sort By: {}</label>
      <select id="Price" onChange={(e) => dispatch({ type: e.target.value })}>
        <option value="Low_High" id="Price_Low_High">
          Price Low to High
        </option>
        <option value="High_Low" id="Price_High_Low">
          Price High to Low
        </option>
      </select>
      <label for="" id="totalResultFound">
        Total Number of result:-
      </label>
      <ul class="kuvmResultsList" id="allBagsData">
        {state}
      </ul>
    </div>
  );
}

export default App;
