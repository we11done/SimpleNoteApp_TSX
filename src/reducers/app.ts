import { AppActionTypes } from '../actions';
import * as types from '../actions/types';
import { Dialog } from '../models';

export type AppState = {
  apiCalling: boolean;
  dialog?: Dialog;
};

const initialState: AppState = {
  apiCalling: true,
  dialog: undefined,
};

const appReducer = (
  state: AppState = initialState,
  action: AppActionTypes
): AppState => {
  switch (action.type) {
    case types.FETCH_MEMO_LIST_REQUEST:
      return {
        ...state,
        apiCalling: true,
      };
    case types.CLEAR_API_CALL_STATUS:
      return {
        ...state,
        apiCalling: false,
      };
    case types.SHOW_DIALOG:
      return {
        ...state,
        dialog: action.payload,
      };
    case types.CONFIRM_DIALOG:
    case types.CANCEL_DIALOG:
      return {
        ...state,
        dialog: undefined,
      };
    default:
      return state;
  }
};

export default appReducer;
