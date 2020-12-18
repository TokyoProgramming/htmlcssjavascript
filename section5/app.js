document.getElementById('text').addEventListener('click', getText);
document.getElementById('json').addEventListener('click', getJson);
document.getElementById('api').addEventListener('click', getApi);

function getText() {
  fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
      document.getElementById('output').innerHTML = data;
    });
}

function getJson() {
  fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output;
      data.forEach((user) => {
        output += `
        <ul>
            <li>${user.id}</li>
            <li>${user.name}</li>
            <li>${user.email}</li>
        </ul>`;
      });
      document.getElementById('output').innerHTML = output;
    });
}

function getApi() {
  fetch('https://jsonplaceholder.typicode.com/todos/')
    .then((res) => res.json())
    .then((data) => {
      let output;
      data.forEach((post) => {
        console.log(post.id);
        console.log(post.title);
        console.log(post.completed);
        output += `
        <ul>
            <li>${post.id}</li>
            <li>${post.title}</li>
            <li>${post.completed}</li>
        </ul>`;
      });
      document.getElementById('output').innerHTML = output;
    });
}

const myAwesomeArray = [
  { id: 1, name: 'john' },
  { id: 2, name: 'Ali' },
  { id: 3, name: 'Mass' },
];
myAwesomeArray.forEach((element) => console.log(element.name));
myAwesomeArray.map((x) => console.log(x.name));
