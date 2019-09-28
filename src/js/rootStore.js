import { createStore, applyMiddleware, compose } from "redux";
import { createPromise } from "redux-promise-middleware";
import rootReducer from "./rootReducer";

const middleware = [createPromise()];
const composeWEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;
const rootStore = createStore(rootReducer, composeWEnhancers(applyMiddleware(...middleware)));

export default rootStore;