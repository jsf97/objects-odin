function Book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${title} by ${author}, ${pages} pages, ` + (read ? `read.` : `not read yet.`)
  }
}

let myLibrary = [];

const table = document.querySelector('table');

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary('Los pitufos', 'Alguien', 1311, true)
addBookToLibrary('pitadsadasdsaufo2', 'quesedsadasdasdsayo2', 1312, false)

function getData(data, row, classing) {
  const bookData = document.createElement('td');
  bookData.textContent = data
  bookData.classList.add(classing)
  row.appendChild(bookData);
}

function getBookData(arr) {
  let newRow = document.createElement('tr');
  getData(arr.title, newRow)
  getData(arr.author, newRow)
  getData(arr.pages, newRow)
  getData(arr.read ? data = "Yes" : data = "No", newRow, 'read')
  const deleteButton = document.createElement('td');
  deleteButton.textContent = 'X'
  deleteButton.classList.add('delete')
  newRow.appendChild(deleteButton)
  table.appendChild(newRow);
  deleteButton.addEventListener('click', function() {
    table.removeChild(newRow)
  })
  const abc = newRow.childNodes[3];
  abc.style = 'color: black;'
  function checkStatus(status) {
    if (status.textContent == 'Yes') {
      status.style = 'background-color: rgb(156, 236, 122); color: black;'
      abc.onmouseover = function() {
        status.style = 'background-color: rgb(85, 175, 85)'
      } 
      abc.onmouseout = function() {
        status.style = 'background-color: rgb(156,236,122); color: black;'
      } 
    }
    else if (status.textContent == 'No') {
      status.style = 'background-color: rgb(241, 170, 170); color: black;'
      abc.onmouseover = function() {
        status.style = 'background-color: rgb(175, 85, 85)'
      } 
      abc.onmouseout = function() {
        status.style = 'background-color: rgb(241, 170, 170); color: black;'
      } 
    }
  }
  abc.addEventListener('click', ()=> {
    if (abc.textContent == 'Yes') {
      abc.textContent = 'No';
    }
    else if (abc.textContent == 'No') {
      abc.textContent = 'Yes'
    }
    checkStatus(abc)
  })
  checkStatus(abc)
}

for(i = 0; i < myLibrary.length; i++) {
  getBookData(myLibrary[i])
}

const form = document.querySelector('#form');


form.addEventListener('submit', (e)=> {
e.preventDefault();
const title = document.querySelector('#book-title').value;
const author = document.querySelector('#book-author').value;
const pages = document.querySelector('#book-pages').value;
const read = document.getElementsByName('read');
let read_value;
for (i = 0; i < read.length; i++) {
  if(read[i].checked && read[i].value == 'true') {
    read_value = true;
  }
}
 let newBook = new Book(title, author, pages, read_value)
 let temporaryArr = [];
 temporaryArr.push(newBook);
 getBookData(temporaryArr[0])
})