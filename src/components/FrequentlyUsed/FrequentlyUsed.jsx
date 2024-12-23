import React from 'react';
import './FrequentlyUsed.css';
import { useDevices } from '../../context/DeviceContext';  // Import the custom hook

const FrequentlyUsed = () => {
    const { devices, toggleDevice } = useDevices();  // Get devices and toggleDevice from context

    console.log('Devices in FrequentlyUsed:', devices);  // Log devices to check its structure

    if (!Array.isArray(devices)) {
        console.error('Devices is not an array:', devices);
        return <p>Something went wrong. Devices data is not available.</p>;
    }

    return (
        <>
            <h2 className="title">Frequently Used</h2>
            <div className="freqall-container">
                {devices.map((device) => (
                    <div className="freq-container" key={device.id}>
                        <div>
                            <h4>{device.title}</h4>
                            <p>{device.description}</p>
                        </div>
                        <div className="toggle-container2">
                            <div
                                className={`toggle-button2 ${device.isOn ? 'active' : ''}`}
                                onClick={() => toggleDevice(device.id)}  
                            >
                                <div className="toggle-slider2"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default FrequentlyUsed;



