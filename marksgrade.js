function gradecent (currentMarks, totalMarks) {
    var percent = (currentMarks/totalMarks)*100;
    
    myGrade = ""
    if (percent>=90) {
        myGrade = "Grade A"
    }
    else if (percent<=90) {
        myGrade = "Grade B"
    }
    else if (percent<=70) {
        myGrade = "Grade D"
    }
    else if (percent<=60) {
        myGrade ="Grade E"
    }
    else {
        myGrade = "Grade F"
    }
    return `Your total percent is ${percent} and You have ${myGrade}`
}
console.log(gradecent("ABB",200))