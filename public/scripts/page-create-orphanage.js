// Create Map
const map = L.map('mapid').setView([-22.2782196,-42.5473472], 16);

// Create and Add Tile Layer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create icon

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68]
});

//Marker

let marker;

//Create and Add markers

map.on('click', (event) => {

    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //Remove icon

    marker && map.removeLayer(marker);

    // Add icon Layer

    marker =L.marker([lat,lng], {icon})
    .addTo(map);
})

// Create Photo Field

function addPhotoField(){

    // pegar o container de fotos #images
    const container = document.querySelector('#images')
    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // realizar o clone da ultima img add
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //Verificar se o campo esta vazio, se sim, não adicionar aos containers de imagem
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }
    // Limpar campo antes de add
    input.value = ""
    // Adicionar o clone ao container de #imagens
    container.appendChild(newFieldContainer)
    
}
    //Excluir o campo
    function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2)
    {
        //Limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }
    //Deletar o campo
    span.parentNode.remove()
}

    // Troca do Sim e Não
    function toggleSelect(event){

        //Retirar a classe .active nos dois botões
        document.querySelectorAll('.button-select button')
        .forEach(button => button.classList.remove('active'))

        //Colocar a classe .active em algum botão
        const button = event.currentTarget
        button.classList.add('active')

        //Atualizar hidden com valor selecionado
        const input = document.querySelector('[name="open_on_weekends"]')

        //Atualizar se sim ou não
        input.value = button.dataset.value 
                  
    }

function validate(event){
    
    const verify = document.querySelector('[name="lat"]')

    if(verify.value == ''){
        event.preventDefault()
        alert('Selecione um ponto no mapa!')
    }  
    
}