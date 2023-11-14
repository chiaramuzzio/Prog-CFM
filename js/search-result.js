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
    
    
    fetch(urlBusqueda)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let results = data.results;
            let fotos = ``;
            let div = document.querySelector("#resultados-busqueda");
    
    
            if (results.length === 0) {
                div.innerHTML = '<p class=“no_result" >No hay resultado para su búsqueda</p>';
            } else {
            for (let i = 0; i<6; i++){
                let movie_id = results[i].id;
                let movie_title = results[i].title;
                let fecha = results[i].release_date;
                let posterPath = results[i].poster_path;
                let poster = "https://image.tmdb.org/t/p/w200" + posterPath;
               
                fotos += `
                    <div class ="portada">
                    <div class="pelicula">
                        <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><img id="fotopeli" class="fotos" src=${poster} alt="${movie_title}"></a>
                        <div class="titfav">
                        <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><h4 id="${movie_id}" class="capturarId">${movie_title}</h4></a>
                        </div>
                        <a href="./detail-movie.html?movie_id=${movie_id}" class="addPic"><p class="addDate">Fecha de estreno: ${fecha}</p></a>
                    </div>    
                    </div>
                    `;
                }
                    div.innerHTML = fotos;
                   
                }
    
    
                   
        })
    
    
        .catch(function (error) {
            console.log("Error al obtener datos de películas: " + error);
        });
    })
    
    
    