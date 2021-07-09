import boochListReducer from "../../reducers/booch-list-reducer";

describe("boochListReducer", () => {
  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(boochListReducer({}, { type: null })).toEqual({});
  });
});
