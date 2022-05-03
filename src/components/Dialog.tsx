import React from 'react';
import Button from './Button';
import { Dialog as DialogModel } from '../models';
import { CancelDialogAction, ConfirmDialogAction } from '../actions';

type Props = {
  dialog?: DialogModel;
  cancelDialog(): CancelDialogAction;
  confirmDialog(): ConfirmDialogAction;
};

const Dialog = ({ dialog, cancelDialog, confirmDialog }: Props) => {
  if (!dialog) return null;
  return (
    <>
      <div
        style={{
          position: 'fixed',
          background: 'rgba(0,0,0,0.8)',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}
      />
      <div
        style={{
          position: 'relative',
          width: '300px',
          top: '30%',
          margin: '0 auto',
          border: 'solid 1px #ddd',
          borderRadius: '4px',
          padding: '30px 20px 10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          background: '#fff',
        }}
      >
        <div
          style={{
            marginBottom: '20px',
          }}
        >
          {dialog.text}
        </div>
        <div
          style={{
            textAlign: 'right',
          }}
        >
          {dialog.type === 'confirm' && (
            <Button onClick={cancelDialog}>Cancel</Button>
          )}
          <Button onClick={confirmDialog} primary>
            Confirm
          </Button>
        </div>
      </div>
    </>
  );
};

export default Dialog;
