import { useState } from "react";
import { Categories } from "../types";
import { CategoriesContext } from "./CategoriesContext";

export const CategoriesContextWrapper = ({
  children,
}: {
  children: React.ReactChild | React.ReactChild[] | React.ReactNode;
}) => {
  const [categories, setCategories] = useState<Categories>([""]);
  const [chosenCategory, setChosenCategory] = useState<string>("all");

  return (
    <CategoriesContext.Provider
      value={{ categories, setCategories, chosenCategory, setChosenCategory }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
