const cardList = document.querySelector("#cardList");
let URL = "https://pokeapi.co/api/v2/pokemon/";
const navButtonSelected = document.querySelectorAll(".btn-header");

// VENTANA MODAL

const modal = document.getElementById("modalContainer");
modal.style.display = "none";
modal_isShowing = false;


for (let i = 1; i <= 151; i++) {
  fetch(URL + i)
    .then((response) => response.json())
    .then((data) => listarPokemons(data));
}

function listarPokemons(data) {

    let types = data.types.map(type => 
        `
        <p class="${type.type.name} rounded">${type.type.name}</p>
        `);
    types = types.join('');

    let dataId = data.id.toString();

    if(dataId.length == 1){
        dataId = "00" + dataId;
    }
    
    if (dataId.length == 2){
        dataId = "0" + dataId;
    }

    const div = document.createElement('div');
    div.classList.add('card');
    div.dataset.id = data.id; // Guardar el ID del Pokémon en un atributo data
    div.innerHTML = `
        <p class="text-back">#${dataId}</p>
        <div class="card-img">
            <img src="${data.sprites.other["official-artwork"].front_default}" alt="" height="180px" width="180px">
        </div>
        <div class="card-info">
            <p class="white card-id rounded">#${dataId}</p>
            <h2 class="card-name">${data.name}</h2>
        </div>
        <div class="card-type">
            ${types}
        </div>
        <div class="card-statistics">
            <p class="white rounded">${data.height}M</p>
            <p class="white rounded">${data.weight}KG</p>
        </div>
    `;

    div.addEventListener('click', function() {
        const pokemonId = this.dataset.id; // Obtener el ID del Pokémon
        fetch(URL + pokemonId)
            .then((response) => response.json())
            .then((data) => {
                mostrarModal(data);
            });
    });

    cardList.append(div);
}

navButtonSelected.forEach(boton => boton.addEventListener("click", (event) =>{
    const botonId = event.currentTarget.id;

    cardList.innerHTML = "";

    for (let i = 1; i <= 151; i++) {
        fetch(URL + i)
          .then((response) => response.json())
          .then(data => {
            const tipos = data.types.map(type => type.type.name);

            if(botonId === "ver-todos"){
                listarPokemons(data);
            }

            if (tipos.some(tipo => tipo.includes(botonId))){
                listarPokemons(data);
            }
          });
      }
}));

function mostrarModal(data) {

    let types = data.types.map(type => 
        `
        <p class="${type.type.name} rounded">${type.type.name}</p>
        `);
    types = types.join('');

    console.log(types);

    let dataId = data.id.toString();

    if(dataId.length == 1){
        dataId = "00" + dataId;
    }
    
    if (dataId.length == 2){
        dataId = "0" + dataId;
    }


    const modal = document.querySelector('.modal-container');
    modal.innerHTML = `
        <div class="box">
            <div class="modal-img">
                <img src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}">
            </div>
            <div class="modal-info">
                <h2>${data.name}</h2>
                <div class="custom-hr"></div>
                <h3>Descripción</h3>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. lorem Lorem ipsum dolor, 
                sit amet consectetur adipisicing elit. loremLorem ipsum dolor, sit amet consectetur 
                adipisicing elit. loremLorem ipsum dolor, sit amet consectetur adipisicing elit. lorem

                </p>
                <div class="modal-general-information"></div>
                <div class="modal-pokemon-id">
                    <h3>Número de pokedex</h3>
                    <p class="gray rounded">#${dataId}</p>
                </div>
                <div class="modal-type">
                    <h3>Tipos</h3>
                    ${types}
                </div>
                <div class="modal-statistics">
                    <h3>Estadísticas</h3>
                    <p class="gray rounded">${data.weight}KG</p>
                    <p class="gray rounded">${data.height}M</p>
                </div>
            </div>
        </div>
        <div class="close" id="closeModal">Cerrar</div>
    `;
    modal.style.display = "block";

    const closeModal = document.getElementById("closeModal");
        closeModal.addEventListener('click', function(){
    modal.style.display = "none";
    });
}