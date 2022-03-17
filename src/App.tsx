import "./App.css";
import HeaderContainer from "./containers/HeaderContainer";
import CategoryListContainer from "./containers/CategoryListContainer";
import ProductListContainer from "./containers/ProductListContainer";
import AppContainer from "./containers/AppContainer";
import { CategoriesContextWrapper } from "./contexts";
import { useState } from "react";
import { Categories } from "./types";

function App() {
  return (
    <AppContainer>
      <HeaderContainer />
      <CategoriesContextWrapper>
        <CategoryListContainer />
        <ProductListContainer />
      </CategoriesContextWrapper>
    </AppContainer>
  );
}

export default App;
