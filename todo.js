let todoList = JSON.parse(localStorage.getItem('grabLi.id'));

if (!todoList) {
	todoList = [];
}

function lineThrough(todoItemDom,  storedTodo) {
	if (storedTodo.checked){
		todoItemDom.style.textDecoration = "line-through";
	}
	else {
		todoItemDom.style.textDecoration = "none";
	}
}

function handleDeleteClick(event, todoItem, todoItemState){
	event.stopPropagation();

	const index = todoList.findIndex(todo => todo.id === todoItemState.id)

	todoList.splice(index, 1);
	localStorage.setItem('grabLi.id',  JSON.stringify(todoList));
	todoItem.parentNode.removeChild(todoItem);	
}

function handleCheckboxClick(event, todoItemState, todoItem) {
	event.stopPropagation();
	const index = todoList.findIndex(item => item.id === todoItemState.id);
	const storedTodo = todoList[index];
	
	if(storedTodo.checked === true) {
		storedTodo.checked = false;
	} else {
		storedTodo.checked = true;
	}
	lineThrough(todoItem, storedTodo);

		todoList[index] = storedTodo;
		event.target.checked = storedTodo.checked || null
		localStorage.setItem('grabLi.id', JSON.stringify(todoList))
	}

//click additem to create items and append to list
function createTodoItem(todoItemState) { 
	const unorderedList = document.getElementById('list');

	const todoItem = document.createElement('li');   
	const deleteButton = document.createElement('span');
	const checkBox = document.createElement('input');
	
	const txt = document.createTextNode(todoItemState.textContent);
	todoItem.appendChild(txt);
	todoItem.appendChild(deleteButton);
	todoItem.insertBefore(checkBox, txt);
	todoItem.id = todoItemState.id;
	
			// click checkbox for strike through text.
	checkBox.className = "check";
	checkBox.type = "checkbox";
	checkBox.checked = todoItemState.checked;
	checkBox.onclick =  (event) => handleCheckboxClick(event, todoItemState, todoItem);

	lineThrough(todoItem, todoItemState);

	// remove list when delete button is clicked
	deleteButton.innerText = "x";
	deleteButton.className = "Remove";
	deleteButton.onclick = (event) => handleDeleteClick(event, todoItem, todoItemState);

	unorderedList.appendChild(todoItem);
}


function populateExisingList() {
	for (let i = 0; i < todoList.length; i++) { 
		createTodoItem(todoList[i]);
	}
}

function newTaskOnClick (){
	const inputValue = document.getElementById('input').value;
	// if input is blank the if statement will ask user to input task

	if (inputValue === ''){
		alert ('please enter a task');
	}
	else {
		const length = todoList.length;
		const itemId = length === 0 ?  0  :  todoList[length - 1].id + 1; 
		const todoItem = {
			id: itemId,
			textContent: inputValue,
			checked: false,
		}
		todoList.push(todoItem);
		createTodoItem(todoItem)

		localStorage.setItem('grabLi.id', JSON.stringify(todoList));
	}

	//double click item to add nested list
	// todoItem.ondblclick = function addSubTask(event){
	// 	event.stopPropagation();
		
	// 	var subInput = document.createElement("input");  // create and input field
	// 	subInput.className = "subInput";

	// 	var addSubTaskBtn = document.createElement ("span"); //create a button and append to the input
	// 	addSubTaskBtn.innerText = "+";
	// 	addSubTaskBtn.className = "addSubListBtn"
	// 	var subTaskDiv = document.createElement("div"); //create a div container, append the input and span
	// 	subTaskDiv.className = "subDiv";

	// 	subTaskDiv.appendChild(subInput);
	// 	subTaskDiv.appendChild(addSubTaskBtn);
	// 	todoItem.appendChild(subTaskDiv);

	// 	addSubTaskBtn.onclick = function addNestedList (event){
	// 		event.stopPropagation();
	// 		var textContent = subInput.value;
	// 		var nestedLi =document.createElement ("li");
	// 		var txt = document.createTextNode(textContent);

	// 		var nestedLiDelBtn = document.createElement("span")
	// 		nestedLiDelBtn.innerText = "x";
	// 		nestedLiDelBtn.className = "Remove";
	// 		nestedLi.appendChild(txt);
	// 		nestedLi.appendChild(nestedLiDelBtn);
		
	// 		if (textContent === ''){
	// 			alert ('please enter a subtask');
	// 		}
	// 		else{
	// 			subTaskDiv.parentNode.removeChild(subTaskDiv);
				
	// 			todoItem.appendChild(nestedList);
	// 			nestedList.appendChild(nestedLi);
	// 		}

	// 		//click to remove nested list
	// 		nestedLiDelBtn.onclick = function (){
	// 			nestedLi.parentNode.removeChild(nestedLi);
	// 		}
			
	// 	}
	// }

	
}