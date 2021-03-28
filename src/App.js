import { useState } from 'react';
import {
  Header,
  MainContent,
  Footer,
  Popover
} from './components';
import './App.css';

const App = () => {
  const [currentNav, setCurrentNav] = useState("About Me");
  const [showPopover, setShowPopover] = useState(false);

  const resumeDownload = () => {
    setShowPopover(true);
  }

  const proceed = () => {
    setShowPopover(false);
    var link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + "/assets/resume.pdf";
    link.download = 'resume.pdf';
    link.dispatchEvent(new MouseEvent('click'));
  }

  return (
    <>
      <div>
        <Header currentNav={currentNav} setCurrentNav={setCurrentNav} resumeDownload={resumeDownload} />
        <MainContent currentNav={currentNav} />
        <Footer />
      </div>
      {showPopover && <Popover proceed={proceed} setShowPopover={setShowPopover} />}
    </>
  );
}

export default App;
