import React from 'react';
import { Outlet } from 'react-router-dom';
import Nbar from './Nbar'
import { Provider } from 'react-redux';
import store from '../store/store'

export default function RootLayout() {
  return (
    <>
    <Provider store={store}>
      <Nbar/>
      <main>
        <Outlet/>
      </main>
      </Provider>
    </>
  )
}
