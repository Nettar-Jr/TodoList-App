

 //click add to create items and append to list

 function newTask(){
	
	var li = document.createElement('li');
	var Del = document.createElement('span');
	var box = document.createElement('input');

	box.className = "check";
	box.type = "checkbox";
	Del.innerText = "x";
	Del.className = "Remove";
	 
	 var inputValue = document.getElementById('input').value;
	 var txt = document.createTextNode(inputValue);
	 li.appendChild(txt);
	 li.appendChild(Del);
	 li.insertBefore(box, txt);
	 
	 if (inputValue === ''){
		 alert ('please enter a task');
	 }
	 else {
		 document.getElementById('list').appendChild(li);
	 }
	 document.getElementById('input').value;
	 // hide list when delete button is clicked
	 
		 Del.onclick = function(){
			 li.style.display = "none";
		 }
		 
	//checked box create line-through effect on list.
		box.onclick = function(){
			if (li.style.textDecoration === "line-through"){
				li.style.textDecoration = "none";
			}
			else {
				li.style.textDecoration = "line-through";
			}
		}
 
}