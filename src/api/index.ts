import { ProductInfo } from "../interfaces";

const BASE_URL = "https://62286b649fd6174ca82321f1.mockapi.io/case-study";

export const getProducts = () => {
  return fetch(`${BASE_URL}/products`)
    .then((res) => res.json())
    .then((resJson: ProductInfo[]) => {
      //   console.log("resJson", resJson);

      return resJson;
    })
    .catch((err) => console.log("error:", err));
};

export const getProductDetail = (id: number | string) => {
  return fetch(`${BASE_URL}/products/${id}`)
    .then((res) => res.json())
    .then((resJson: ProductInfo) => {
      console.log("resJson --->", resJson);

      return resJson;
    })
    .catch((err) => console.log("error:", err));
};
