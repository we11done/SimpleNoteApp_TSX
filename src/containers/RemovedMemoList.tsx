import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import * as api from '../apis';
import { fetchDeletedMemoList, FetchDeletedMemoListAction } from '../actions';
import { Memo } from '../models';
import { useLocation } from 'react-router-dom';
import { RootState } from '../reducers';
import RemovedMemoList from '../pages/trash/RemovedMemoList';

type Props = {
  deletedMemos: Memo[];
  fetchDeletedMemoList(memos: Memo[]): FetchDeletedMemoListAction;
};

const RemovedMemoListContainer = ({
  deletedMemos,
  fetchDeletedMemoList,
}: Props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const deletedMemos = api.fetchDeletedMemoList();
    fetchDeletedMemoList(deletedMemos);
  }, [fetchDeletedMemoList, pathname]);

  return <RemovedMemoList deletedMemos={deletedMemos} />;
};

const mapStateToProps = (state: RootState) => ({
  deletedMemos: state.memo.deletedMemos,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ fetchDeletedMemoList }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemovedMemoListContainer);
