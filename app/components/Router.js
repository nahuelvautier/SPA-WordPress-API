import API from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";

export async function Router () {
  /* Se aplica asincronía a la función para que se ejecute en primer lugar
  la renderización de los elementos en el nodo principal */
  const d = document,
    w = window,
    $main = d.getElementById("main");

  const { hash } = location;
  console.log(hash);

  $main.innerHTML = null;

  if (!hash || hash === "#/") {
    await ajax({
      url: API.POSTS,
      cbSuccess: (posts) => {
        //console.log(posts);
        let htmlCode = "";
        posts.forEach(post => htmlCode += PostCard(post));
        d.querySelector(".loader").style.display = "none";
        $main.innerHTML = htmlCode;
      }
    });
  } else if (hash.includes("#/search")) {
    $main.innerHTML = "<h2>Sección del Buscador</h2>"
  } else {
    $main.innerHTML = "<h2>Contenido del post previamente seleccionado.</h2>"
  }

  d.querySelector(".loader").style.display = "none";
}