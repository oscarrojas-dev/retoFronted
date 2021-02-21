// console.log("conectado");

// Realizamos la peticion fecth
var verPaises = async () =>{
  var api = await fetch("https://restcountries.eu/rest/v2/lang/es");
  const pais = await api.json();

  var contenedor = document.getElementById("MainContent");
  contenedor.innerHTML = '';
  modal = document.getElementById("modal");
  modal.innerHTML = "";
   
  // insertamos los paise en el id MainContent
  pais.forEach((el, index) => {
    contenedor.innerHTML +=  (`
    <div class="item_Content" >
      <div class='title'>
        <a href='#' data-name="${el.name}" id="${index}" onclick=abrirModal()> 
        <div><i class='fas fa-globe-americas'></i></div> ${el.name} </a>
      </div>
      <div class='text'>
        <i class='fas fa-map-marked'></i> <strong>Capital </strong> : "${el.capital}"
      </div>
      <div class='text'> 
        <i class='fas fa-users'></i> <strong> Población Actual </strong>: ${el.population}
      </div>
    </div>`);
    
  });

  // Insertamos datos a ventana modal
  pais.forEach((el, index) =>{
    modal.innerHTML += `
      <div class="body-modal">				
			  <h2 id="pais ${index}">${el.name} </h2><hr>
        <div class="inner-modal">					
          <span class="" id="capital">Capital : ${el.capital}</span>	
          <span class="" id="poblacion">Pobalcion : ${el.population}</span>			
        </div>			
			  <a href="#" class="btncerrar" onclick="cerraModal()"> Cerrar</a>	
	    </div>`;
  })
}

// llamar a la funcion
verPaises();

// Abrir modal
function abrirModal(){   
  modal.style.display = "flex";
}

// cerrar modal
function cerraModal(){   
  modal.style.display = "none";
}