import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";
import {
  categoryReducer,
  itemByCategoryReducer,
  activeCategoryReducer,
  selectedProductReducer,
  cartedProductReducer,
} from "./product.reducer";

const allReducers = combineReducers({
  userData: authReducer,
  categories: categoryReducer,
  itemsByCategory: itemByCategoryReducer,
  activeCategory: activeCategoryReducer,
  selectedProduct: selectedProductReducer,
  cartedProduct: cartedProductReducer,
});

export default allReducers;
