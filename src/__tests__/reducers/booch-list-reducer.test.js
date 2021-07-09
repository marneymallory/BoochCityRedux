import boochListReducer from "../../reducers/booch-list-reducer";

describe('boochListReducer', () => {
  let action;
  const boochData = {
    name: 'Blueberry Morning',
    brand: 'Zip Kombucha',
    price: 40.0,
    flavor: 'Blueberry',
    amountLeft: 110,
    id: 1
  };
  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(boochListReducer({}, { type: null })).toEqual({});
  });
  test('Should successfully add new booch data to masterBoochList', () =>{
    const { name, brand, price, flavor, amountLeft, id } = boochData;
    action = {
      type: 'ADD_BOOCH',
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      amountLeft: amountLeft,
      id: id
    };
    expect(boochListReducer({}, action)).toEqual({
      [id] : {
        name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      amountLeft: amountLeft,
      id: id
      }
    })
  })
});
