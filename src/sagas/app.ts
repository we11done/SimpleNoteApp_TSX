import { put, takeEvery, delay, all } from 'redux-saga/effects';
import { ShowToastAction } from '../actions';
import { ADD_TOAST, REMOVE_TOAST, SHOW_TOAST } from '../actions/types';

function* appSaga() {
  yield all([
    takeEvery(SHOW_TOAST, showToast$),
    takeEvery((action: any) => {
      return action.type.endsWith('_FAILURE');
    }, handleFailure$),
  ]);
}

let toast_id = 0;

function* showToast$({ payload }: ShowToastAction) {
  const nextId: number = ++toast_id;
  toast_id = nextId;
  const text: string = payload;

  yield put({ type: ADD_TOAST, payload: { id: nextId, text } });
  yield delay(6000);
  yield put({ type: REMOVE_TOAST, payload: nextId });
}

function* handleFailure$(action: { payload: any }) {
  const { payload } = action;
  if (typeof payload === 'string') {
    yield put({ type: SHOW_TOAST, payload });
  }
}

export default appSaga;
