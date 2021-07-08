import { Header } from "./components/Header.js";
import { Posts } from "./components/Posts.js";
import { Loader } from "./components/Loader.js";
import { Router } from "./components/Router.js";

export function App () {
  //console.log(API);
  const $root = document.getElementById("root");

  $root.appendChild(Header());
  $root.appendChild(Posts());
  $root.appendChild(Loader());

  Router();
}