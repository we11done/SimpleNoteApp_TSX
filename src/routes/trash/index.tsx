import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RemovedMemo from '../../pages/trash/RemovedMemo';
const TrashRouter = () => {
  const RenderEmptyTrash = () => <div>Trash can is empty.</div>;
  return (
    <Routes>
      <Route path={`trash/`} element={<RenderEmptyTrash />} />
      <Route path={`:id`} element={<RemovedMemo />} />
    </Routes>
  );
};

export default TrashRouter;
