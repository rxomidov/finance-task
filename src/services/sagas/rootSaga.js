import {all, call} from "redux-saga/effects";

//all sagas
import {loginSagas} from "./loginSaga";
import {bankListSagas} from "./bankListSaga";
import {bankInfoSagas} from "./bankInfoSaga";


export default function* rootSaga() {
    // console.log("Hello from Saga!");
    yield all([
        call(loginSagas),
        call(bankListSagas),
        call(bankInfoSagas),
    ]);
}