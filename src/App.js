import { useState } from 'react';
import {
  Header,
  MainContent,
  Footer
} from './components';
import './App.css';

const App = () => {
  const [currentNav, setCurrentNav] = useState("About Me");

  return (
    <div>
      <Header currentNav={currentNav} setCurrentNav={setCurrentNav} />
      <MainContent currentNav={currentNav} />
      <Footer />
    </div>
  );
}

export default App;
