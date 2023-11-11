let idRecuperado = localStorage.getItem("id");
idRecuperado = JSON.parse(idRecuperado)


let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let nombregeneropelicula = queryStringObj.get("boton-pelicula");
let nombregeneroserie = queryStringObj.get("boton-serie");
let api_key = "378786c706182646715863ed0e6d66cc"

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
}

let titulogenero = document.querySelector("#nombre-genero")

if (nombregeneropelicula != null){
    titulogenero.innerHTML = nombregeneropelicula
    let detalleGenero = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&with_genres=${idRecuperado}`;

    fetch(detalleGenero)
    .then(function(response) {
    return response.json()
    })
    .then(function(data) {
        console.log(data);
        let results = data.results;
        let fotos = ``;
        let div = document.querySelector("#inner-genero");


        for (let i = 0; i<5; i++){
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
    .catch(function(error) {
    console.log("Error: " + error);
    })
}


else{
    titulogenero.innerHTML = nombregeneroserie
    let detalleGenero = `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}&with_genres=${idRecuperado}`;

    fetch(detalleGenero)
    .then(function(response) {
    return response.json()
    })
    .then(function(data) {
        console.log(data);
        let results = data.results;
        let fotos = ``;
        let div = document.querySelector("#inner-genero");


        for (let i = 0; i<5; i++){
            let serie_id = results[i].id;
            let serie_title = results[i].name;
            let fecha = results[i].first_air_date;
            let posterPath = results[i].poster_path;
            let poster = "https://image.tmdb.org/t/p/w200" + posterPath;
           
            fotos += `
                <div class ="portada">
                    <div class="pelicula">
                        <a href="./detail-serie.html" class="addPic"><img class="fotos" src=${poster} alt="${serie_title}"></a>
                        <div class="titfav">
                            <h4 class="addTitle">${serie_title}</h4>
                            <button class="favorite-button">
                                <i id="${serie_id}" class="fa-regular fa-heart" style="color: #ffffff;"></i>
                            </button>
                        </div>
                        <p class="addDate">Fecha de estreno: ${fecha}</p>
                    </div>    
                </div>
                `;
            }

            contenerIds()
                div.innerHTML = fotos;


    })

    .catch(function(error) {
    console.log("Error: " + error);
    })


}

