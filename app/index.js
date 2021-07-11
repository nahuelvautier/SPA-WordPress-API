import  { App } from "./App.js";
import API from "./helpers/wp_api.js";

document.addEventListener("DOMContentLoaded", App);
window.addEventListener("hashchange", () => {
  API.pageNumber = 1;
  App();
});