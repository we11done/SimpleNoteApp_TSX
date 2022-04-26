import React from 'react';
import { Memo } from '../../models';
import Button from '../../components/Button';
import DateString from '../../components/DateString';

type RemoveMemoProps = {
  memo: Memo;
  onRestore(id: number): void;
};

const RemovedMemo = ({ memo, onRestore }: RemoveMemoProps) => {
  return memo ? (
    <>
      <Button
        onClick={() => {
          onRestore(memo.id!);
        }}
      >
        Restore
      </Button>
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
