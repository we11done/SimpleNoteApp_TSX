import React, { useEffect } from 'react';
import { Memo } from '../models';
import * as api from '../apis';
import { FetchMemoListAction, fetchMemoList } from '../actions';
import { connect } from 'react-redux';
import { RootState } from '../reducers';
import { bindActionCreators, Dispatch } from 'redux';
import MemoList from '../pages/memo/MemoList';

type Props = {
  memos: Memo[];
  fetchMemoList(memos: Memo[]): FetchMemoListAction;
};

const MemoListContainer = ({ memos, fetchMemoList }: Props) => {
  useEffect(() => {
    fetchMemoList(api.fetchMemoList());
  }, [fetchMemoList]);

  return <MemoList memos={memos} />;
};

const mapStateToProps = (state: RootState) => ({ memos: state.memo.memos });

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ fetchMemoList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MemoListContainer);
