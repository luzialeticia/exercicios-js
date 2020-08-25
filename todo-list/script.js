let todos = []

const input = prompt("What would you like to do?")

if(input === "new") {
    let newTodo = prompt("Enter new todo")
    todos.push(newTodo)
} else if(input === "list") {
    console.log(todos)
}