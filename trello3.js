myTodos = {
    day : 'Monday',
    meetings : 0,
    meetDone : 0,
    addMeeting : function (num){
        this.meetings =  this.meetings + num
    },
    doneMeet : function (num) {
        this.meetDone = this.meetDone - num;
    },
    meetReset : function () {
        this.meetings = 0;
        this.meetDone = 0;
    },
    meetSumm : function (num) {
        meetLeft = this.meetings + this.meetDone
        return `You have ${meetLeft} meetings left.`
    }
}
myTodos.addMeeting(20);
myTodos.doneMeet(10);
myTodos.meetReset()
console.log(myTodos.meetSumm())


