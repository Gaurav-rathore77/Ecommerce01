import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Allproduct from "../component/Allproduct";
import { addCartItems } from "../redux/productSlice";

const Menu = () => {
  const { filterby } = useParams();
  const productData = useSelector((state) => state.product.productList);
  const dispatch = useDispatch();
  const [productDisplay, setProductDisplay] = useState(null);

  useEffect(() => {
    console.log("Filterby from URL:", filterby);
    console.log("Product data from Redux:", productData);
    console.log("Available product IDs:", productData.map((p) => p._id));
    if (productData.length > 0 && filterby) {
      const foundProduct = productData.find(
        (el) => String(el._id) === String(filterby)
      );
      setProductDisplay(foundProduct);
      console.log("FOUND PRODUCT:", foundProduct);
    }
  }, [productData, filterby]);

  if (!productData || productData.length === 0) {
    return (
      <div className="flex justify-center mt-10 font-bold text-2xl text-orange-600">
        Loading product list...
      </div>
    );
  }

  if (!productDisplay) {
    return (
      <div className="flex justify-center mt-10 font-bold text-2xl text-red-600">
        Product not found...
      </div>
    );
  }

  const addCartProduct = () => {
    dispatch(addCartItems(productDisplay));
  };

  return (
    <div className="p-2 md:py-4">
      <div className="w-full max-w-3xl bg-white m-auto md:flex">
        <div className="max-w-sm shadow overflow-hidden w-full p-3">
          <img
            src={productDisplay.image}
            alt={productDisplay.name}
            className="hover:scale-105 transition-all"
          />
        </div>
        <div className="flex flex-col gap-2 p-4">
          <h3 className="font-bold text-slate-600 capitalize text-lg md:text-4xl">
            {productDisplay.name}
          </h3>
          <p className="text-sm capitalize md:text-2xl">
            {productDisplay.category}
          </p>
          <p className="font-bold text-sm text-red-400 md:text-xl">
            ${productDisplay.price}
          </p>
          <div className="flex gap-3">
            <button className="bg-yellow-300 hover:bg-yellow-600 text-white font-bold min-w-[100px] p-1">
              Buy Now
            </button>
            <button
              onClick={addCartProduct}
              className="bg-yellow-300 hover:bg-yellow-600 text-white font-bold min-w-[100px] p-1"
            >
              Add Cart
            </button>
          </div>
          <div>
            <p className="font-bold text-sm">Description:</p>
            <p>{productDisplay.description}</p>
          </div>
        </div>
      </div>
      <Allproduct heading={"Related Products"} />
    </div>
  );
};

export default Menu;
