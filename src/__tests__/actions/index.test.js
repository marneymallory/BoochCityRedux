import * as actions from "./../../actions";

describe("booch actions", () => {
  it("deleteBooch should create DELETE_BOOCH action", () => {
    expect(actions.deleteBooch(1)).toEqual({
      type: "DELETE_BOOCH",
      id: 1,
    });
  });
});
