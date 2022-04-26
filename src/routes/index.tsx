import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Memo from '../containers/MemoList';
import Trash from '../containers/RemovedMemoList';

const RootRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='memo/*' element={<Memo />} />
      <Route path='trash/*' element={<Trash />} />
    </Routes>
  </BrowserRouter>
);

export default RootRouter;
