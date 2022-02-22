import {
  USER_LIST_START,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL,
  USER_LIST_PARAMS,
} from "../constants/constants";

const initialState = {
  userListBegin: false,
  userListSuccess: false,
  userListSuccessData: [],
  userListFailData: [],
  paramsData: {
      Search: "",
      SortColumn: "",
      OrderType: "",
      PageNumber: 1,
      PageLimit: 10,
  },
  helpersData: {
      filter: false,
      page: 1,
  },
  bankListFail: false,
};

const userListReducer = (state = initialState, action) => {
  // console.log(action.payload, "payload")
  switch (action.type) {
      case USER_LIST_START:
          return {
              ...state,
              userListBegin: true,
          };
      case USER_LIST_SUCCESS:
          return {
              ...state,
              userListBegin: false,
              userListSuccess: true,
              userListSuccessData: action.payload,
              userListFail: false,
          };
      case USER_LIST_PARAMS:
          return {
              ...state,
              paramsData: {
                  PageNumber: action.payload.PageNumber ? action.payload.PageNumber : state.paramsData.PageNumber,
                  PageLimit: action.payload.PageLimit ? action.payload.PageLimit : state.paramsData.PageLimit,
                  OrderType: action.payload.OrderType,
                  SortColumn: action.payload.SortColumn ? action.payload.SortColumn : state.paramsData.SortColumn,
                  Search: action.payload.Search,
              },
              helpersData: {
                  filter: action.payload.filter,
                  page: action.payload.page,
              }
          };
      case USER_LIST_FAIL:
          return {
              ...state,
              userListBegin: false,
              userListSuccess: false,
              userListSuccessData: [],
              userListFailData: action.payload,
              userListFail: true,
          };
      default:
          return state;
  }
};

export default userListReducer;
