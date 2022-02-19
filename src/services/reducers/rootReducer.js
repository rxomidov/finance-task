import {combineReducers} from "redux";
import loginReducer from "./loginReducer";
import bankListReducer from "./bankListReducer";
import bankInfoInfoReducer from "./bankInfoReducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    bankList: bankListReducer,
    bankInfo: bankInfoInfoReducer,
});