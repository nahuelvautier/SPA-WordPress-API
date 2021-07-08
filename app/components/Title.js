import API from "../helpers/wp_api.js";

export function Title () {
  const $h1 = document.createElement("h1");
  $h1.innerHTML = `
    <a href="${API.DOMAIN}" target="_blank" rel="noopener noreferrer">
      ${API.NAME.toUpperCase()}
    </a>
  `;

  return $h1;
}