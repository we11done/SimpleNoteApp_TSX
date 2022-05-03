import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import Home from '../pages/home';
import { Memo } from '../models';
import { RootState } from '../reducers';
import {
  FetchMemoListAction,
  FetchDeletedMemoListAction,
  fetchMemoList,
  fetchDeletedMemoList,
} from '../actions';

type Props = {
  memos: Memo[];
  deletedMemos: Memo[];
  apiCalling: boolean;
  fetchMemoList(): FetchMemoListAction;
  fetchDeletedMemoList(): FetchDeletedMemoListAction;
};

const HomeContainer = ({
  memos,
  deletedMemos,
  apiCalling,
  fetchMemoList,
  fetchDeletedMemoList,
}: Props) => {
  useEffect(() => {
    fetchMemoList();
    fetchDeletedMemoList();
  }, [fetchDeletedMemoList, fetchMemoList]);

  return (
    <Home memos={memos} deletedMemos={deletedMemos} apiCalling={apiCalling} />
  );
};

const mapStateToProps = (state: RootState) => ({
  memos: state.memo.memos,
  deletedMemos: state.memo.deletedMemos,
  apiCalling: state.app.apiCalling,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ fetchMemoList, fetchDeletedMemoList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
