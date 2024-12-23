import air from "./images/air.jpg";
import fan from "./images/fan.jpg";
import humid from "./images/humid.jpg";
import light from "./images/light.jpeg";
import smartTV from "./images/smartTV.jpg";
import speaker from "./images/speaker.jpg";
import vacuum from "./images/vacuum.jpeg";

export const deviceData = [
    { id: 1, title: 'Smart TV', pic: smartTV, description: 'Living Room', isOn: false, rooms: ['LivingRoom'] },
    { id: 2, title: 'Speaker', pic: speaker, description: 'Living Room', isOn: false, rooms: ['LivingRoom'] },
    { id: 3, title: 'Smart Light', pic: light, description: 'Living Room', isOn: false, rooms: ['LivingRoom'] },
    { id: 4, title: 'Blinds', pic: air, description: 'Bedroom', isOn: false, rooms: ['Bedroom'] },
    { id: 5, title: 'Humidifier', pic: humid, description: 'Bedroom', isOn: false, rooms: ['Bedroom'] },
    { id: 6, title: 'Smart Vacuum', pic: vacuum, description: 'Kitchen', isOn: false, rooms: ['Kitchen'] },
    { id: 7, title: 'Fan', pic: fan, description: 'Bedroom', isOn: false, rooms: ['Bedroom'] },
    { id: 8, title: 'Air Conditioner', pic: air, description: 'Bedroom', isOn: false, rooms: ['Bedroom'] },
];
