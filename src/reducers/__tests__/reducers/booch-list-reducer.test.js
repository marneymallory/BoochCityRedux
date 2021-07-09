import boochListReducer from "../../booch-list-reducer";

describe('boochListReducer', () => {
  let action; 
  
 const currentState = {
   1: {
     name: "Blueberry Morning",
     brand: "Zip Kombucha",
     price: 40.0,
     flavor: "Blueberry",
     amountLeft: 110,
     id: 1
   },
   2: {
     name: "Ginger Zing",
     brand: "Zip Kombucha",
     price: 40.0,
     flavor: "Ginger",
     amountLeft: 80,
     id: 2 
    },
   }

   const boochData = {
     name: "Zing King",
     brand: "Zip Kombucha",
     price: 40.0,
     flavor: "Lemon",
     amountLeft: 80,
     id: 2,
   };

  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(boochListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new booch data to masterBoochList', () => {
    const { name, brand, price, flavor, amountLeft, id } = boochData;
    action = {
      type: 'ADD_BOOCH',
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      amountLeft: amountLeft,
      id: id,
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
      test ('Should successfully delete a booch',() => {
        action = {
          type: 'DELETE_BOOCH',
          id: 1
        };
        expect(boochListReducer(currentState, action)).toEqual({
            2: {  name: "Ginger Zing",
                  brand: "Zip Kombucha",
                  price: 40.0,
                  flavor: "Ginger",
                  amountLeft: 80,
                  id: 2 
                }
        });
   });
})
