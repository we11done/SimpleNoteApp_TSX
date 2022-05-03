import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { Navigate } from 'react-router-dom';
import { addMemo, AddMemoAction } from '../actions';
import { RootState } from '../reducers';
import { Memo } from '../models';
import AddMemo from '../pages/memo/NewMemo';
type Props = {
  apiCalling: boolean;
  addMemo(memo: Memo): AddMemoAction;
};

const AddMemoContainer = ({ addMemo, apiCalling }: Props) => {
  const [saved, setSaved] = useState<boolean>(false);

  const handleClickSave = (input: string) => {
    const content = input.trim();
    if (!content) return;
    addMemo({ content });
    setSaved(true);
  };

  if (saved) return <Navigate to='/memo' />;

  return <AddMemo handleClickSave={handleClickSave} apiCalling={apiCalling} />;
};

const mapStateToProps = (state: RootState) => ({
  apiCalling: state.app.apiCalling,
});

const mapDispatchToProps = (dispath: Dispatch) =>
  bindActionCreators({ addMemo }, dispath);

export default connect(mapStateToProps, mapDispatchToProps)(AddMemoContainer);
