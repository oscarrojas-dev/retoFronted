// console.log("conectado");

// Realizamos la peticion fecth
var verPaises = async () =>{
  var api = await fetch("https://restcountries.eu/rest/v2/lang/es");
  const pais = await api.json();
  console.log(pais);

  var contenedor = document.getElementById("MainContent");
  contenedor.innerHTML = '';
  
  for( let i in pais){        
      contenedor.innerHTML +=  ("<div class='item_Content'><div class='title'> Pais : "  + pais[i].name+  "</div></div>");       
  }  
  //    contenedor.innerHTML +=  " Pais : " +  pais[i].name + " Capital : " +  pais[i].capital +  "Pais : " +  pais[i].population + "<br>";
}

verPaises();