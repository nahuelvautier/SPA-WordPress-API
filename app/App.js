import API from "./helpers/wp_api.js";
import { ajax } from "./helpers/ajax.js";
import { Header } from "./components/Header.js";
import { Posts } from "./components/Posts.js";
import { Loader } from "./components/Loader.js";
import { PostCard } from "./components/PostCard.js";

export function App () {
  //console.log(API);
  const d = document,
    $root = d.getElementById("root");

  $root.appendChild(Header());
  $root.appendChild(Posts());
  $root.appendChild(Loader());

  ajax({
    url: API.POSTS,
    cbSuccess: (posts) => {
      console.log(posts);
      let htmlCode = "";
      posts.forEach(post => htmlCode += PostCard(post));
      d.querySelector(".loader").style.display = "none";
      d.getElementById("posts").innerHTML = htmlCode;
    }
  })
}