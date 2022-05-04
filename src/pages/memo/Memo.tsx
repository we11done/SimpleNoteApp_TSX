import React from 'react';
import { Memo } from '../../models';
import Button from '../../components/Button';
import DateString from '../../components/DateString';

type MemoPageProps = {
  memo?: Memo;
  onDeleteMemo(id: number): void;
};

const MemoComponent = ({ memo, onDeleteMemo }: MemoPageProps) => {
  return memo ? (
    <>
      <Button onClick={() => onDeleteMemo(memo!.id!)}>Delete</Button>
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
          {memo!.createdAt && <DateString timestamp={memo!.createdAt} />}
        </div>
        <div>{memo!.content}</div>
      </div>
    </>
  ) : (
    <div
      style={{
        borderTop: '1px solid #ddd',
        paddingTop: '10px',
      }}
    >
      <div>Loading...</div>
    </div>
  );
};

export default MemoComponent;
