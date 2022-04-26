import * as types from './types';
import { Memo } from '../models';

export type FetchMemoListAction = {
  type: typeof types.FETCH_MEMO_LIST;
  payload: Memo[];
};

export type FetchMemoAction = {
  type: typeof types.FETCH_MEMO;
  payload: Memo;
};

export type AddMemoAction = {
  type: typeof types.ADD_MEMO;
  payload: Memo;
};

export type FetchDeletedMemoListAction = {
  type: typeof types.FETCH_DELETED_MEMO_LIST;
  payload: Memo[];
};

export type DeleteMemoAction = {
  type: typeof types.DELETE_MEMO;
  payload: number;
};

export type RestoreMemoAction = {
  type: typeof types.RESTORE_MEMO;
  payload: number;
};

export const fetchMemoList = (memos: Memo[]): FetchMemoListAction => ({
  type: types.FETCH_MEMO_LIST,
  payload: memos,
});

export const fetchMemo = (memo: Memo): FetchMemoAction => ({
  type: types.FETCH_MEMO,
  payload: memo,
});

export const addMemo = (memo: Memo): AddMemoAction => ({
  type: types.ADD_MEMO,
  payload: memo,
});

export const fetchDeletedMemoList = (
  memos: Memo[]
): FetchDeletedMemoListAction => ({
  type: types.FETCH_DELETED_MEMO_LIST,
  payload: memos,
});

export const deleteMemo = (id: number): DeleteMemoAction => ({
  type: types.DELETE_MEMO,
  payload: id,
});

export const restoreMemo = (id: number): RestoreMemoAction => ({
  type: types.RESTORE_MEMO,
  payload: id,
});

export type MemoActionTypes =
  | FetchMemoListAction
  | FetchMemoAction
  | AddMemoAction
  | FetchDeletedMemoListAction
  | DeleteMemoAction
  | RestoreMemoAction;
