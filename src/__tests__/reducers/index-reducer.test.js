import rootReducer from "../../reducers/index";
import { createStore } from 'redux';
import formVisibleReducer from "../../reducers/form-visible-reducer";
import boochListReducer from "../../reducers/booch-list-reducer";

let store = createStore(rootReducer);

describe("rootReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterBoochList: {},
      formVisibleOnPage: false,
    });
  });
  test("Check that initial state of boochListReducer matches root reducer", () => {
    expect(store.getState().masterBoochList).toEqual(
      boochListReducer(undefined, { type: null })
    );
  });

  test("Check that initial state of formVisibleReducer matches root reducer", () => {
    expect(store.getState().formVisibleOnPage).toEqual(
      formVisibleReducer(undefined, { type: null })
    );
  });
  test("Check that ADD_BOOCH action works for boochListReducer and root reducer", () => {
    const action = {
      id: id,
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      amountLeft: amountLeft,
    };
    store.dispatch(action);
    expect(store.getState().masterBoochList).toEqual(
      boochListReducer(undefined, action)
    );
  });

  test("Check that TOGGLE_FORM action works for formVisibleReducer and root reducer", () => {
    const action = {
      type: "TOGGLE_FORM",
    };
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(
      formVisibleReducer(undefined, action)
    );
  });
});
