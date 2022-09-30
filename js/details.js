//https://jsonplaceholder.typicode.com/users/
/* async/wait */

let urlUser = window.location.search;
let urlParam = new URLSearchParams(urlUser);

console.log(urlParam);

let idUser = urlParam.get("id");
console.log(`id: ${idUser}`);

const getUser = async () => {
  try {
    let url = `https://jsonplaceholder.typicode.com/users/${idUser}`;
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

const renderTable = ({ id, name,phone, email, username, address }) => {
  return `
  <table border="1">
    <thead>
      <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>Fone</th>
        <th>E-mail</th>
        <th>Nome de usuário</th>
        <th>Endereço</th>
        <th>Ação</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="id:">${id}</td>
        <td data-label="nome:">${name}</td>
        <td data-label="fone:">${phone}</td>
        <td data-label="email:">${email}</td>
        <td data-label="nome de usuário:">${username}</td>
        <td data-label="endereço:">${address.street}</td>
        <td data-label="ação:" class="center"><a href="index.html" class="btn btn-success">Voltar</a><a href="albums.html" id="${id}" class="btn btn-success">Álbuns</a></td>
      </tr>
    </tbody>
  </table>
  `;
};
