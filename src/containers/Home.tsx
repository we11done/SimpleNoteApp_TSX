import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import Home from '../pages/home';
import { Memo } from '../models';
import { RootState } from '../reducers';
import * as api from '../apis';
import {
  FetchMemoListAction,
  FetchDeletedMemoListAction,
  fetchMemoList,
  fetchDeletedMemoList,
} from '../actions';

type Props = {
  memos: Memo[];
  deletedMemos: Memo[];
  fetchMemoList(memos: Memo[]): FetchMemoListAction;
  fetchDeletedMemoList(memos: Memo[]): FetchDeletedMemoListAction;
};

const HomeContainer = ({
  memos,
  deletedMemos,
  fetchMemoList,
  fetchDeletedMemoList,
}: Props) => {
  useEffect(() => {
    const memos = api.fetchMemoList();
    const deletedMemos = api.fetchDeletedMemoList();
    fetchMemoList(memos);
    fetchDeletedMemoList(deletedMemos);
  }, [fetchMemoList, fetchDeletedMemoList]);

  return <Home memos={memos} deletedMemos={deletedMemos} />;
};

const mapStateToProps = (state: RootState) => ({
  memos: state.memo.memos,
  deletedMemos: state.memo.deletedMemos,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ fetchMemoList, fetchDeletedMemoList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
