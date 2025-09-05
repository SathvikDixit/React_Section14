import React, { useEffect } from "react";
import { useState } from "react";
import axios from "../utils/axios";

const Show = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    const api = "/products";
    axios
      .get(api)
      .then((products) => {
        console.log(products);
        setProducts(products.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  //   const addProduct = () => {
  //     const appi = "https://fakestoreapi.com/products";

  //     axios
  //       .post(appi, {
  //         id: 0,
  //         title: "string",
  //         price: 0.1,
  //         description: "string",
  //         category: "string",
  //         image: "http://example.com",
  //       })
  //       .then((products) => {
  //         console.log(products);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  return (
    <div>
      <br />
      <ul>
        {products.length > 0 ? (
          products.map((p) => (
            <li className="p-5 mb-2 rounded bg-teal-200" key={p.id}>
              {p.title}
            </li>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </ul>
    </div>

    //Below method is used to call api products after clicking button, in the above one the data is displayed w/o button click.

    // <div className="">
    //   <button onClick={getProducts} className="px-5 py-2 rounded-md bg-red-300">
    //     Call Product API
    //   </button>
    //   <br />

    //   {/* <button onClick={addProduct} className="px-5 py-2 rounded-md bg-red-300">
    //     Add Product to API
    //   </button> */}
    //   <br />
    //   <ul>
    //     {/* <li className="w-1/4 p-5 mb-2 rounded bg-emerald-300">Product names</li> */}

    //     {products.length > 0 ? (
    //       products.map((p) => (
    //         <li className="p-5 mb-2 rounded bg-teal-200" key={p.id}>
    //           {p.title}
    //         </li>
    //       ))
    //     ) : (
    //       <h1>Loading...</h1>
    //     )}
    //   </ul>
    // </div>
  );
};

export default Show;
