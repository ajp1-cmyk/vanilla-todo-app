document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.querySelector("dialog");
  const addTask = document.querySelector(".add");
  const submitTodo = document.querySelector(".submit");
  const close = document.querySelector(".close");

  addTask.addEventListener("click", () => {
    dialog.showModal();
  });

  submitTodo.addEventListener("click", () => {
	handleSubmit();
  });

  close.addEventListener("click", () => {
    dialog.close();
  });

  async function handleSubmit() {
	const input = document.querySelector(".todo");
	const content = input.value;

	await fetch("http://localhost:3000/api/todos/add", {
	  // Adding method type
	  method: "POST",

	  // Adding body or contents to send
	  body: JSON.stringify({
		title: "todo",
		content: content,
	  }),

	  // Adding headers to the request
	  headers: {
		"Content-type": "application/json; charset=UTF-8",
	  },
	});

	console.log("sucessful entry to database");

	location.reload();
	dialog.close();
  }

});

