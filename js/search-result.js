document.addEventListener("DOMContentLoaded", function(){

let load = document.querySelector(".main_load")
let main = document.querySelector(".main_res")

load.style.display = "none"
main.style.display = "block"


let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let resulBusqueda = queryStringObj.get("busqueda");

let textoBusqueda = document.querySelector("#texto-busqueda");
textoBusqueda.innerText =  `Resultado de búsqueda: ${resulBusqueda}`;

let api_key = "378786c706182646715863ed0e6d66cc";
let urlBusqueda = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${resulBusqueda}`;

function contenerIds() {
    let divs = document.querySelectorAll(".pelicula");
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("click", function() {
            let movie_id = divs[i].querySelector('i').id;
            let storedIds = JSON.parse(localStorage.getItem("ids")) || [];
            if (!storedIds.includes(movie_id)) {
                storedIds.push(movie_id);
                localStorage.setItem("ids", JSON.stringify(storedIds));
            }
        });
    }
    console.log(localStorage.getItem("ids"));
}

fetch(urlBusqueda)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let results = data.results;
        let fotos = ``;
        let div = document.querySelector("#resultados-busqueda");

        for (let i = 0; i<6; i++){
            let movie_id = results[i].id;
            let movie_title = results[i].title;
            let fecha = results[i].release_date;
            let posterPath = results[i].poster_path;
            let poster = "https://image.tmdb.org/t/p/w200" + posterPath;
            
            fotos += `
                <div class ="portada"> 
                    <div class="pelicula">
                        <a href="./detail-movie.html" class="addPic"><img class="fotos" src=${poster} alt="${movie_title}"></a>
                        <div class="titfav">
                            <h4 class="addTitle">${movie_title}</h4>
                            <button class="favorite-button">
                                <i id="${movie_id}" class="fa-regular fa-heart" style="color: #ffffff;"></i>
                            </button>
                        </div>
                        <p class="addDate">Fecha de estreno: ${fecha}</p>
                    </div>    
                </div>
                `;
            }
                div.innerHTML = fotos;
                contenerIds()
    })

    .catch(function (error) {
        console.log("Error al obtener datos de películas: " + error);
    });
})
