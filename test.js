/* 
Acessing object with varible
*/
var testobj = {
    10 : "Sachin",
    07 : "Dhoni",
    18 : "Kohli"
}

var result = testobj[18];
console.log(result);

console.log("==============================================")

/*
Adding,Deleting & Updating object properties (1:53:00)
*/
var Ankita = {
    fName : "Ankita",
    lname : "Shukla",
    Age : 20,
    todel : "Delete Me"
}

Ankita.lname = "Chaudhary"; //Updating lastname

Ankita["state"] = "Bihar"; //Adding new object

delete Ankita.todel; //Deleting objects

console.log(Ankita);

console.log("==============================================")


/* 
Changing switch statement to object and accessing values.
*/
function playerlookup (name) {
    results = "";
    
    PlayserCountry = {
    "Kohli" : "India",
    "MSD"   : "India",
    "ABD"   : "Africa",
    "Imran" : "Pakistan"}
    results = PlayserCountry[name];
    return results;
}

console.log(playerlookup("Kohli"));

console.log("==============================================")

/* Testing objects for Properties */

MyObj = {
    "Gift" : "teddy",
    "Day" : "Birthday",
    "Friend" : 5

}


function MyObjs(Prop) {
    if (MyObj.hasOwnProperty(Prop)) { //hasOwnProperty is a method to check
        return MyObj[Prop];
    }
    else {
        return "Not found"
    }
}
console.log(MyObjs("Gifts"));
 
console.log("==============================================")

/* Manipulating complex objects*/

var myMusic = {
    "Name of Song" : "Boyfriend-Girlfriend",
    "Artist" : "Arijit Singh",
    "Year" : 2019,
    "Release formats" : [
        "Mp4",
        "Mp4",
        "Youtube Videos"
    ]

}
console.log(myMusic["Release formats"]);

console.log("==============================================")

var MySchool = {
    "Class9" : {
        "No of Students" : 50,
        "Present" : 49,
        "Absent" : 1
    },
    "Class10" : {
        "No of Students" : 55,
        "Present" : 45,
        "Absent" : 10

    },
    "Class11" : {
        "Stream" : [
            "Science", "Commerce", "Arts"
        ],
        "No of Students" : 55,
        "Present" : 45,
        "Absent" : 10
    }
}
console.log(MySchool.Class9["No of Students"]);
console.log(MySchool.Class11.Stream);

console.log("==============================================")
/*Creating and Accessing Nested Objects*/
var Plants = [
    {"Type" : "Fruit",
    "list" : [
        "Pine",
        "Apple",
        "Mango"
    ]},
    {"Type" : "Flower",
    "list" : [
        "Lily",
        "Rose",
        "Lotus"
    ]

    }

]
console.log(Plants[1].list[1]);

console.log("==============================================")


