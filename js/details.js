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

const renderTable = ({ id, name, email }) => {
  return `
  <table border="1">
    <thead>
      <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>E-mail</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="id:">${id}</td>
        <td data-label="nome:">${name}</td>
        <td data-label="email:">${email}</td>
      </tr>
    </tbody>
  </table>
  `;
};
