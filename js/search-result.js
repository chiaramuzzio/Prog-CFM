let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let resulBusqueda = queryStringObj.get("busqueda");

let textoBusqueda = document.querySelector("#texto-busqueda");
textoBusqueda.innerText =  `Resultado de búsqueda: ${resulBusqueda}`
