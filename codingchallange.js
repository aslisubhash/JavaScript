var contacts = [
    {
        "Name" : "Subhash",
        "Number" : "9123187812",
        "Passion" : "Programmer"
    },
    {
        "Name" : "Uttam",
        "Number": "8298959995",
        "Passion" : "MBA"
    },
    {
        "Name" : "Kriti",
        "Number": "8298959999",
        "Passion" : "MBA"
    },
    {
        "Name" : "Subham",
        "Number": "82958959998",
        "Passion" : "MBA"
    }
]
function phonelookup(names, prop) {
    for (var i = 0; i < contacts.length; i++){
      if (contacts[i].Name===names) {
          return contacts[i][prop] || "Contact Not found";
      }
    
        
    }
    return "no such id";

}
console.log(phonelookup("Uttam", "Number"));