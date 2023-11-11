// let corazones = document.querySelectorAll(".fa-heart");

// function contenerIdsFavs() {
//   for (let i = 0; i < corazones.length; i++) {
//     corazones[i].addEventListener("click", function() {
//       let movie_id = corazones[i].id;
//       let storedIds = JSON.parse(localStorage.getItem("favs")) || [];

//       if (! storedIds.includes(movie_id)) {
//         storedIds.push(movie_id);
//         localStorage.setItem("favs", JSON.stringify(storedIds));
//         corazones[i].classList.remove('fa-regular');
//         corazones[i].classList.add('fa-solid');
//       } 
      
//       else {
//         let id_eliminar = storedIds.indexOf(movie_id);
//         storedIds.splice(id_eliminar, 1);
//         localStorage.setItem("favs", JSON.stringify(storedIds));
//         corazones[i].classList.remove('fa-solid');
//         corazones[i].classList.add('fa-regular');
//       }

//       console.log("IDs almacenados: " + JSON.parse(localStorage.getItem("favs")));
//     });
//   }
// }

// document.addEventListener("DOMContentLoaded", function(){
//   contenerIdsFavs();
// })
