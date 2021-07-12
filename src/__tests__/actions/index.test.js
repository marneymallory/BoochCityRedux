import * as actions from "./../../actions";

describe("booch actions", () => {
  it("deleteBooch should create DELETE_BOOCH action", () => {
    expect(actions.deleteBooch(1)).toEqual({
      type: "DELETE_BOOCH",
      id: 1,
    });
  });
  it("toggleForm should create TOGGLE_FORM action", () => {
    expect(actions.toggleForm()).toEqual({
      type: "TOGGLE_FORM",
    });
  });
    it("addBooch should create ADD_BOOCH action", () => {
      expect(actions.addBooch({
          name: "Cosmic Cranberry",
          brand: "GT's",
          price: 40,
          flavor:"Cranberry",
          amountLeft:100,
          id: 1
        })).toEqual({
        type: "ADD_BOOCH",
         name: "Cosmic Cranberry",
          brand: "GT's",
          price: 40,
          flavor:"Cranberry",
          amountLeft:100,
        id: 1,
      });
    });
});
