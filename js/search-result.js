let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let resulBusqueda = queryStringObj.get("busqueda");

let textoBusqueda = document.querySelector("#texto-busqueda");
textoBusqueda.innerText =  `Resultado de búsqueda: ${resulBusqueda}`;

let api_key = "378786c706182646715863ed0e6d66cc";
let urlBusqueda = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${resulBusqueda}`;

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
    })

    .catch(function (error) {
        console.log("Error al obtener datos de películas: " + error);
    });

