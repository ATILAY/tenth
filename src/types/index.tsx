export type Categories = string[];

export type CategoryContext = {
  categories: Categories;
  setCategories: React.Dispatch<React.SetStateAction<Categories>>;
  chosenCategory: string;
  setChosenCategory: React.Dispatch<React.SetStateAction<string>>;
};
