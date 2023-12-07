const form = document.querySelector(".inputbox");
const list = document.querySelector(".list");

form.addEventListener("submit", function(e){
	e.preventDefault();
	
	const todo = e.target[0].value;
	e.target[0].value = "";
	console.log(todo);
	
	if(todo !== ""){
		
	const li = document.createElement('li');
	li.className = "todo";
	li.innerHTML = 
	`<div>
	  			<span> ${todo} </span>
	  			<button class="btn done"> DONE </button>
	  			<button class="btn remove"> REMOVE </button>
	</div> `;
	
	list.appendChild(li);
	
	li.addEventListener("click", function(e){
		if(e.target.textContent === " DONE "){
			const text = e.target.previousElementSibling;
			text.style.textDecoration = "line-through"
		}
		else if(e.target.textContent === " REMOVE "){
			const list = e.target.parentNode.parentNode;
			list.remove();
		}
	});
	
	}
});
