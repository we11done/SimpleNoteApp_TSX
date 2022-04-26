import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Memo } from '../../models';
import { fetchMemo, deleteMemo } from '../../apis';
import Button from '../../components/Button';
import DateString from '../../components/DateString';

type MemoParam = {
  id: string;
};

const MemoComponent = () => {
  const [memo, setMemo] = useState<Memo | undefined>(undefined);
  const { id } = useParams<MemoParam>();
  const [deleted, setDeleted] = useState<boolean>(false);

  const onDelete = () => {
    const memoId = parseInt(id || '0', 10);
    deleteMemo(memoId);
    setDeleted(true);
  };

  useEffect(() => {
    const memoId = parseInt(id || '0', 10);
    setMemo(fetchMemo(memoId));
  }, [id]);

  if (deleted) {
    return <Navigate to={'/memo'} />;
  }

  return memo ? (
    <>
      <Button onClick={onDelete}>Delete</Button>
      <div
        style={{
          borderTop: '1px solid #ddd',
          paddingTop: '10px',
        }}
      >
        <div
          style={{
            marginBottom: '15px',
          }}
        >
          {memo.createdAt && <DateString timestamp={memo.createdAt} />}
        </div>
        <div>{memo.content}</div>
      </div>
    </>
  ) : (
    <>Loading...</>
  );
};

export default MemoComponent;
