import React from "react";
import { Categories, CategoryContext } from "../types";

export const CategoriesContext = React.createContext<CategoryContext>({
  categories: [""],
  setCategories: () => {},
  chosenCategory: "all",
  setChosenCategory: () => {},
});
