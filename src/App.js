import React from 'react';
import './App.css';
import ActiveButtons from './components/ActiveButtons/ActiveButtons';
import Footer from './components/Footer/Footer';
import FrequentlyUsed from './components/FrequentlyUsed/FrequentlyUsed';
import Scenes from './components/Scenes/Scenes';
import { useDevices } from './context/DeviceContext';  // Import the custom hook

function App() {
  const { devices, handleToggle } = useDevices();  // Get devices and handleToggle from context

  return (
    <>
      <div className="header">
        <h1>My Home</h1>
        <button className="btn">+</button>
      </div>
      <ActiveButtons />
      <Scenes />
      <FrequentlyUsed devices={devices} handleToggle={handleToggle} />
      {/* <Footer /> */}
    </>
  );
}

export default App;


