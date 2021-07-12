export async function ajax (props) {
  /* Se aplica asincronía a la función para que se ejecute en primer lugar
  la renderización de los elementos en el nodo principal */
  const { url, cbSuccess } = props;

  await fetch(url)
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .then(json => cbSuccess(json))
    .catch(err => {
      let message = err.statusText || "Hubo un error al conectar a la API";

      document.getElementById("main").innerHTML = `
        <div class="error">
          <p>Error ${err.status}: ${message}</p>
        </div>
      `;

      document.querySelector(".loader").style.display = "none";
      console.error(err);
    });
}