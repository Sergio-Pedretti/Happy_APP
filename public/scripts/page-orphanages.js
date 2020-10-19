// Create Map
const map = L.map('mapid').setView([-22.2782196,-42.5473472], 16);

// Create and Add Tile Layer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})

function addMarker({id, name, lat, lng}){
    
    //Create Popup Overlay
    const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}"> <img src = "/images/arrow-white.svg"> </a>`);

    //Create and Add Marker
    L.marker([lat,lng], {icon})
    .addTo(map)
    .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')

orphanagesSpan.forEach( span => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng,
    }
    addMarker(orphanage)
})

    