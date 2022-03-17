import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getProducts } from "../api";
import { ProductInfo } from "../interfaces";
import { configureCategories } from "../helpers";
import noImage from "../assets/no-img.png";
import loadingGif from "../assets/loading1.gif";
import { Categories } from "../types";
import { CategoriesContext } from "../contexts/CategoriesContext";

export default function ProductList() {
  const [products, setProduct] = useState<void | undefined | ProductInfo[]>(
    undefined
  );

  const contextCarrier = useContext(CategoriesContext);
  const { chosenCategory } = contextCarrier;

  console.log(
    "useContext(CategoriesContext)-->",
    useContext(CategoriesContext)
  );

  let categoriesTemporary: Categories = [];

  useEffect(() => {
    getProducts().then((res) => setProduct(res));
  }, []);

  useEffect(() => {
    if (categoriesTemporary.length > 0) {
      configureCategories(categoriesTemporary, contextCarrier);
    }
  }, [products]);

  if (!products) {
    return (
      <div className="w-full h-full">
        <img src={loadingGif} className="h-full w-full" />
      </div>
    );
  }

  return (
    <>
      {products.map(({ avatar, price, name, id, category }, index) => {
        if (category) {
          if (index === 0) {
            categoriesTemporary.push("all");
          }
          categoriesTemporary.push(category);
          // if (index === products.length - 1) {
          //   console.log("ggggrgrgrgrgrgrgggrrdi");
          //   configureCategories(categoriesTemporary, contextCarrier);
          // }
        }

        if (chosenCategory === category || chosenCategory === "all") {
          return (
            <Link
              key={id + category}
              to={"/products/" + id}
              className="product-upper-wrapper w-1/2 items-center p-2 h-60 sm:h-80"
            >
              <div className="product-card-wrapper flex flex-col items-center h-full w-full bg-white rounded-sm  rounded-b-2xl">
                <div className="image-wrapper flex justify-center w-1/2 h-3/5 py-4 pb-2">
                  <img
                    src={
                      avatar.includes("cdn.fakercloud") ||
                      avatar.includes("request.response")
                        ? noImage
                        : avatar
                    }
                    className="h-full w-auto"
                  />
                </div>
                <div className="product-footer-wrapper bg-gradient-to-b from-white  to-gray-400  w-full h-2/5 flex flex-col-reverse">
                  <div className="bg-black rounded-2xl flex flex-col text-white pl-4 py-2 font-bold">
                    <p>{name}</p>
                    <p className="py-1">{price ? "$ " + price : "SOLD"}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        } else {
          return <div></div>;
        }
      })}
    </>
  );
}
