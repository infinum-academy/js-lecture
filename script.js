let name = '';

function doWork() {
  const nameTitle = document.createElement('h1');
  nameTitle.innerText = name;
  document.body.append(nameTitle);
}

function storeName(e) {
  name = e.target.value;
}

const btn = document.getElementsByClassName('js-btn');
const input = document.getElementsByClassName('js-name');

btn[0].addEventListener('click', doWork);
input[0].addEventListener('change', storeName);
