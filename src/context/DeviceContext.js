import React, { createContext, useState, useEffect, useContext } from 'react';
import { deviceData } from '../devices';  // Assuming you import the deviceData from deviceData.js

const DeviceContext = createContext();

export const DeviceProvider = ({ children }) => {
    const loadDevices = () => {
        const savedDevices = localStorage.getItem('devices');
        if (savedDevices) {
            try {
                const parsedDevices = JSON.parse(savedDevices);
                if (Array.isArray(parsedDevices)) {
                    return parsedDevices;
                } else {
                    console.error('Parsed devices is not an array:', parsedDevices);
                }
            } catch (e) {
                console.error('Error parsing saved devices:', e);
            }
        }
        return deviceData;
    };

    const [devices, setDevices] = useState(loadDevices);

    // Save the devices to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('devices', JSON.stringify(devices));
    }, [devices]);

    // Function to toggle a specific device
    const toggleDevice = (id) => {
        setDevices((prevDevices) =>
            prevDevices.map((device) =>
                device.id === id ? { ...device, isOn: !device.isOn } : device
            )
        );
    };

    // Function to set scene, morning or night
    const setScene = (scene) => {
        let updatedDevices = [...devices];
        if (scene === 'morning') {
            updatedDevices = updatedDevices.map(device => {
                if (device.title === 'Blinds' || device.title === 'Humidifier' || device.title === 'Fan') {
                    return { ...device, isOn: true };  // Turn on these devices for the morning scene
                } else {
                    return { ...device, isOn: false };  // Turn off other devices
                }
            });
        } else if (scene === 'night') {
            updatedDevices = updatedDevices.map(device => {
                if (device.title === 'Blinds' || device.title === 'Fan') {
                    return { ...device, isOn: true };  // Turn on these devices for the night scene
                } else {
                    return { ...device, isOn: false };  // Turn off other devices
                }
            });
        }
        setDevices(updatedDevices); // Update the devices state with the new scene
    };

    return (
        <DeviceContext.Provider value={{ devices, toggleDevice, setScene }}>
            {children}
        </DeviceContext.Provider>
    );
};

// Custom hook to use the DeviceContext
export const useDevices = () => {
    return useContext(DeviceContext);
};
