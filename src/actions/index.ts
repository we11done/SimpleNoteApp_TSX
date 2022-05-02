import * as types from './types';
import { Memo } from '../models';

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

export const fetchMemoList = (memos: Memo[]): FetchMemoListAction => ({
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

export type MemoActionTypes =
  | FetchMemoListSuccessAction
  | FetchMemoSuccessAction
  | AddMemoSuccessAction
  | FetchDeletedMemoListSuccessAction
  | DeleteMemoSuccessAction
  | RestoreMemoSuccessAction;
