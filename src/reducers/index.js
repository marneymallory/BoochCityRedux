import formVisibleReducer from "./form-visible-reducer";
import boochListReducer from "./booch-list-reducer";
import { combineReducers } from "redux";
import rootReducer from "./reducers/index";

const store = createStore(rootReducer);
const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterBoochList: boochListReducer,
});

export default rootReducer;
