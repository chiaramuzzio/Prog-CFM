let idRecuperado = localStorage.getItem("id");
idRecuperado = JSON.parse(idRecuperado)


let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let nombregeneropelicula = queryStringObj.get("boton-pelicula");
let nombregeneroserie = queryStringObj.get("boton-serie");
let api_key = "378786c706182646715863ed0e6d66cc"




console.log(idRecuperado)
console.log(nombregeneropelicula)
console.log(nombregeneroserie)


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
    .catch(function(error) {
    console.log("Error: " + error);
    })


}
