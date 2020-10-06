import React, { memo } from 'react';
import { Provider } from "react-redux";
import { renderRoutes } from 'react-router-config';

import routes from '@/router'
import store from '@/store'

import ZHAppHeader from "@/components/app-header";
import ZHAppFooter from "@/components/app-footer";
import ZHPlayerBar from "@/pages/player/app-player-bar";
import { HashRouter } from 'react-router-dom';

export default memo(function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <ZHAppHeader />
        {renderRoutes(routes)}
        <ZHAppFooter />
        <ZHPlayerBar />
      </HashRouter>
    </Provider>
  )
})
