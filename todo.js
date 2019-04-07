

 function newTask(){
    
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
	todoItem.appendChild(Del);
	todoItem.insertBefore(box, txt);
	 
	if (inputValue === ''){
		alert ('please enter a task');
	}
	else {
		document.getElementById('list').appendChild(li);
	}
    document.getElementById('input').value;
     
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