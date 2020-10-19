const options = {
    dragging: false,
    touchzoom:false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false,
    keyboard:false
};

// Get Values from html

const lat = document.querySelector('span[data-lat]').dataset.lat;
const lng = document.querySelector('span[data-lng]').dataset.lng;

// Create Map
const map = L.map('mapid', options).setView([lat,lng], 16);

// Create and Add Tile Layer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})

//Create and Add Marker
    L.marker([lat, lng], {icon})
    .addTo(map)

// Image Gallery

function selectImage(event){
    const button = event.currentTarget
    
    //Remover Todas as Classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }
    //Selecionar a imagem clicada

    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    //Atualizar o Container de Imagem
    imageContainer.src = image.src

    //Adicionar a Classe .active para o botão clicado
    button.classList.add('active')
}