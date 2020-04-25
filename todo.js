
//click additem to create items and append to list

function newTaskOnClick (){

	//create item, delete button and checkbox 

	var todoList = document.getElementById('list');

	var todoItem = document.createElement('li');   
	var deleteButton = document.createElement('span');
	var checkBox = document.createElement('input'); 

	const todoArray = []  // This is where we will be storing our toddoitmes in other to not loose them when we close the browser

	var nestedList = document.createElement ("ul");  //create an unorganise list
	nestedList.className = "nestedList";			// this will be appended to "todoItem" later

	checkBox.className = "check";
	checkBox.type = "checkbox";
	deleteButton.innerText = "x";
	deleteButton.className = "Remove";


	//append and insert text node, delete button  and check box

	var inputValue = document.getElementById('input').value;
	var txt = document.createTextNode(inputValue);
	todoItem.appendChild(txt);
	todoItem.appendChild(deleteButton);
	todoItem.insertBefore(checkBox, txt);
	 

	// if input is blank the if statement will ask user to input task

	if (inputValue === ''){
		alert ('please enter a task');
	}
	else {
		todoList.appendChild(todoItem);


		//give unique id to each list item.

		var grabList = document.querySelectorAll('li');
		for (var i = 0; i < grabList.length; i++){
			var grabLi = grabList[i];
		}
		grabLi.id = 'item' + i;

		localStorage.setItem('grabLi.id', JSON.stringify(todoAray));
		var data = JSON.parse(localStorage.getItem("grabLi.id"))
	}
	document.getElementById('input').value;
		
	 
		
	// remove list when delete button is clicked
	deleteButton.onclick = function(event){
		event.stopPropagation();
		todoItem.parentNode.removeChild(todoItem);	
	}
	
	// click checkbox for strike through text.
	checkBox.onclick = function(event){
		event.stopPropagation();
		if (todoItem.style.textDecoration === "line-through"){
			todoItem.style.textDecoration = "none";
		}
		else {
			todoItem.style.textDecoration = "line-through";
		}
	}

	//double click item to add nested list
	todoItem.ondblclick = function addSubTask(event){
		event.stopPropagation();
		
		var subInput = document.createElement("input");  // create and input field
		subInput.className = "subInput";

		var addSubTaskBtn = document.createElement ("span"); //create a button and append to the input
		addSubTaskBtn.innerText = "+";
		addSubTaskBtn.className = "addSubListBtn"
		var subTaskDiv = document.createElement("div"); //create a div container, append the input and span
		subTaskDiv.className = "subDiv";

		subTaskDiv.appendChild(subInput);
		subTaskDiv.appendChild(addSubTaskBtn);
		todoItem.appendChild(subTaskDiv);

		addSubTaskBtn.onclick = function addNestedList (event){
			event.stopPropagation();
			var textContent = subInput.value;
			var nestedLi =document.createElement ("li");
			var txt = document.createTextNode(textContent);

			var nestedLiDelBtn = document.createElement("span")
			nestedLiDelBtn.innerText = "x";
			nestedLiDelBtn.className = "Remove";
			nestedLi.appendChild(txt);
			nestedLi.appendChild(nestedLiDelBtn);
		
			if (textContent === ''){
				alert ('please enter a subtask');
			}
			else{
				subTaskDiv.parentNode.removeChild(subTaskDiv);
				
				todoItem.appendChild(nestedList);
				nestedList.appendChild(nestedLi);
			}

			//click to remove nested list
			nestedLiDelBtn.onclick = function (){
				nestedLi.parentNode.removeChild(nestedLi);
			}
			
		}
	}

	
}