const newTodo = [{
    name :"Subhash",
    status : "Topper"
},{
    name : "Uttam",
    status : "friend"
},{
    name : "Neelam",
    status : "Mother"
}
]
console.log("Method 1");
const index = newTodo.findIndex(function(todo, index){
    return todo.name === "Uttam"
})
console.log(index);

console.log("Method 2");

const findTodo2 = function (mytodo, name){
    const index = mytodo.findIndex(function(todo, index){
        return todo.name.toLowerCase() === name.toLowerCase()
    })
    return mytodo[index]
}

console.log(findTodo2(newTodo, "subhash"));

console.log("Method 3");


const findTodo3 = function (mytodo, name){
    const titleReturned = mytodo.find(function(todo, index){
        return todo.name.toLowerCase() === name.toLowerCase() 
    })
    return titleReturned
}
console.log(findTodo3(newTodo,"suBhash"));
