//https://jsonplaceholder.typicode.com/users/
/* async/wait */

let urlUser = window.location.search;
let urlParam = new URLSearchParams(urlUser);

console.log(urlParam);

let idUser = urlParam.get("id");
console.log(`id: ${idUser}`);

const getUser = async () => {
  try {
    let url = `https://jsonplaceholder.typicode.com/albums/1/photos/`;
    let response = await fetch(url);
    let json = await response.json();
    console.log(json);
    
    let table = renderTable(json);
    let content = document.getElementById("content");
    content.innerHTML = table;

    handleButtons(json);
    

  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};
getUser();

const renderTable = (json) => {
    let rows = json.map(({ id, title,}) => {
      return `
    <tr>
      <td data-label="id:" >${id}</td>
      <td data-label="Título:">${title}</td>
      <td data-label="ações:" class="center"><a href="index.html" id="${id}" class="btn btn1">Voltar</a><a href="foto.html" id="${id}" class="btn btn1 foto">Foto</a></td>
    </tr>`;
    });
    return `
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Ações</th>
        </tr>
      </thead>
      ${rows.join("")}
    </table>`;
  };
  
  function handleButtons() {
    let buttons = Array.from(content.querySelectorAll(".foto"));
    // console.log(buttons);
  
    for (let i = 0; i < buttons.length; i++) {
      // console.log(buttons[i]);
      let id = buttons[i].getAttribute("id");
      console.log(`id: ${id}`);
  
      let url = buttons[i].href;
      // console.log(url);
      let urlId = (buttons[i].href = `${url}?id=${id}`);
      console.log(urlId);
    }
  }
  

