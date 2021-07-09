import API from "../helpers/wp_api.js";
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";
import { SearchCard } from "./SearchCard.js";

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

    if (!query) {
      d.querySelector(".loader").style.display = "none";
      return false;
    };
    
    await ajax({
      url: `${API.SEARCH}${query}`,
      cbSuccess: (search) => {
        console.log(search);
        let html = "";

        if (search.length === 0) {
          html = `
            <p class="error">No existen resultados de búsqueda para el término "${query}"</p>
          `;
        } else {
          search.forEach(word => html += SearchCard(word));
        }

        $main.innerHTML = html;
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