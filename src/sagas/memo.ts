import { takeLatest, put, all, call, take } from 'redux-saga/effects';
import { Memo } from '../models';
import * as types from '../actions/types';
import {
  FetchMemoAction,
  AddMemoAction,
  DeleteMemoAction,
  RestoreMemoAction,
} from '../actions';
import * as api from '../apis';
function* memoSaga() {
  yield all([
    takeLatest(types.FETCH_MEMO_LIST_REQUEST, fetchMemoList$),
    takeLatest(types.FETCH_DELETED_MEMO_LIST_REQUEST, fetchDeletedMemoList$),
    takeLatest(types.FETCH_MEMO_REQUEST, fetchMemo$),
    takeLatest(types.ADD_MEMO_REQUEST, addMemo$),
    takeLatest(types.DELETE_MEMO_REQUEST, deleteMemo$),
    takeLatest(types.RESTORE_MEMO_SUCCESS, restoreMemo$),
  ]);
}

function* fetchMemoList$() {
  try {
    const memos: Memo[] = yield call(api.fetchMemoList);
    yield put({ type: types.FETCH_MEMO_LIST_SUCCESS, payload: memos });
  } catch (err) {
    console.log(err);
  } finally {
    yield put({ type: types.CLEAR_API_CALL_STATUS });
  }
}

function* fetchDeletedMemoList$() {
  try {
    const memos: Memo[] = yield call(api.fetchDeletedMemoList);
    yield put({ type: types.FETCH_DELETED_MEMO_LIST_SUCCESS, payload: memos });
  } catch (err) {
    console.log(err);
  }
}

function* fetchMemo$(action: FetchMemoAction) {
  const { payload } = action;
  if (!payload) return;
  try {
    const memo: Memo = yield call(api.fetchMemo, payload);
    yield put({ type: types.FETCH_MEMO_SUCCESS, payload: memo });
  } catch (err) {
    console.log(err);
  }
}

function* addMemo$(action: AddMemoAction) {
  const { payload } = action;
  if (!payload) return;
  try {
    const memo: Memo = yield call(api.addMemo, payload);
    yield put({ type: types.ADD_MEMO_SUCESSS, payload: memo });
    yield put({
      type: types.SHOW_DIALOG,
      payload: { type: 'alert', text: 'Memo added successfully' },
    });
    yield take(types.CONFIRM_DIALOG);
  } catch (err) {
    console.log(err);
  }
}

function* deleteMemo$(action: DeleteMemoAction) {
  const { payload } = action;
  if (!payload) return;
  try {
    yield call(api.deleteMemo, payload);
    yield put({ type: types.DELETE_MEMO_SUCCESS, payload });
  } catch (err) {
    console.log(err);
  }
}

function* restoreMemo$(action: RestoreMemoAction) {
  const { payload } = action;
  if (!payload) return;
  try {
    yield call(api.restoreMemo, payload);
    yield put({ type: types.RESTORE_MEMO_SUCCESS, payload });
  } catch (err) {
    console.log(err);
  }
}
export default memoSaga;
