import React from 'react';
import { Outlet } from 'react-router-dom';
import Nbar from './Nbar'

export default function RootLayout() {
  return (
    <div>
      <Nbar/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}
