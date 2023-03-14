
{
    const tasks = [
        {
            content: "Wystylować CSS listy zadań",
            done: true,
        },
        {
            content: "stworzyć button `toggle` zakończonego zadania",
            done: true,
        },
        {
            content: "stworzyć button `delete` zadania",
            done: false,
        },
    ];

    const render = () => {
        let htmlString = "";

        for(const task of tasks) {
            htmlString += `
                <li
                    class="js-list__item ${task.done ? "js-list__item--done" : ""}"
                >
                    ${task.done 
                        ? "<img class=js-greenToggle src=\"img/greenBird.png\">" 
                        : "<img class=js-greenToggle src=\"img/greenFullColor.png\">"} 
                
                   ${task.content}
                  
                     <img class=js-redDelete src=img/redDelete.png>
                   <hr>
                </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML= htmlString;

    };

    const init = () => {
        render();
    };
    
    init();
}