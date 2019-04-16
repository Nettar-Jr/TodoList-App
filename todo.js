
//press enter to create items and append to list
function newTaskOnKeyPress(){
    newTaskOnClick;
}

//click add to create items and append to list
function newTaskOnClick (){

	//create item, delete button and checkbox
	var todoItem = document.createElement('li');   
	var deleteButton = document.createElement('span');
	var checkBox = document.createElement('input'); 

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
		var todoList = document.getElementById('list');
		todoList.appendChild(todoItem);

		//give unique id to each list item.
		var grabList = document.querySelectorAll('li');
		for (var i = 0; i < grabList.length; i++){
			var grabLi = grabList[i];
		}
		grabLi.id = 'item' + i;
	}
	document.getElementById('input').value;
	
     
	// hide list when delete button is clicked
	 
	deleteButton.onclick = function(event){
		event.stopPropagation();
		todoItem.style.display = "none";
	}
		 
	//checked box create line-through effect on list.
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
	// var nestedList = document.createElement('ul');
	// var nestedItem = document.createElement('li');
	// var nestedInputValue = document.createElement('input').value;
	// var nestedTxt = document.createTextNode(nestedInputValue);
	// nestedItem.appendChild(nestedTxt);
	// todoItem.ondblclick = function (event){
	// 	event.stopPropagation();
	// 	nestedList.appendChild(nestedItem);
	// 	if ("span" in todoItem){
	// 		console.log("it works");
	// 		// event.stopImmediatePropagation();
	// 		// event.stopPropagation();
	// 	}
	// 	else{
	// 		event.target.insertAdjacentHTML ("afterEnd", nestedList, true);
	// 	}
	// }
}