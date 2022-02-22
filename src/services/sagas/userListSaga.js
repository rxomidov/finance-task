import {takeLatest, put, call, all} from "redux-saga/effects";
import api from "../api/api";
import {getUserListSuccess, getUserListFail} from "../actions/userListActions";
import {USER_LIST_START} from "../constants/constants";
import {ShowNotification} from "../../containers/ShowNotification";

export function* getUserList({payload}) {
    try {
        const response = yield api.request.get("User/GetList", {
            params: payload
        });
        // console.log(response.data);
        yield put(getUserListSuccess(response.data));
    } catch (error) {
        ShowNotification(
            "error",
            `${error.response.statusText}`,
            `${error.response.data.error}`
        );
        yield put(getUserListFail(error.response));
    }
}

export function* getUserListStart() {
    yield takeLatest(USER_LIST_START, getUserList);
}

export function* userListSagas() {
    yield all([call(getUserListStart)]);
}
