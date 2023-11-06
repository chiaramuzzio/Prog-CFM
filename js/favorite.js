let arrayFavs = JSON.parse(sessionStorage.getItem("favoritos")) || [];

document.addEventListener("DOMContentLoaded", function() {
    let arrayCorazones = document.querySelectorAll('.fa-heart')
    for (let i = 0; i<arrayCorazones.length; i++){
        let idheart = arrayCorazones[i].id
        if (arrayFavs.includes(idheart)){
            arrayCorazones[i].classList.remove('fa-regular');
            arrayCorazones[i].classList.add('fa-solid');
            arrayCorazones[i].style.color = "#ff0000"
        }
    }
    })

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('fa-heart')) {
    const icono = event.target;
    const id = icono.id;

    if (icono.classList.contains('fa-regular')) {
        icono.classList.remove('fa-regular');
        icono.classList.add('fa-solid');
        icono.style.color = "#ff0000"
        arrayFavs.push(id);
    } 
      
    else {
        icono.classList.remove('fa-solid');
        icono.classList.add('fa-regular');
        icono.style.color = "#ffffff"
        const index = arrayFavs.indexOf(id);
        if (index !== -1) {
          arrayFavs.splice(index, 1);
        }
    }

    }

    console.log('IDs almacenados: ' + arrayFavs);
    sessionStorage.setItem("favoritos", JSON.stringify(arrayFavs));
  }
);




// let arrayFavs = JSON.parse(sessionStorage.getItem("favoritos")) || [];
// console.log("Contenido de arrayFavs:", arrayFavs); // Agrega esta línea

// document.addEventListener("DOMContentLoaded", function() {
//     let iconos = document.querySelectorAll('.fa-heart');
    
//     for (let i = 0; i<iconos.length; i++){
//         let idCora = iconos[i].id
//         if (arrayFavs.includes(idCora)) {
//             iconos[i].classList.remove('fa-regular');
//             iconos[i].classList.add('fa-solid');
//             iconos[i].style.color = "#ff0000";
//           }
//     }
// }) 

// document.addEventListener('click', function(event) {
//   if (event.target.classList.contains('fa-heart')) {
//     const icono = event.target;
//     const id = icono.id;

//     if (id in arrayFavs){
//         icono.classList.remove('fa-regular');
//         icono.classList.add('fa-solid');
//         icono.style.color = "#ff0000";
//         arrayFavs.push(id);
//     }

//     else{
//         if (icono.classList.contains('fa-regular')) {
//             icono.classList.remove('fa-regular');
//             icono.classList.add('fa-solid');
//             icono.style.color = "#ff0000";
//             arrayFavs.push(id);
//         } 
          
//         else {
//         icono.classList.remove('fa-solid');
//         icono.classList.add('fa-regular');
//         icono.style.color = "#ffffff";
//         const index = arrayFavs.indexOf(id);
//         if (index !== -1) {
//             arrayFavs.splice(index, 1);
//         }
//         }
//     }

//     console.log(arrayFavs);

//     sessionStorage.setItem("favoritos", JSON.stringify(arrayFavs));
//   }
// });