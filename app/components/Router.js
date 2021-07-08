import API from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";

export function Router () {
  const d = document,
    w = window,
    $posts = d.getElementById("posts");

  const { hash } = location;
  console.log(hash);

  $posts.innerHTML = null;

  if (!hash || hash === "#/") {
    ajax({
      url: API.POSTS,
      cbSuccess: (posts) => {
        //console.log(posts);
        let htmlCode = "";
        posts.forEach(post => htmlCode += PostCard(post));
        d.querySelector(".loader").style.display = "none";
        $posts.innerHTML = htmlCode;
      }
    });
  } else if (hash.includes("#/search")) {
    $posts.innerHTML = "<h2>Sección del Buscadore</h2>"
  } else {
    $posts.innerHTML = "<h2>Contenido del post previamente seleccionado.</h2>"
  }
}