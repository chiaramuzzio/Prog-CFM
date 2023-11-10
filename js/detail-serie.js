let idsRecuperado = localStorage.getItem("ids");
idsRecuperado = JSON.parse(idsRecuperado)

console.log("idsRecuperado:", idsRecuperado);


let api_key = "378786c706182646715863ed0e6d66cc"
let detallePelicula = `https://api.themoviedb.org/3/tv/${idsRecuperado}?api_key=${api_key}`
let botonRecomend = `https://api.themoviedb.org/3/tv/${idsRecuperado}/recommendations?api_key=${api_key}`

let botonrecom = document.querySelector(".botonrecom")
let peliculas_recomendacion = document.querySelector(".peliculas_recomendacion")

peliculas_recomendacion.style.display = 'none';
botonrecom.addEventListener('click', function(){    
    peliculas_recomendacion.style.display = 'flex';        
})

console.log(idsRecuperado);

fetch(detallePelicula)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        let results = data;
        let div = document.querySelector(".dtl_pelicula");
            let movie_id = results.id;
            let movie_title = results.name;
            let fecha = results.first_air_date;
            let posterPath = results.poster_path;
            let sinopsis = results.overview
            let calificacion = results.vote_average
            let poster = "https://image.tmdb.org/t/p/w200" + posterPath;
            
           let fotos = `
                    <a name=${movie_title}><h3>${movie_title}</h3></a>
                    <p>Calificacion: ${calificacion} | ${fecha}</p>
                    <div class="info"> 
                        <img class="fotos" src="${poster}">
                        
                        <p class="sinopsis">"${sinopsis}"</p>
                    </div>
                `;

                div.innerHTML = fotos;                
                //AGREGAR ALGO EN EL ESPACIO VACIO
                localStorage.removeItem("ids")

                //////////////////////////////////////77
                fetch(botonRecomend)
                .then(function(response){
                return response.json();
            })
                .then(function(data){
                console.log(data);
                let results = data.results;
                let div_peli_recom = document.querySelector(".peliculas_recomendacion")
                let peliss
                for (let i = 0; i < 5; i++) {
                    let movie_id = results[i].id;
                    let movie_title = results[i].name;
                    let fecha = results[i].first_air_date;
                    let posterPath = results[i].poster_path
                    let poster = "https://image.tmdb.org/t/p/w200" + posterPath
                        peliss += `
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
                    }
                div_peli_recom.innerHTML=peliss
                
            })
                .catch(function(error){
                console.log('El error es: ' + error);
            })
    })

    .catch(function (error) {
        console.log("Error al obtener datos de películas: " + error);
    });
