
//click add to create items and append to list

function newTaskOnClick (){

	//create item, delete button and checkbox

	var todoList = document.getElementById('list');

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
	 
		
	// hide list when delete button is clicked
	deleteButton.onclick = function(event){
		event.stopPropagation();
		todoItem.parentNode.removeChild(todoItem);	
		
		storeItems();
	}
		 

	//checked box create line-through effect on list.
	checkBox.ondblclick = function(event){event.stopPropagation();} // this stops the checkbox from perfprming and action on double click.
	
	checkBox.onclick = function(event){
		event.stopPropagation();
		if (todoItem.style.textDecoration === "line-through"){
			todoItem.style.textDecoration = "none";
		}
		else {
			todoItem.style.textDecoration = "line-through";
		}
	}

	// save list to system local storage
	var storedIitems;
	function storeItems(){
		storedIitems = localStorage.setItem("task", list.innerHTML)
	}

	//get list from local storage
	function getItems(){
		storedIitems = JSON.parse(localStorage.getItem("task"));
		if (!list){
			list = [];
		}
		else{
		
		list.innerHTML = storedIitems;
		} 
	}
	//getItems();

	//double click item to add nested list
	

	// click to edit your task
	todoItem.onclick = function editItem(){

		var itemEdit = document.createElement("input");
		itemEdit.type = "text";

		todoItem.textContent = (itemEdit.value);

	}
	
}