import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';

import routes from '@/router'

import ZHAppHeader from "@/components/app-header";
import ZHAppFooter from "@/components/app-footer";
import { HashRouter } from 'react-router-dom';

export default memo(function App() {
  return (
    <HashRouter>
      <ZHAppHeader />
      {renderRoutes(routes)}
      <ZHAppFooter />
    </HashRouter>
  )
})
