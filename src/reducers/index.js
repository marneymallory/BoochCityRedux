import { createStore } from "redux";
import reducer from "./reducers/booch-list-reducer";
import { Provider } from "react-redux";


const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);



