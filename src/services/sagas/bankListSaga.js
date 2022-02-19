import {takeLatest, put, call, all} from "redux-saga/effects";
import api from "../api/api";
// import {postRefreshToken} from "../../common/functions/postAxios"
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
        if (e?.response?.status === 419) {
            // yield postRefreshToken(token)
            yield put({type: BANK_LIST_START, payload: payload})
        } else yield put(getBankListFail(e.response));
    }
}

export function* getBankListStart() {
    yield takeLatest(BANK_LIST_START, getBankList);
}

export function* bankListSagas() {
    yield all([call(getBankListStart)]);
}
