import formVisibleReducer from "./form-visible-reducer";
import boochListReducer from "./booch-list-reducer";
import { combineReducers } from "redux";


const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterBoochList: boochListReducer,
});

export default rootReducer;
