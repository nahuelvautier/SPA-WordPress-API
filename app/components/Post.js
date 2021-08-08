export function Post (props) {
  const { content, date, title} = props,
    dateFormat = new Date(date).toLocaleDateString();

  setTimeout(() => {
    document.getElementById("attachment_19340").style.width = "100%";
  }, 100);
  
  return `
    <section class="post-page">
      <aside>
        <h2>${title.rendered}</h2>
        <time datetime="${date}">${dateFormat}</time>
      </aside>
      <hr>
      <article>${content.rendered}</article>
    </section>
  `;
}