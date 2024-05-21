const taskList = document.querySelector("#task-list");
const addTaskBtn = document.querySelector("#add-task-button");
const addTaskInput = document.querySelector("#add-task-input");

addTaskBtn.addEventListener("click", () => {
    const taskItems = `<li class="task-list-item">
            <span>${addTaskInput.value}</span>
            <button type="button" class="delete-button" onclick="deleteTask(this)">Delete</button>
        </li>`;

    taskList.innerHTML += taskItems;
    addTaskInput.value = "";
    addTaskInput.focus();
});

const deleteTask = (element) => {
    const listItem = element.closest(".task-list-item");
    taskList.removeChild(listItem);
};

const editTask = (element) => {
    const spanElement = element.querySelector("span");
    const inputValue = spanElement.innerText;
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.className = "add-task-input";
    newInput.value = inputValue;
    spanElement.replaceWith(newInput);
    console.log(element, newInput, inputValue);
};
