var collection = {
    "1" : {
        "song" : "Tu safar",
        "artist" : "Arijit",
        "year" : 2018
    },
    "2" : {
        "song": "Naino wale ne",
        "artist" : "Monali Thakur",
        "Year" : 2018
    }
}
function updateprop(id, prop, value){

    if (value === ""){
        delete collection[id][prop];
        
    }
    else if (value === "year"){
        collection[id][prop] = collection[id][prop] || [""];
        collection[id][peop].push(value);
    }
    else {
        collection[id][prop] = value;
    }
    return collection;
}

console.log(updateprop("2","Copy","Subhash"));