import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './user/Navigation';

export default function Layout() {
  return (
    <div>
      <header><Navigation/></header>
      <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
      </Suspense>
    </div>
  );
}