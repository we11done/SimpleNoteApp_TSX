import * as types from './types';
import { Memo } from '../models';

export type FetchMemoListAction = {
  type: typeof types.FETCH_MEMO_LIST;
  payload: Memo[];
};

export const fetchMemoList = (memos: Memo[]): FetchMemoListAction => ({
  type: types.FETCH_MEMO_LIST,
  payload: memos,
});

export type MemoActionType = FetchMemoListAction;
