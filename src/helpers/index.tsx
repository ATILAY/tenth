import React from "react";
import { Categories, CategoryContext } from "../types";

export const configureCategories = (
  categories: Categories,
  contextCarrier: CategoryContext
) => {
  categories = Array.from(new Set(categories) || []);

  if (Object.keys(contextCarrier).length !== 0) {
    const { setCategories } = contextCarrier;
    setCategories(categories);
  }
};
