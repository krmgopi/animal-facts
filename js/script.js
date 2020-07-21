// Get ID 
let btn = document.getElementById('getFacts');

// Add Event Listener
btn.addEventListener('click', getFacts);

// Load window
window.onload = getFacts();
var facts = [];


function getFacts(){
    facts = [{id: 1, name: "Lion", description: "King of the Jungle", image:"images/lion.jpg"},
             {id: 2, name: "Tiger", description: " Largest member of the cat family", image:"images/tiger.jpg"},
             {id: 3, name: "Crocodile", description: "King of River", image:"images/croc.jpg"},
             {id: 4, name: "Bear", description: "Black bears can run at the speed up to 35mph", image:"images/bear.jpg"},
             {id: 5, name: "Wolf", description: "Wolves are the largest members of the dog family", image:"images/wolf.jpg"}];
    
    var randNumber = Math.floor(Math.random() * facts.length);
    console.log("rand is" + " " + randNumber);
    document.getElementById('animalName').innerHTML = facts[randNumber].name;
    document.getElementById('description').innerHTML = facts[randNumber].description;
    document.getElementById('animalImage').src = facts[randNumber].image;    
}