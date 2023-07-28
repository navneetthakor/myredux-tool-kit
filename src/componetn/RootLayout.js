import React from 'react';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div>
      <h1>Navigetion</h1>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}