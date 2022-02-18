import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const initialState = {

}

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
);
export default store;
sagaMiddleware.run(rootSaga);