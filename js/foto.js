//https://jsonplaceholder.typicode.com/users/
/* async/wait */

let urlUser = window.location.search;
let urlParam = new URLSearchParams(urlUser);

console.log(urlParam);

let idUser = urlParam.get("id");
console.log(`id: ${idUser}`);

const getUser = async () => {
  try {
    let url = `https://jsonplaceholder.typicode.com/albums/1/photos?id=${idUser}`;
    let response = await fetch(url);
    let json = await response.json();
    console.log(json);

    let table = renderTable(json);
    let content = document.getElementById("content");
    content.innerHTML = table;
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};
getUser();

const renderTable = (employees) => {
  let rows = employees.map(({ id,title, thumbnailUrl }) => {
    return `
    <tr>
      <td data-label="id:">${id}</td>
      <td data-label="Título:">${title}</td>
      <td data-label="Foto:">${thumbnailUrl}</td>
      <td data-label="Voltar:"><a href="albums.html" class="btn btn-success">Voltar</a></td>
    </tr>`;
  });
  return `
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Foto</th>
          <th>Ação</th>
        </tr>
      </thead>
      ${rows.join("")}
    </table>`;
};
