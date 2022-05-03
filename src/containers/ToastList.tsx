import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../reducers';
import ToastList from '../components/ToastList';
import { Toast } from '../models';

type Props = {
  toasts: Toast[];
};

const ToastListContainer = ({ toasts }: Props) => {
  return <ToastList toasts={toasts} />;
};

const mapStateToProps = (state: RootState) => ({
  toasts: state.app.toasts,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ToastListContainer);
