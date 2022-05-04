import { AppActionTypes } from '../actions';
import * as types from '../actions/types';
import { Dialog, Toast } from '../models';

export type AppState = {
  apiCalling: boolean;
  dialog?: Dialog;
  toasts: Toast[];
};

const initialState: AppState = {
  apiCalling: true,
  dialog: undefined,
  toasts: [],
};

const appReducer = (
  state: AppState = initialState,
  action: AppActionTypes
): AppState => {
  switch (action.type) {
    case types.FETCH_MEMO_LIST_REQUEST:
    case types.FETCH_DELETED_MEMO_LIST_REQUEST:
    case types.ADD_MEMO_REQUEST:
    case types.DELETE_MEMO_REQUEST:
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
    case types.ADD_TOAST:
      return {
        ...state,
        toasts: [...state.toasts, action.payload],
      };
    case types.REMOVE_TOAST:
      return {
        ...state,
        toasts: state.toasts.filter(toast => toast.id !== action.payload),
      };
    default:
      return state;
  }
};

export default appReducer;
