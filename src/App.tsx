import React from 'react';
import CardOverlay from './components/CardOverlay';
import EditTask from './components/EditTask';
import List from './components/List';
import Menu from './components/Menu';
import NewTask from './components/NewTask';
import GlobalStyle from './styles/GlobalStyles';

const App: React.FC = () => {
  return (
    <div>
      <Menu/>
      <List/>
      {/*<NewTask/>
      <EditTask/>
     {/* <CardOverlay/>*/}
  <GlobalStyle/>
    </div>
  )
}

export default App;