import React from 'react'
import './Footer.css'
import { useNavigate } from 'react-router';

const Footer = () => {

  const navigate = useNavigate();

  const handleNavigateRoom = () => {
    navigate('/rooms');
  }

  const handleNavigateHome = () => {
    navigate('/');
  }

  const handleNavigateAccount = () => {
    navigate('/account');
  }



  return (
    <>
    <div className='footer-container'>
        <button onClick={handleNavigateHome} className='footer-btn'>Home</button>
        <button onClick={handleNavigateRoom} className='footer-btn'>Rooms</button>
        <button onClick={handleNavigateAccount} className='footer-btn'>Account</button>
    </div>
    </>
  )
}

export default Footer