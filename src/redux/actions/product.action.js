export const storeCategories = (categories) => {
  localStorage.setItem("categories", JSON.stringify(categories));

  return {
    type: "STORE_CATEGORIES",
    payload: categories,
  };
};

export const storeItemsByCategory = (items) => {
  localStorage.setItem("itemsByCategory", JSON.stringify(items));

  return {
    type: "STORE_ITEMS_BY_CATEGORY",
    payload: items,
  };
};

export const storeActiveCategory = (category) => {
  localStorage.setItem("activeCategory", JSON.stringify(category));

  return {
    type: "STORE_ACTIVE_CATEGORY",
    payload: category,
  };
};

export const storeSelectedProduct = (product) => {
  localStorage.setItem("selectedProduct", JSON.stringify(product));

  return {
    type: "STORE_SELECTED_PRODUCT",
    payload: product,
  };
};

export const storeCartedProduct = (product) => {
  const totalProduct = JSON.parse(localStorage.getItem("cartedProduct")) || [];
  console.log(totalProduct);
  totalProduct.push(product);

  localStorage.setItem("cartedProduct", JSON.stringify([totalProduct]));

  return {
    type: "STORE_CARTED_PRODUCT",
    payload: product,
  };
};
