const $ = (selector, selectAll = false) => 
!selectAll ? document.querySelector(selector) : document.querySelectorAll(selector);

const createElement = (tag, attributes = {}, insideText = '') => {
  const element = document.createElement(tag);
  if (Object.keys(attributes).length) {
    for (let key in attributes) {
      if (attributes.hasOwnProperty(key)) {
        element.setAttribute(key, attributes[key]);
      }
    }
  }
  if (insideText) {
    element.appendChild(document.createTextNode(insideText));
  }
  return element;
};

let itemCounter = 0;
const MAX_LIST_ITEMS = 10;
const inputField = $('.add_item_input');
const underMaxItem = $('.limit_line');
const addNewItemButton = $('.add_btn');
const myList = $('.my_list');

inputField.onchange = inputField.onkeyup = event => {
  const labelText = inputField.value.trim();

  addNewItemButton.disabled = !labelText;

  if (event.code === 'Enter' && labelText) {
    addItem(labelText);
  }
};

addNewItemButton.onclick = () => {
  addItem(inputField.value.trim());
};

const addItem = labelText => {
  const checkBoxIcon = createElement('i', {'class': 'material-icons'}, 'check_box_outline_blank');
  const deleteIcon = createElement('i', {'class': 'material-icons'}, 'delete');
  const label = createElement('span', {}, labelText);
  const checkboxBtn = createElement('button', {'class': 'todo-cat__checkbox'});
  const deleteBtn = createElement('button', {'class': 'remove_item'});
  const liItem = createElement('li', {'class': 'list_item', 'draggable': true});

  checkboxBtn.appendChild(checkBoxIcon);
  checkboxBtn.appendChild(label);
  liItem.appendChild(checkboxBtn);
  liItem.appendChild(deleteBtn);
  myList.appendChild(liItem);
  deleteBtn.appendChild(deleteIcon);
 

  checkboxBtn.onclick = function(){
    checkBoxIcon.textContent = 'check_box';
  };

  deleteBtn.onclick = function(){
    liItem.remove();
    itemCounter--;

    inputField.disabled = false;
    underMaxItem.style.display = 'none';
  };

  if (++itemCounter >= MAX_LIST_ITEMS) {
    inputField.disabled = true;
    underMaxItem.style.display = 'block';
  }

  inputField.value = '';
  addNewItemButton.disabled = true;
};

let itemMoving = null;

myList.addEventListener('dragstart', event => {
  itemMoving = event.target;
});

myList.addEventListener('dragover', event => {
  if (event.target.className === 'list_item') {
    event.preventDefault();

    const ZERO_INDEX = 0, HALF = 2;

    const bounding = event.target.getBoundingClientRect();
    const offset = bounding.y + bounding.height / HALF;

    if (event.clientY - offset > ZERO_INDEX) {
      event.target.style['border-top'] = '';
      event.target.style['border-bottom'] = '2px dashed #ccc';
    } else {
      event.target.style['border-top'] = '2px dashed #ccc';
      event.target.style['border-bottom'] = '';
    }
  }
});

myList.addEventListener('dragleave', event => {
  event.target.style['border-bottom'] = '';
  event.target.style['border-top'] = '';
});

myList.addEventListener('drop', event => {
  if (event.target.className === 'list_item') {
    event.preventDefault();

    if (event.target.style['border-bottom']) {
      event.target.style['border-bottom'] = '';
      myList.insertBefore(itemMoving, event.target.nextSibling);
    } else {
      event.target.style['border-top'] = '';
      myList.insertBefore(itemMoving, event.target);
    }
  }
});