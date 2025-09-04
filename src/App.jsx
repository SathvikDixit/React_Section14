import React from "react";
import axios from "axios";

const App = () => {



  const getProducts = () => {
    const api = "https://fakestoreapi.com/products";
    axios
      .get(api)
      .then((products) => {
        console.log(products);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addProduct = () => {
    const appi = "https://fakestoreapi.com/products";

    axios
      .post(appi, {
        id: 0,
        title: "string",
        price: 0.1,
        description: "string",
        category: "string",
        image: "http://example.com",
      })
      .then((products) => {
        console.log(products);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="pt-[5%] pl-[5%] flex gap-10 ">
      <button onClick={getProducts} className="px-5 py-2 rounded-md bg-red-300">
        Call Product API
      </button>

      <button onClick={addProduct} className="px-5 py-2 rounded-md bg-red-300">
        Add Product to API
      </button>
      <br />
      <hr  className="my-10"/>

      <ul>
        <li className="w-1/4 p-5 bg-red-200">Product name</li>
      </ul>

    </div>
  );
};

export default App;
