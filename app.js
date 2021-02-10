// console.log("conectado");



// Realizamos la peticion fecth
var verPaises = async () =>{
  var api = await fetch("https://restcountries.eu/rest/v2/lang/es");
  const pais = await api.json();
  console.log(pais);

  var contenedor = document.getElementById("MainContent");
  contenedor.innerHTML = '';
  
  for( let i in pais){        
      contenedor.innerHTML +=  ("<div class='item_Content'><div class='title'><a href='#' data-name='" + pais[i].name +"' onclick=abrirModal()><div> <i class='fas fa-globe-americas'></i> </div>"  + pais[i].name + " </a></div><div class='text'><i class='fas fa-map-marked'></i> <strong>Capital </strong> : "  + pais[i].capital + " </div><div class='text'> <i class='fas fa-users'></i> <strong> Población Actual </strong>: "  + pais[i].population + " </div></div>");       
  }  
}

verPaises();