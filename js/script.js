{
   const tasks = [
      {
         content: "Umyć samochód",
         done: false,
      },
      {
         content: "Zrobić obiad",
         done: true,
      },
   ];

   const addNewTask = (newTaskContent) => {
      tasks.push({
         content: newTaskContent,
      });

      render();
   };

   const removeTask = (taskIndex) => {
      tasks.splice(taskIndex, 1);
      render();
   };

   const toggleTaskDone = (taskIndex) => {
      tasks[taskIndex].done = !tasks[taskIndex].done;
      render();
   };

   const bindEvents = () => {
      const removeButtons = document.querySelectorAll(".js-remove")

      removeButtons.forEach((removeButton, index) => {
         removeButton.addEventListener("click", () => {
            removeTask(index);
         });
      });

      const toggleDoneButtons = document.querySelectorAll(".js-done")

      toggleDoneButtons.forEach((toggleDoneButton, index) => {
         toggleDoneButton.addEventListener("click", () => {
            toggleTaskDone(index);
         });
      });
   };

   const render = () => {
      let htmlString = "";

      for (const task of tasks) {
         htmlString += `
         <li class="list__item" ${task.done ? " style=\"text-decoration: line-through\" " : ""}>
         <button class="js-done 
            ${task.done ? "buttonToggleTrue" : "buttonToggleFalse"}"></button>
         <span class="list__content">${task.content}</span>
         <button class="buttonRemove js-remove"></button>   
            </li>
         `;
      }

      document.querySelector(".js-tasks").innerHTML = htmlString;

      bindEvents();
   };

   const onFormSubmit = (event) => {
      event.preventDefault();

      const newTaskInput = document.querySelector(".js-newTask");
      const newTaskContent = newTaskInput.value.trim();

      if (newTaskContent === "") {
         newTaskInput.focus();
         return;
      }

      addNewTask(newTaskContent);
      newTaskInput.value = "";
      newTaskInput.focus();
   }

   const init = () => {
      render();

      const form = document.querySelector(".js-form");

      form.addEventListener("submit", onFormSubmit);
   };

   init();

}