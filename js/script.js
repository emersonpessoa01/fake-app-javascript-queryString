//https://jsonplaceholder.typicode.com/users/
/* async/wait */

const getJson = async () => {
  try {
    let url = `https://jsonplaceholder.typicode.com/users/`;
    let response = await fetch(url);
    let json = await response.json();

    let table = renderTable(json);
    let content = document.getElementById("content");
    content.innerHTML = table;

    handleButtons(json);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};
getJson();

const renderTable = (employees) => {
  let rows = employees.map(({ id, name, email }) => {
    return `
  <tr>
    <td data-label="id:" >${id}</td>
    <td data-label="name:">${name}</td>
    <td data-label="email:">${email}</td>
    <td data-label="ações:"><a href="details.html" target="_blank" id="${id}" class="btn btn-success">Detalhes</a></td>
  </tr>`;
  });
  return `
  <table border="1">
    <thead>
      <tr>
        <th>ID</th>
        <th>Nome</th>
        <th>E-mail</th>
        <th>Ações</th>
      </tr>
    </thead>
    ${rows.join("")}
  </table>`;
};

function handleButtons(roles) {
  let buttons = Array.from(content.querySelectorAll(".btn"));
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
