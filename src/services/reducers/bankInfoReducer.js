import {
    BANK_INFO_START,
    BANK_INFO_SUCCESS,
    BANK_INFO_FAIL,
} from "../constants/constants";

const initialState = {
    bankInfoInfoBegin: false,
    bankInfoInfoSuccess: false,
    bankInfoInfoSuccessData: [],
    bankInfoInfoFailData: [],
    bankInfoInfoFail: false,
};

const bankInfoInfoReducer = (state = initialState, action) => {
    // console.log(action.payload)
    switch (action.type) {
        case BANK_INFO_START:
            return {
                ...state,
                bankInfoInfoBegin: true,
                bankInfoInfoSuccessData: [],
            };
        case BANK_INFO_SUCCESS:
            return {
                ...state,
                bankInfoInfoBegin: false,
                bankInfoInfoSuccess: true,
                bankInfoInfoSuccessData: action.payload,
                bankInfoInfoFail: false,
            };
        case BANK_INFO_FAIL:
            return {
                ...state,
                bankInfoInfoBegin: false,
                bankInfoInfoSuccess: false,
                bankInfoInfoFailData: action.payload,
                bankInfoInfoFail: true,
            };
        default:
            return state;
    }
};

export default bankInfoInfoReducer;
