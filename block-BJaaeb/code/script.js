/*

Write a function named `createInputElm` that accepts two parameter (label and `type`) type
default value to be "text" and return the input element inside label. (create it using `createElement`)

*/

// Your code goes here
function createInputElm(label,type="text"){
  let labelElement=document.createElement('label');
  let inputElement=document.createElement('input');
  inputElement.type=type;
  labelElement.textContent=label;
  labelElement.appendChild(inputElement);
  return labelElement;
}
// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 2. Do the same thing as above using string literal like `<h1>Hello</h1>`

// Your code goes here
function createInputElm(label,type="text"){
  let htmlString=`<label>${label}<input type="${type}"></label>`
  let tempDiv=document.createElement('div')
  tempDiv.innerHTML=htmlString;
  return tempDiv.firstChild;
}
// TEST
createInputElm('Your name'); //<label>Your name: <input type="text"></label>
createInputElm('Your age', 'number'); //<label>Your age: <input type="number"></label>

// 3. Create a function named `createList` that accept and array of data like ['Mango', 'Apple', 'Banana'] and returns
// the html for the link like <ul> <li>Mango</li>  <li>Apple</li>  <li>Banana</li> </ul>
// Your code goes here
function createList(dataArray){
  let ulElement=document.createElement('ul');
  dataArray.forEach(element => {
    let liElement=document.createElement('li');
    liElement.textContent=item;
    ulElement.appendChild(liElement)
  });
  return ulElement;
}
// TEST
createList(['ALABAMA', 'ALASKA', 'HAWAII', 'KENTUCKY']);
createList(['Afghanistan', 'Antarctica', 'Congo', 'Estonia']);

// 4. Create a function named `createTodoList` that accept and array of data like [{name: "Learn DOM", isDone: false}, {name: "Learn JS", isDone: true}] and returns
// the html for single todo will look like given below
/* 
<ul>
  <li>
    <p>Learn DOM</p>
    <input type="checkbox" checked name="" id="">
    <span>X</span>
  </li>
</ul>
*/

// Your code goes here
function createTodoList(todoArray){
  let ulElement=document.createElement('ul');
  todoArray.forEach(todoItem=>{
    let liElement=document.createElement(li);
    let pElement=document.createElement('p');
    pElement.textContent=todoItem.name;
    let checkboxElement=document.createElement('input');
    checkboxElement.type='checkbox';
    checkboxElement.checked=todoItem.isDone;
    checkboxElement.name=' ';
    checkboxElement.id=' ';
    let spanElement=document.createElement('span');
    spanElement.textContent='x';
    liElement.appendChild(pElement);
    liElement.appendChild(checkboxElement);
    liElement.appendChild(spanElement);
    ulElement.appendChild(liElement);
  });
  return ulElement;
}
// TEST
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn JS', isDone: true },
]);
createTodoList([
  { name: 'Learn DOM', isDone: false },
  { name: 'Learn React', isDone: true },
  { name: 'Learn JS', isDone: true },
]);
