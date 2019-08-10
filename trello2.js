 //Create object mytodos
let myTodos = {
    Day : "Monday",
    meeting : 0,
    meetDone :0
}


 //create funtion to add meeting
let meetAdd = function(todos, meet =0){
    todos.meeting = todos.meeting + meet
}

 
 //create meet done funtion
let meetDone = function(todos, meet =0) {
    todos.meetDone = todos.meetDone - meet
}


 //create reset todo
let meetReset = function(todos){
    meeting = 0;
    meetDone = 0;
}



 //create summary of the day

 let daySumm = function(todos) {
     meetleft = todos.meeting + todos.meetDone
     return `You have ${meetleft} meetings left.`
 }

 meetAdd(myTodos, 10)
 meetDone(myTodos,5)
 console.log(daySumm(myTodos));