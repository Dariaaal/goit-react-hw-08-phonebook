import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './user/Navigation/Navigation';
import { CircularProgress } from '@mui/material';

export default function Layout() {
  return (
    <div>
      <header><Navigation/></header>
      <Suspense fallback={<CircularProgress />}>
      <Outlet />
      </Suspense>
    </div>
  );
}