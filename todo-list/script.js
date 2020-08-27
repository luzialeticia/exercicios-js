let todos = []

let input = prompt("What would you like to do?")

while(input !== "quit") {
    if(input === "list") {
        todos.forEach(function print(todo, index){
            console.log(`${index}: ${todo}`)
        })
    } else if(input === "new") {
        let newTodo = prompt("Enter new todo")
        todos.push(newTodo)
    } else if(input === "delete") {
        let index = parseInt(prompt("What the Todo's index that you want to delete?"))
        todos.splice(index, 1)
        console.log("The Todo has been deleted.")
    }
    input = prompt("What would you like to do?")
}
console.log("OK, YOU QUIT THE APP!")