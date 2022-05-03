import React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { RootState } from '../reducers';
import { Dialog as DialogModel } from '../models';
import Dialog from '../components/Dialog';
import {
  CancelDialogAction,
  ConfirmDialogAction,
  cancelDialog,
  confirmDialog,
} from '../actions';

type Props = {
  dialog?: DialogModel;
  cancelDialog(): CancelDialogAction;
  confirmDialog(): ConfirmDialogAction;
};

const DialogContainer = ({ dialog, cancelDialog, confirmDialog }: Props) => (
  <Dialog
    dialog={dialog}
    cancelDialog={cancelDialog}
    confirmDialog={confirmDialog}
  />
);

const mapStateToProps = (state: RootState) => ({ dialog: state.app.dialog });

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ cancelDialog, confirmDialog }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DialogContainer);
