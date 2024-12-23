import React from 'react';
import { useParams } from 'react-router-dom';
import { useDevices } from '../../context/DeviceContext';  // Import the custom hook
import "./RoomDetails.css"

const RoomDetails = () => {
    const { name } = useParams();  // Get room name from URL parameters
    const { devices } = useDevices();  // Get devices state from context

    // Map room names to displayable labels
    const rooms = {
        LivingRoom: 'Living Room',
        Kitchen: 'Kitchen',
        Bedroom: 'Bedroom',
    };

    // Filter devices based on the room name
    const filteredDevices = devices.filter(device => device.rooms.includes(name));

    return (
        <div>
            <h1>{rooms[name]}</h1>
            <div className="device-list">
                {filteredDevices.map(device => (
                    <div key={device.id} className="device-item">
                        <h4>{device.title}</h4>
                        <img className='device' alt={device.title} src={device.pic}></img >
                        <p>Status: {device.isOn ? 'On' : 'Off'}</p> {/* Show the device status */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoomDetails;


