import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rooms from './components/Rooms/Rooms';
import Account from './components/Account/Account';
import RoomDetails from './components/RoomDetails/RoomDetails';
import Footer from './components/Footer/Footer';
import { DeviceProvider } from './context/DeviceContext';  // Import the DeviceProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DeviceProvider>  {/* Wrap your app with the DeviceProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/account" element={<Account />} />
          <Route
            path="/rooms/:name"
            element={<RoomDetails />}
          />
        </Routes>
        <Footer />
      </Router>
    </DeviceProvider>
  </React.StrictMode>
);


