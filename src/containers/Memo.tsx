import React, { useState, useEffect } from 'react';
import * as api from '../apis';
import { useParams, Navigate } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { Memo } from '../models';
import {
  fetchMemo,
  deleteMemo,
  FetchMemoAction,
  DeleteMemoAction,
} from '../actions';
import { RootState } from '../reducers';
import MemoPage from '../pages/memo/Memo';

type Props = {
  fetchMemo(memo: Memo): FetchMemoAction;
  deleteMemo(id: number): DeleteMemoAction;
};

type MemoParam = {
  id: string;
};

const MemoContainer = ({ fetchMemo, deleteMemo }: Props) => {
  const [isMemoDeleted, setMemoDeleted] = useState<boolean>(false);
  const { id } = useParams<MemoParam>();
  const memo = useSelector((state: RootState) => {
    if (!id) return;
    const memoId = parseInt(id, 10);
    return state.memo.memos.find(memo => memo.id === memoId);
  });

  useEffect(() => {
    if (!id) return;
    const memoId = parseInt(id, 10);
    const memo = api.fetchMemo(memoId);
    if (memo) fetchMemo(memo);
  }, [id, fetchMemo]);

  const onDeleteMemo = (id: number) => {
    api.deleteMemo(id);
    deleteMemo(id);
    setMemoDeleted(true);
  };

  if (isMemoDeleted) return <Navigate to='/memo' />;
  if (!memo) return <p>404: Not Found</p>;
  return <MemoPage memo={memo} onDeleteMemo={onDeleteMemo} />;
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ fetchMemo, deleteMemo }, dispatch);

export default connect(null, mapDispatchToProps)(MemoContainer);
