todo = [];
doing = [];
done = [];

function addTask(){
    // Acquire id from a prompt box
    let id_task = prompt("Inserisci l'id del task");
    // Acquire name from a prompt box
    let nome_task = prompt("Inserisci il nome del task");
    // Acquire description from a prompt box
    let desc_task = prompt("Inserisci la descrizione del task");
    let task = {
        id: id_task,
        name: nome_task,
        description: desc_task
    };
    todo.push(task);
    showTasks();
}


function showTasks(){

    let todo_list = document.getElementById("todo");
    str_HTML = "";
    for (const todo_task of todo){
        str_HTML += "<li>" + todo_task.id + " - " + todo_task.name + " - " + todo_task.description + "</li>";
    }
    todo_list.innerHTML = str_HTML;

    let doing_list = document.getElementById("doing");
    str_HTML = "";
    for (const doing_task of doing){
        str_HTML += "<li>" + doing_task.id + " - " + doing_task.name + " - " + doing_task.description + "</li>";
    }
    doing_list.innerHTML = str_HTML;

    

}
