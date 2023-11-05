let api_key = "378786c706182646715863ed0e6d66cc"

let urlMejoresCalificadas = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`;
let urlPopulares = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`;
let urlSeriesPopulares = `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}`;


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
                        <a href="./detail-movie.html" class="addPic"><img class="fotos" src=${poster} alt="${movie_title}"></a>
                        <div class="titfav">
                            <h4 class="addTitle">${movie_title}</h4>
                            <i class="fa-regular fa-heart" style="color: #ffffff;"></i>
                        </div>
                        <p class="addDate">Fecha de estreno: ${fecha}</p>
                    </div>    
                </div>
                `;

                div.innerHTML = fotos;
                console.log(nros);
            }
    })


    .catch(function(error) {
        console.log("Error al obtener datos de películas: " + error);
    });


fetch(urlPopulares)
    .then(function(response) {
        return response.json();
    })

    .then(function(data) {
        console.log(data);
        let results = data.results;
        let fotos = ``;
        let div = document.querySelector("#divPopulares");
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
                        <a href="./detail-movie.html" class="addPic"><img class="fotos" src=${poster} alt="${movie_title}"></a>
                        <div class="titfav">
                            <h4 class="addTitle">${movie_title}</h4>
                            <i class="fa-regular fa-heart" style="color: #ffffff;"></i>
                        </div>
                        <p class="addDate">Fecha de estreno: ${fecha}</p>
                    </div>    
                </div>
                `;

                div.innerHTML = fotos;
                console.log(nros);
            }
    })


    .catch(function(error) {
        console.log("Error al obtener datos de películas: " + error);
    });

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
            let fecha = results[nro].first_air_date;            ;
            let posterPath = results[nro].poster_path;
            let poster = "https://image.tmdb.org/t/p/w200" + posterPath
                fotos += `
                <div class ="portada"> 
                    <div class="pelicula">
                        <a href="./detail-movie.html" class="addPic"><img class="fotos" src=${poster} alt="${serie_title}"></a>
                        <div class="titfav">
                            <h4 class="addTitle">${serie_title}</h4>
                            <i class="fa-regular fa-heart" style="color: #ffffff;"></i>
                        </div>
                        <p class="addDate">Fecha de estreno: ${fecha}</p>
                    </div>    
                </div>
                `;

                div.innerHTML = fotos;
                console.log(nros);
            }
    })


    .catch(function(error) {
        console.log("Error al obtener datos de películas: " + error);
    });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*let cora = document.querySelectorAll(".fa-heart");
let arrayFavs = []
let arrayFavsJSON = JSON.stringify(arrayFavs)
sessionStorage.setItem("favoritos", arrayFavsJSON);

for(let i=0; i<cora.length; i++)(
    cora[i].addEventListener("click", function(){
        if(cora[i].classList.contains("fa-regular")) {
            cora[i].classList.remove("fa-regular");
            cora[i].classList.add("fa-solid");
            cora[i].style.color = "#ff0000";
            let recuperoFavs = sessionStorage.getItem("favoritos");
            let favsRecuperado = JSON.parse(recuperoFavs);
            favsRecuperado.push(cora[i]);
            console.log(favsRecuperado)
        }
        else{
            cora[i].classList.add("fa-regular");
            cora[i].classList.remove("fa-solid");
            cora[i].style.color = "#ffffff";
        }
    })
)*/

let cora = document.querySelectorAll(".fa-heart");
let favsRecuperados = JSON.parse(sessionStorage.getItem("favoritos")) || [];

for (let i = 0; i < cora.length; i++) {
  cora[i].addEventListener("click", function () {
    if (cora[i].classList.contains("fa-regular")) {
      cora[i].classList.remove("fa-regular");
      cora[i].classList.add("fa-solid");
      cora[i].style.color = "#ff0000";
      favsRecuperados.push(i);
      sessionStorage.setItem("favoritos", JSON.stringify(favsRecuperados));
    } 
    
    else {
      cora[i].classList.add("fa-regular");
      cora[i].classList.remove("fa-solid");
      cora[i].style.color = "#ffffff";

      let indexToRemove = -1;
      for (let j = 0; j < favsRecuperados.length; j++) {
        if (favsRecuperados[j] === i) {
          indexToRemove = j;
          break;
        }
      }

      if (indexToRemove !== -1) {
        for (let j = indexToRemove; j < favsRecuperados.length - 1; j++) {
          favsRecuperados[j] = favsRecuperados[j + 1];
        }
        favsRecuperados.pop();
        sessionStorage.setItem("favoritos", JSON.stringify(favsRecuperados));
      }
    }
  });

  if (favsRecuperados.includes(i)) {
    cora[i].classList.remove("fa-regular");
    cora[i].classList.add("fa-solid");
    cora[i].style.color = "#ff0000";
  }
}