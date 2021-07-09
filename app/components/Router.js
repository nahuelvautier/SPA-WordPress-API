import API from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";

export async function Router () {
  /* Se aplica asincronía a la función para que se ejecute en primer lugar
  la renderización de los elementos en el nodo principal */
  const d = document,
    $main = d.getElementById("main");

  const { hash } = location;
  //console.log(hash);

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
    const query = localStorage.getItem("wpSearch");

    if (!query) return false;
    
    await ajax({
      url: `${API.SEARCH}${query}`,
      cbSuccess: (search) => {
        console.log(search);
      }
    });
  } else {
    await ajax({
      url: `${API.POST}/${localStorage.getItem("wpPostId")}`,
      cbSuccess: (post) => {
        //console.log(post);
        $main.innerHTML = Post(post);
      }
    });
  }

  d.querySelector(".loader").style.display = "none";
}