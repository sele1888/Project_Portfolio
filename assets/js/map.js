// Initialize the map at Addis Ababa City coordinates
var map = L.map('map').setView([9.03, 38.74], 13);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker for Addis AbabA City
L.marker([9.03, 38.74]).addTo(map)
    .bindPopup('Addis Ababa City - My Location')
    .openPopup();