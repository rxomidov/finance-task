import {all, call} from "redux-saga/effects";

//all sagas
import {loginSagas} from "./loginSaga";


export default function* rootSaga() {
    // console.log("Hello from Saga!");
    yield all([
        call(loginSagas),
    ]);
}