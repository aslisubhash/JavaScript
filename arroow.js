/* Objective 
1. Create an array with 6 objects.
2. assign true and false boolean values to each object.
3. filter true cases
4. print only title of true cases. [I DONT KNOW HOW TO DO THAT]

*/

const myTodos = [{
    title : "watch yt videos",
    isDone : false
},{
    title : "eat",
    isDone : true
},{
    title : "chat",
    isDone : true
},{
    title : "listen music",
    isDone : true
},{
    title : "movies",
    isDone : false
},{
    title : "Bathroom",
    isDone : true
}]
const filttodo = myTodos.filter(todo => todo.isDone === true)
console.log(filttodo);
