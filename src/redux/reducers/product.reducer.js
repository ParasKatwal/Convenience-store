export const categoryReducer = (state = [], action) => {
  switch (action.type) {
    case "STORE_CATEGORIES":
      return action.payload;

    default:
      return state;
  }
};

export const itemByCategoryReducer = (state = [], action) => {
  switch (action.type) {
    case "STORE_ITEMS_BY_CATEGORY":
      return action.payload;

    default:
      return state;
  }
};

export const activeCategoryReducer = (state = "electronics", action) => {
  switch (action.type) {
    case "STORE_ACTIVE_CATEGORY":
      return action.payload;

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "STORE_SELECTED_PRODUCT":
      return action.payload;

    default:
      return state;
  }
};

export const cartedProductReducer = (state = [], action) => {
  switch (action.type) {
    case "STORE_CARTED_PRODUCT":
      return [...state, action.payload];

    default:
      return state;
  }
};
