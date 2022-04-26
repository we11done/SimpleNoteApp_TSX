import React, { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Memo } from '../../models';
import { fetchMemo, restoreMemo } from '../../apis';
import Button from '../../components/Button';
import DateString from '../../components/DateString';

type RemoveMemoParam = {
  id: string;
};

const RemovedMemo = () => {
  const [memo, setMemo] = useState<Memo | undefined>(undefined);
  const { id } = useParams<RemoveMemoParam>();
  const [restored, setRestored] = useState<boolean>(false);

  const onRestore = () => {
    const memoId = parseInt(id || '0', 10);
    restoreMemo(memoId);
    setRestored(true);
  };

  useEffect(() => {
    const memoId = parseInt(id || '0', 10);
    setMemo(fetchMemo(memoId));
  }, [id]);

  if (restored) {
    return <Navigate to={`/trash`} />;
  }

  return memo ? (
    <>
      <Button onClick={onRestore}>Restore</Button>
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

export default RemovedMemo;
