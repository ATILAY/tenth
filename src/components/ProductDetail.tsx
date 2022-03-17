import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductDetail } from "../api";
import { ProductInfo } from "../interfaces";
import noImage from "../assets/no-img.png";
import loadingGif from "../assets/loading1.gif";
import NavbarContainer from "../containers/NavbarContainer";

export default function ProductDetail() {
  let params = useParams();
  let id: string | number | undefined = params.id;

  console.log("params-->", params);

  const [product, setProduct] = useState<void | undefined | ProductInfo>(
    undefined
  );

  useEffect(() => {
    if (id) {
      getProductDetail(id).then((res) => setProduct(res));
    } else {
      console.log(window.location.href);
    }
  }, [id]);

  // sonra asagıyı sil
  useEffect(() => {
    console.log("product---->", product);
  }, [product]);

  if (!product) {
    return (
      <div className="w-full flex flex-col">
        <NavbarContainer />

        <div className="w-full px-20 sm:px-60 py-10 pb-80 font-bold text-red-500">
          <img className="rounded-full" src={loadingGif} />
        </div>
      </div>
    );
  }

  if (typeof product == "string") {
    return (
      <div className="w-full flex flex-col">
        <NavbarContainer />
        <p className="w-full px-20 sm:px-60 py-10 pb-80 font-bold text-red-500">
          No Product With That Id
        </p>
      </div>
    );
  }

  const { avatar, name, price, description } = product;

  return (
    <div className="flex flex-col w-full">
      <NavbarContainer />
      <div className="image-wrapper flex flex-row justify-center">
        <img
          className="sm:w-1/2 px-4 py-4"
          src={
            avatar.includes("cdn.fakercloud") ||
            avatar.includes("request.response")
              ? noImage
              : avatar
          }
        />
      </div>
      <div className="gradient-container pb-4 w-full h-24 bg-gradient-to-b from-gray-200 to-gray-600"></div>
      <div className="product-info-wrapper bg-gray-600 text-white">
        <div className="product-info-inner-wrapper bg-black rounded-t-2xl p-6 flex flex-col w-full">
          <div className="title-wrapper flex flex-row justify-between w-full font-bold">
            <h1 className="text-xl">{name}</h1>
            <p>{product.price ? "$ " + price : "SOLD"}</p>
          </div>
          <div className="desc-wrapper pt-4">{description}</div>
        </div>
      </div>
    </div>
  );
}
