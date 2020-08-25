let todos = []

const input = prompt("What would you like to do?")

while(input !== "quit") {
    if(input === "new") {
        let newTodo = prompt("Enter new todo")
        todos.push(newTodo)
    } else if(input === "list") {
        console.log(todos)
    }
}
console.log("OK, YOU QUIT THE APP!")