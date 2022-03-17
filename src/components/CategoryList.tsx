import React from "react";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { Categories, CategoryContext } from "../types";

export default function CategoryList() {
  return (
    <CategoriesContext.Consumer>
      {(value: CategoryContext) => {
        const { categories, chosenCategory, setChosenCategory } = value;

        console.log("aasdasdasd", categories.join() && "aacategories--->");

        // React.useEffect(() => {}, [categories]);

        return (
          <div
            className="category-list-in-main-page w-full flex flex-wrap justify-between py-2"
            style={{ display: categories.join() ? "flex" : "none" }}
          >
            {categories.map((category, index) => {
              let tempCategory = category.replaceAll("-", " ");
              tempCategory =
                tempCategory.charAt(0).toUpperCase() + tempCategory.slice(1);

              return (
                <div
                  onClick={() => setChosenCategory(category)}
                  key={category + index}
                  className={`cursor-pointer mx-1 px-3 py-2 border-2 font-bold border-transparent bg-black rounded-2xl text-white ${
                    category === chosenCategory
                      ? "bg-white border-black text-black"
                      : ""
                  }`}
                >
                  <h1>{tempCategory}</h1>
                </div>
              );
            })}
          </div>
        );
      }}
    </CategoriesContext.Consumer>
  );
}
