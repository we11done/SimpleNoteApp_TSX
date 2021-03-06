import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import {
  fetchMemo,
  FetchMemoAction,
  restoreMemo,
  RestoreMemoAction,
} from '../actions';
import { Dispatch, bindActionCreators } from 'redux';
import { useParams, Navigate } from 'react-router-dom';
import { RootState } from '../reducers';
import RemoveMemo from '../pages/trash/RemovedMemo';

type Props = {
  fetchMemo(id: number): FetchMemoAction;
  restoreMemo(id: number): RestoreMemoAction;
};

type RemoveMemoParam = {
  id: string;
};

const RemovedMemoContainer = ({ fetchMemo, restoreMemo }: Props) => {
  const [restored, setRestored] = useState<boolean>(false);
  const { id } = useParams<RemoveMemoParam>();
  const memo = useSelector((state: RootState) => {
    if (!id) return;
    const memoId = parseInt(id, 10);
    return state.memo.deletedMemos.find(memo => memo.id === memoId);
  });

  useEffect(() => {
    if (!id) return;
    const memoId = parseInt(id, 10);
    if (!isNaN(memoId)) fetchMemo(memoId);
  }, [id, fetchMemo]);

  const onRestore = (id: number) => {
    restoreMemo(id);
    setRestored(true);
  };

  if (restored) return <Navigate to='/trash' />;
  if (!memo) return <p>404: Not Found</p>;
  return <RemoveMemo memo={memo} onRestore={onRestore} />;
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ fetchMemo, restoreMemo }, dispatch);

export default connect(null, mapDispatchToProps)(RemovedMemoContainer);
