import {takeLatest, put, call, all} from "redux-saga/effects";
import api from "../api/api";
import {getBankListSuccess, getBankListFail} from "../actions/bankListActions";
import {BANK_LIST_START} from "../constants/constants";

export function* getBankList({payload}) {
    try {
        const response = yield api.request.get("Bank/GetList", {
            params: payload
        });
        // console.log(response.data);
        yield put(getBankListSuccess(response.data));
    } catch (e) {
        yield put(getBankListFail(e.response));
    }
}

export function* getBankListStart() {
    yield takeLatest(BANK_LIST_START, getBankList);
}

export function* bankListSagas() {
    yield all([call(getBankListStart)]);
}
