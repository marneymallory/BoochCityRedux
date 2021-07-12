export const deleteBooch = (id) => ({
  type: "DELETE_BOOCH",
  id,
});
export const toggleForm = () => ({
  type: "TOGGLE_FORM",
});
export const addBooch = (booch) => {
  const { name, brand, price, flavor, amountLeft, id } = booch;
  return {
    type: "ADD_BOOCH",
    name: name,
    brand: brand,
    price: price,
    flavor: flavor,
    amountLeft: amountLeft,
    id: id,
  };
};