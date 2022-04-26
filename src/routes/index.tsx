import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Memo from '../pages/memo';
import Trash from '../pages/trash';

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
