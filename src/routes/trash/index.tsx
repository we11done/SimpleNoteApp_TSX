import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RemovedMemo from '../../containers/RemovedMemo';
import RemovedMemoList from '../../containers/RemovedMemoList';

const TrashRouter = () => {
  return (
    <Routes>
      <Route path={`trash/`} element={<RemovedMemoList />} />
      <Route path={`:id`} element={<RemovedMemo />} />
    </Routes>
  );
};

export default TrashRouter;
