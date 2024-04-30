const BTN = document.querySelector('button')
const input = document.querySelector('input')
const list = document.querySelector('ul')

function addGoal(){
  const listValue = input.value;
  const listItem = document.createElement('li')
  listItem.textContent = listValue;
  list.appendChild(listItem);
  input.value = '';
}

BTN.addEventListener('click', addGoal);
