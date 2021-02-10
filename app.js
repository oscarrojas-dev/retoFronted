// console.log("conectado");

// Realizamos la peticion fecth
var verPaises = async () =>{
  var api = await fetch("https://restcountries.eu/rest/v2/lang/es");
  const pais = await api.json();
  console.log(pais);

  var contenedor = document.getElementById("MainContent");
  contenedor.innerHTML = '';
  
  for( let i in pais){        
      contenedor.innerHTML +=  ("<div class='item_Content'><div class='title'><a href='#' data-name=''>"  + pais[i].name + " </a></div><div class=''> Capital : "  + pais[i].capital + " </div><div class=''> Población Actual : "  + pais[i].population + " </div></div>");       
  }  
}

verPaises();