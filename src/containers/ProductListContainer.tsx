import React from "react";
import ProductList from "../components/ProductList";

export default function ProductListContainer() {
  return (
    <div className="product-list-wrapper flex flex-wrap">
      <ProductList />
    </div>
  );
}
