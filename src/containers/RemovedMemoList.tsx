import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { fetchDeletedMemoList, FetchDeletedMemoListAction } from '../actions';
import { Memo } from '../models';
import { RootState } from '../reducers';
import RemovedMemoList from '../pages/trash/RemovedMemoList';

type Props = {
  apiCalling: boolean;
  deletedMemos: Memo[];
  fetchDeletedMemoList(): FetchDeletedMemoListAction;
};

const RemovedMemoListContainer = ({
  deletedMemos,
  fetchDeletedMemoList,
  apiCalling,
}: Props) => {
  useEffect(() => {
    fetchDeletedMemoList();
  }, [fetchDeletedMemoList]);

  return (
    <RemovedMemoList deletedMemos={deletedMemos} apiCalling={apiCalling} />
  );
};

const mapStateToProps = (state: RootState) => ({
  apiCalling: state.app.apiCalling,
  deletedMemos: state.memo.deletedMemos,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ fetchDeletedMemoList }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RemovedMemoListContainer);
