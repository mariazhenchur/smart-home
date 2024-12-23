import React from 'react';
import './ActiveButtons.css';
import { useDevices } from '../../context/DeviceContext';  // Import the custom hook

const ActiveButtons = () => {
    const { devices } = useDevices();  // Get devices from context

    // Filter the devices that are "on"
    const activeDevices = devices.filter(device => device.isOn);

    return (
        <>
            <div className="button-container">
                {/* Check if there are active devices */}
                {activeDevices.length === 0 ? (
                    <>
                    <button className='main-btn paragraph'>No devices are on at this moment <br /> :)</button>
                    </>
                ) : (
                    // Display a button for each active device
                    activeDevices.map(device => (
                        <button className='main-btn' key={device.id}>
                            {device.title} <br />
                            {device.rooms.length} Active
                        </button>
                    ))
                )}
            </div>
        </>
    );
};

export default ActiveButtons;

