import * as types from './types';
import { Dialog, Memo, Toast } from '../models';

// FETCH MEMO LIST Actions
export type FetchMemoListAction = {
  type: typeof types.FETCH_MEMO_LIST_REQUEST;
};

export type FetchMemoListSuccessAction = {
  type: typeof types.FETCH_MEMO_LIST_SUCCESS;
  payload: Memo[];
};

// FETCH MEMO Actions
export type FetchMemoAction = {
  type: typeof types.FETCH_MEMO_REQUEST;
  payload: number;
};

export type FetchMemoSuccessAction = {
  type: typeof types.FETCH_MEMO_SUCCESS;
  payload: Memo;
};

// ADD MEMO Actions
export type AddMemoAction = {
  type: typeof types.ADD_MEMO_REQUEST;
  payload: Memo;
};

export type AddMemoSuccessAction = {
  type: typeof types.ADD_MEMO_SUCESSS;
  payload: Memo;
};

// FETCH DELETED MEMO Actions
export type FetchDeletedMemoListAction = {
  type: typeof types.FETCH_DELETED_MEMO_LIST_REQUEST;
};

export type FetchDeletedMemoListSuccessAction = {
  type: typeof types.FETCH_DELETED_MEMO_LIST_SUCCESS;
  payload: Memo[];
};

// DELETED MEMO Actions
export type DeleteMemoAction = {
  type: typeof types.DELETE_MEMO_REQUEST;
  payload: number;
};

export type DeleteMemoSuccessAction = {
  type: typeof types.DELETE_MEMO_SUCCESS;
  payload: number;
};

// RESTORE MEMO Actions
export type RestoreMemoAction = {
  type: typeof types.RESTORE_MEMO_REQUEST;
  payload: number;
};

export type RestoreMemoSuccessAction = {
  type: typeof types.RESTORE_MEMO_SUCCESS;
  payload: number;
};

// CLEAR API CALL Action
export type ClearApiCallStatusAction = {
  type: typeof types.CLEAR_API_CALL_STATUS;
};

// DIALOG Actions
export type ShowDialogAction = {
  type: typeof types.SHOW_DIALOG;
  payload: Dialog;
};

export type ConfirmDialogAction = {
  type: typeof types.CONFIRM_DIALOG;
};

export type CancelDialogAction = {
  type: typeof types.CANCEL_DIALOG;
};

// TOAST Actions
export type ShowToastAction = {
  type: typeof types.SHOW_TOAST;
  payload: string;
};

export type AddToastAction = {
  type: typeof types.ADD_TOAST;
  payload: Toast;
};

export type RemoveToastAction = {
  type: typeof types.REMOVE_TOAST;
  payload: number;
};

export const fetchMemoList = (): FetchMemoListAction => ({
  type: types.FETCH_MEMO_LIST_REQUEST,
});

export const fetchMemo = (id: number): FetchMemoAction => ({
  type: types.FETCH_MEMO_REQUEST,
  payload: id,
});

export const addMemo = (memo: Memo): AddMemoAction => ({
  type: types.ADD_MEMO_REQUEST,
  payload: memo,
});

export const fetchDeletedMemoList = (): FetchDeletedMemoListAction => ({
  type: types.FETCH_DELETED_MEMO_LIST_REQUEST,
});

export const deleteMemo = (id: number): DeleteMemoAction => ({
  type: types.DELETE_MEMO_REQUEST,
  payload: id,
});

export const restoreMemo = (id: number): RestoreMemoAction => ({
  type: types.RESTORE_MEMO_REQUEST,
  payload: id,
});

export const showDialog = (dialog: Dialog): ShowDialogAction => ({
  type: types.SHOW_DIALOG,
  payload: dialog,
});

export const confirmDialog = (): ConfirmDialogAction => ({
  type: types.CONFIRM_DIALOG,
});

export const cancelDialog = (): CancelDialogAction => ({
  type: types.CANCEL_DIALOG,
});

export type MemoActionTypes =
  | FetchMemoListSuccessAction
  | FetchMemoSuccessAction
  | AddMemoSuccessAction
  | FetchDeletedMemoListSuccessAction
  | DeleteMemoSuccessAction
  | RestoreMemoSuccessAction;

export type AppActionTypes =
  | ClearApiCallStatusAction
  | FetchMemoListAction
  | FetchDeletedMemoListAction
  | AddMemoAction
  | DeleteMemoAction
  | ShowDialogAction
  | ConfirmDialogAction
  | CancelDialogAction
  | AddToastAction
  | RemoveToastAction
  | ShowToastAction;
