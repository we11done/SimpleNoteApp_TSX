import React, { useState } from 'react';
import * as api from '../apis';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { Navigate } from 'react-router-dom';
import { addMemo, AddMemoAction } from '../actions';
import { Memo } from '../models';
import AddMemo from '../pages/memo/NewMemo';
type Props = {
  addMemo(memo: Memo): AddMemoAction;
};

const AddMemoContainer = ({ addMemo }: Props) => {
  const [saved, setSaved] = useState<boolean>(false);

  const handleClickSave = (input: string) => {
    const content = input.trim();
    if (!content) return;
    const memo = api.addMemo({ content });
    addMemo(memo);
    setSaved(true);
  };

  if (saved) return <Navigate to='/memo' />;

  return <AddMemo handleClickSave={handleClickSave} />;
};

const mapDispatchToProps = (dispath: Dispatch) =>
  bindActionCreators({ addMemo }, dispath);

export default connect(null, mapDispatchToProps)(AddMemoContainer);
