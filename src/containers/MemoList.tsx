import React, { useEffect } from 'react';
import { Memo } from '../models';
import { FetchMemoListAction, fetchMemoList } from '../actions';
import { connect } from 'react-redux';
import { RootState } from '../reducers';
import { bindActionCreators, Dispatch } from 'redux';
import MemoList from '../pages/memo/MemoList';

type Props = {
  apiCalling: boolean;
  memos: Memo[];
  fetchMemoList(): FetchMemoListAction;
};

const MemoListContainer = ({ memos, fetchMemoList, apiCalling }: Props) => {
  useEffect(() => {
    fetchMemoList();
  }, [fetchMemoList]);

  return <MemoList memos={memos} apiCalling={apiCalling} />;
};

const mapStateToProps = (state: RootState) => ({
  memos: state.memo.memos,
  apiCalling: state.app.apiCalling,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ fetchMemoList }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MemoListContainer);
