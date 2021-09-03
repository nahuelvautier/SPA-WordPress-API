export function Menu () {
  const $menu = document.createElement("nav");
  $menu.classList.add("menu");
  $menu.innerHTML = `
    <a href="#">Home</a>
    <span>-</span>
    <a href="#/search">Búsqueda</a>
    <span>-</span>
    <a href="https://nahuelvautier.netlify.app/" target="_blank" rel="noopener noreferrer">Nahuel Vautier</a>
  `;
  return $menu;
}