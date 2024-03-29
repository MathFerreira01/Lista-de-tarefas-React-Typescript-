import React from "react";

import Main from "./views/Main";
import Menu from "./components/Sidebar";
import GlobalStyle from "./styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <div>
      <Menu />
      <Main />
      <GlobalStyle />
    </div>
  );
};

export default App;
