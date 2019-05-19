function newTaskOnKeyPress(){
    newTaskOnClick;
}

function newTaskOnClick (){
    
//click add to create items and append to list

	var todoItem = document.createElement('li');   
	var deleteButton = document.createElement('span');
	var checkBox = document.createElement('input');

	checkBox.className = "check";
	checkBox.type = "checkbox";
	deleteButton.innerText = "x";
	deleteButton.className = "Remove";
	 
	var inputValue = document.getElementById('input').value;
	var txt = document.createTextNode(inputValue);
	todoItem.appendChild(txt);
	todoItem.appendChild(deleteButton);
	todoItem.insertBefore(checkBox, txt);
	 
<<<<<<< HEAD
=======

	// if input is blank the if statement will ask user to input task

>>>>>>> subTask
	if (inputValue === ''){
		alert ('please enter a task');
	}
	else {
<<<<<<< HEAD
		document.getElementById('list').appendChild(todoItem);
	}
    document.getElementById('input').value;
     
=======
		todoList.appendChild(todoItem);


		//give unique id to each list item.

		var grabList = document.querySelectorAll('li');
		for (var i = 0; i < grabList.length; i++){
			var grabLi = grabList[i];
		}
		grabLi.id = 'item' + i;
	}
	document.getElementById('input').value;
	storeItems();
	 
		
>>>>>>> subTask
	// hide list when delete button is clicked
	 
	deleteButton.onclick = function(){
		todoItem.style.display = "none";
	}
		 
	//checked box create line-through effect on list.
	checkBox.onclick = function(){
		if (todoItem.style.textDecoration === "line-through"){
			todoItem.style.textDecoration = "none";
		}
		else {
			todoItem.style.textDecoration = "line-through";
		}
	}
 
}