import * as React from 'react';
import { RoutingComponent } from './common';
import { HeaderLayoutComponent } from './components';

function App() {
  return (
    <HeaderLayoutComponent>
      <RoutingComponent/>
    </HeaderLayoutComponent>
  );
}

export default App;
