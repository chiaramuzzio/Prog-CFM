let api_key = "378786c706182646715863ed0e6d66cc"

let urlMejoresCalificadas = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`;
let urlPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
let urlSeriesPopulares = `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}`;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////////////////////

// function generarGuestSession() {
//     let guestSession = `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${api_key}`

//     return fetch(guestSession)
//       .then(response => response.json())
//       .then(function(data) {
//         console.log(data);
//         let guestSessionId = data.guest_session_id
//       })
//       .catch(function(error) {
//         console.log("Error: " + error);
//       })
//   }

// function agregarFavorito(movieId) {
//     const url = `https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=${api_key}&guest_session_id=d4f0377fc7914400d7fe13a2e1422e0c`;
  
//     const data = {
//       media_type: 'movie',
//       media_id: movieId,
//       favorite: true,
//     };
  
//     return fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     })
//       .then(response => response.json())
//       .then(result => {
//         console.log('Película agregada a favoritos:', result);
//       })
//       .catch(error => console.error('Error al agregar película a favoritos:', error));
//   }
  
// function eliminarDeFavoritos(movieId) {
//     const url = `https://api.themoviedb.org/3/account/{account_id}/favorite?api_key=${api_key}&guest_session_id=d4f0377fc7914400d7fe13a2e1422e0c}`;

//     const data = {
//         media_type: 'movie',
//         media_id: movieId,
//         favorite: false,
//     };

//     return fetch(url, {
//         method: 'POST',
//         headers: {
//         'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//     })
//         .then(response => response.json())
//         .then(result => {
//         console.log('Película eliminada de favoritos:', result);
//         })
//         .catch(error => console.error('Error al eliminar película de favoritos:', error));
// }

// const movieId = 12345;
// generarGuestSession()
// agregarFavorito(movieId)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

fetch(urlMejoresCalificadas)
    .then(function(response) {
        return response.json();
    })

    .then(function(data) {
        console.log(data);
        let results = data.results;
        let fotos = ``;
        let div = document.querySelector("#divMejorClasificacion");
        nros = []

        while (nros.length < 6) {
            let nro = Math.floor(Math.random() * (results.length-1));
            if (!nros.includes(nro)) {
                nros.push(nro);
            };
        }

        for (let i = 0; i < 5; i++) {
            let nro = nros[i];
            let movie_id = results[nro].id;
            let movie_title = results[nro].title;
            let fecha = results[nro].release_date;
            let posterPath = results[nro].poster_path
            let poster = "https://image.tmdb.org/t/p/w200" + posterPath
                fotos += `
                <div class ="portada"> 
                    <div class="pelicula">
                        <a href="./detail-movie.html" class="addPic"><img id="fotopeli" class="fotos" src=${poster} alt="${movie_title}"></a>
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

                div.innerHTML = fotos;
            }
        contenerIds()
        console.log(contenerIds());
    })

    .catch(function(error) {
        console.log("Error al obtener datos de películas: " + error);
    });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

fetch(urlPopulares)
    .then(function(response) {
        return response.json();
    })

    .then(function(data) {
        console.log(data);
        let results = data.results;
        let fotos = ``;
        let div = document.querySelector("#divPopulares");
        let nros = [];
        
        while (nros.length < 6) {
            let nro = Math.floor(Math.random() * (results.length - 1));
            if (!nros.includes(nro)) {
                nros.push(nro);
            }
        }
        
        for (let i = 0; i < 5; i++) {
            let nro = nros[i];
            let movie_id = results[nro].id;
            let movie_title = results[nro].title;
            let fecha = results[nro].release_date;
            let posterPath = results[nro].poster_path;
            let poster = "https://image.tmdb.org/t/p/w200" + posterPath;
            
            fotos += `
                <div class="portada">
                    <div class="pelicula">
                        <a href="./detail-movie.html" class="addPic">
                            <img class="fotos" src="${poster}" alt="${movie_title}">
                        </a>
                        <div class="titfav">
                            <h4 class="addTitle">${movie_title}</h4>
                            <i id="${movie_id}" class="fa-regular fa-heart" style="color: #ffffff;"></i>
                        </div>
                        <p class="addDate">Fecha de estreno: ${fecha}</p>
                    </div>
                </div>
            `;
        }
    contenerIds()
        
        div.innerHTML = fotos;
        console.log(nros);
    })
    
    .catch(function(error) {
        console.log("Error al obtener datos de películas: " + error);
    });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

fetch(urlSeriesPopulares)
    .then(function(response) {
        return response.json();
    })

    .then(function(data) {
        console.log(data);
        let results = data.results;
        let fotos = ``;
        let div = document.querySelector("#divSeriesPopulares");
        nros = []

        while (nros.length < 6) {
            let nro = Math.floor(Math.random() * (results.length-1));
            if (!nros.includes(nro)) {
                nros.push(nro);
            };
        }

        for (let i = 0; i < 5; i++) {
            let nro = nros[i];
            let serie_id = results[nro].id;
            let serie_title = results[nro].name;
            let fecha = results[nro].first_air_date;            
            let posterPath = results[nro].poster_path;
            let poster = "https://image.tmdb.org/t/p/w200" + posterPath
                fotos += `
                <div class ="portada"> 
                    <div class="pelicula">
                        <a href="./detail-serie.html" class="addPic"><img class="fotos" src=${poster} alt="${serie_title}"></a>
                        <div class="titfav">
                            <h4 class="addTitle">${serie_title}</h4>
                            <i id="${serie_id}" class="fa-regular fa-heart" style="color: #ffffff;"></i>
                        </div>
                        <p class="addDate">Fecha de estreno: ${fecha}</p>
                    </div>    
                </div>
                `;

                div.innerHTML = fotos;
                console.log(nros);
            }
        contenerIds()
        console.log(contenerIds());
    })
    .catch(function(error) {
        console.log("Error al obtener datos de películas: " + error);
    });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////