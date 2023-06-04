import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from '../components/Header/Header';
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const TweetsPage = lazy(() =>
  import('../pages/TweetsPage/TweetsPage')
);

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </>
  );
};


