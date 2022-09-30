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

    let foto = renderTable(json);
    let content = document.getElementById("blogs");
    content.innerHTML = foto;
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};
getUser();

const renderTable = (json) => {
  let rows = json.map(({ id, title, thumbnailUrl, url }) => {
    return `
    <h1 class="heading">Imagem <span>Miniatura</span></h1>
    <div class="box-container">
      <div class="box">
        <div class="image">
          <img src="${thumbnailUrl}" alt="image">
        </div>
        <div class="content">
          <span class="title">${id}</span>
          <p>
              ${title}.
            </p>
          <div class="btn-content">
            <a href="albums.html" id="${id}" class="btn btn1">Voltar</a>
            <a href="${url}" id="${id}" class="btn btn1" target="_blank">Foto grande</a>
          </div>
        </div>
      </div>
    </div>
    
  `;
  });
  return rows.join("");
};
