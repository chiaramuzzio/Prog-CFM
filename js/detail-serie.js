let idsRecuperado = localStorage.getItem("ids");
idsRecuperado = JSON.parse(idsRecuperado)

let api_key = "378786c706182646715863ed0e6d66cc"
let detallePelicula = `https://api.themoviedb.org/3/tv/${idsRecuperado}?api_key=${api_key}`


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
            let movie_title = results.title;
            let fecha = results.release_date;
            let posterPath = results.poster_path;
            let generos = results.genres[0].name
            let duracion = results.runtime
            let sinopsis = results.overview
            let calificacion = results.vote_average
            let poster = "https://image.tmdb.org/t/p/w200" + posterPath;
            
           let fotos = `
                    <a name=${movie_title}><h3>${movie_title}</h3></a>
                    <p>Calificacion: ${calificacion} | ${duracion} mins | ${generos} | ${fecha}</p>
                    <div class="info"> 
                        <img class="fotos" src="${poster}">
                        
                        <p class="sinopsis">"${sinopsis}"</p>
                    </div>
                `;

                div.innerHTML = fotos;                
                //AGREGAR ALGO EN EL ESPACIO VACIO
                localStorage.removeItem("ids")
    })

    .catch(function (error) {
        console.log("Error al obtener datos de películas: " + error);
    });
