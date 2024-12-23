import React, { useState } from 'react';
import './ToggleButton.css';

function ToggleButton() {
    const [isOn, setIsOn] = useState(false);  // Local state to track "On" or "Off"

    const handleToggle = () => {
        setIsOn(!isOn);  // Toggle the state between true and false
    };

    return (
        <div className="toggle-container">
            <div
                className={`toggle-button ${isOn ? 'active' : ''}`}
                onClick={handleToggle}
            >
                <div className="toggle-slider"></div>
            </div>
            <span className="toggle-label">{isOn ? 'On' : 'Off'}</span>
        </div>
    );
}

export default ToggleButton;
