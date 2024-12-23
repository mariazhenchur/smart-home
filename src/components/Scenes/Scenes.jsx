import React from 'react';
import ToggleButton from '../ToggleButton/ToggleButton';
import './Scenes.css';
import { IoSunny } from 'react-icons/io5';
import { IoIosMoon } from 'react-icons/io';
import { useDevices } from '../../context/DeviceContext';  // Import the custom hook

const Scenes = () => {
    const { setScene } = useDevices();  // Use the setScene function from the context

    return (
        <>
            <h2 className="title">Scenes</h2>
            <div className="scene-container" onClick={() => setScene('morning')}>
                <IoSunny className="icon" />
                <h3>Morning scene</h3>
                <ToggleButton />
            </div>
            <div className="scene-container" onClick={() => setScene('night')}>
                <IoIosMoon className="icon" />
                <h3>Night scene</h3>
                <ToggleButton />
            </div>
        </>
    );
};

export default Scenes;

