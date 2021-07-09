export default (state = {}, action) => {
  const { name, brand, price, flavor, amountLeft, id } = action;
  switch (action.type) {
    case "ADD_BOOCH":
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          flavor: flavor,
          amountLeft: amountLeft,
          id: id,
        },
      });
    case "DELETE_BOOCH":
      const newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};
