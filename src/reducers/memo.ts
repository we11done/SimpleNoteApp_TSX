import { Memo } from '../models';
import * as types from '../actions/types';
import { MemoActionTypes } from '../actions';

export type MemoState = {
  memos: Memo[];
  deletedMemos: Memo[];
};

const initialState: MemoState = {
  memos: [],
  deletedMemos: [],
};

const memoReducer = (
  state = initialState,
  { type, payload }: MemoActionTypes
): MemoState => {
  switch (type) {
    case types.FETCH_MEMO_LIST:
      return { ...state, memos: payload };
    case types.FETCH_DELETED_MEMO_LIST:
      return {
        ...state,
        deletedMemos: payload,
      };
    case types.FETCH_MEMO:
      return {
        ...state,
        memos: state.memos.map((memo: Memo) => {
          if (memo.id !== payload.id) return memo;
          return { ...payload };
        }),
      };
    case types.DELETE_MEMO:
      return {
        ...state,
        memos: state.memos.filter((memo: Memo) => memo.id !== payload),
      };
    case types.ADD_MEMO:
      return {
        ...state,
        memos: [payload, ...state.memos],
      };
    case types.RESTORE_MEMO:
      return {
        ...state,
        deletedMemos: state.memos.filter((memo: Memo) => memo.id !== payload),
      };
    default:
      return state;
  }
};

export default memoReducer;
