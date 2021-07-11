import API from "./wp_api.js";
import { ajax } from "./ajax.js";
import { PostCard } from "../components/PostCard.js";
import { SearchCard } from "../components/SearchCard.js";

export async function infiniteScroll () {
  const d = document,
    w = window,
    query = localStorage.getItem("wpSearch");

  let apiURL,
    Component;
  // High Order Component (HOC) Se declara con UpperCamelCase porque almacenará un componente.

  w.addEventListener("scroll", async e => {
    const { scrollTop, clientHeight, scrollHeight } = d.documentElement,
      { hash } = w.location;

      //console.log(scrollTop, clientHeight, scrollHeight, hash);

      if (scrollTop + clientHeight >= scrollHeight) {
        API.pageNumber++;
        
        if (!hash || hash === "#/") {
          apiURL = `${API.POSTS}&page=${API.pageNumber}`;
          Component = PostCard;
        } else if ( hash.includes("#/search")) {
          apiURL = `${API.SEARCH}${query}&page=${API.pageNumber}`;
          Component = SearchCard;
        } else {
          return false;
        }

        d.querySelector(".loader").style.display = "block";

        await ajax({
          url: apiURL,
          cbSuccess: (posts) => {
            //console.log(posts);
            
            let html = "";
            posts.forEach(post => html += Component(post));
            d.getElementById("main").insertAdjacentHTML("beforeend", html);
            d.querySelector(".loader").style.display = "none";
          }
        })
      }
  }); 
};