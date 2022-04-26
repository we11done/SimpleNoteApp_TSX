import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddMemo from '../../containers/AddMemo';
import Memo from '../../containers/Memo';

const MemoRouter = () => {
  return (
    <Routes>
      <Route path={`add`} element={<AddMemo />} />
      <Route path={`:id`} element={<Memo />} />
    </Routes>
  );
};

export default MemoRouter;
