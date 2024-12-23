import React from 'react';
import './Rooms.css';
import livingRoom from '../../images/living-room.jpeg';
import bedroom from '../../images/bedroom.jpg';
import kitchen from '../../images/kitchen.jpg';
import { useNavigate } from 'react-router';
import { useDevices } from '../../context/DeviceContext';  // Import the custom hook to access devices data

const Rooms = () => {
    const navigate = useNavigate();
    const { devices } = useDevices();  // Get devices from context

    // Function to count the devices that are on in a specific room
    const countDevicesOn = (room) => {
        return devices.filter(device => device.rooms.includes(room) && device.isOn).length;
    };

    // Room data for easy rendering
    const rooms = [
        { name: 'LivingRoom', image: livingRoom },
        { name: 'Bedroom', image: bedroom },
        { name: 'Kitchen', image: kitchen },
    ];

    return (
        <>
            <div className="header">
                <h1>My Rooms</h1>
                <button className="btn">+</button>
            </div>
            {rooms.map((room) => {
                const devicesInRoom = countDevicesOn(room.name);
                const totalDevicesInRoom = devices.filter(device => device.rooms.includes(room.name)).length;

                return (
                    <div className="room" key={room.name} onClick={() => navigate(`/rooms/${room.name}`)}>
                        <img src={room.image} alt={room.name} />
                        <div className="room-details">
                            <p className="room-detail">{room.name}</p>
                            <p className="room-detail">{devicesInRoom}/{totalDevicesInRoom} is on</p>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Rooms;
