import React from 'react';

import List from './components/List';
import Menu from './components/Menu';
import GlobalStyle from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <div>
      <Menu/>
      <List name={''} description={''}/>
  <GlobalStyle/>
    </div>
  )
}

export default App;