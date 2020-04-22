import { createStore, Store, combineReducers, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";
import logger from "redux-logger";

let middlewares: any[] = [];

/*
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
*/

const rootReducer: any = combineReducers({
  form: formReducer
});

const store: Store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
