// Hitta bilden med id="rolexImage"
const image = document.getElementById("rolexImage");


image.addEventListener("mouseenter", function() {
    image.style.transform = "scale(1.1)"; // Zoomar in bilden
    image.style.transition = "transform 0,3s ease-in-out"; // Lägger till en mjuk övergång
});

// Återställ bilden till normal storlek när musen lämnar
image.addEventListener("mouseleave", function() {
    image.style.transform = "scale(1)"; // Återgår till normal storlek
    image.style.transition = "transform 0,3s ease-in-out"; // Lägger till en mjuk övergång
});

// Funktion som gör att knappen ändrar färg när man klickar på den
const button = document.querySelector("button");

button.addEventListener("click", function() {
    button.style.backgroundColor = "#4CAF50"; // Grön färg
    button.textContent = "Clicked!"; // Ändrar texten på knappen
    setTimeout(function() {
        button.style.backgroundColor = "#1d1d1d"; // Tillbaka till originalfärg
        button.textContent = "Divide"; // Återställ texten
    }, 1000); // Efter 1 sekund
});

// Fade-in effekt när sidan laddas
window.addEventListener("load", function() {
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 1s ease-in-out";
    document.body.style.opacity = 1;
});



function foo(input) {
    
    if (typeof input === 'string') {
        return `Jag skickade en text: ${input}`;
    } else if (typeof input === 'number') {
        return `Jag skickade ett nummer: ${input * 2}`; 
    } else {
        return "Jag skickade något annat.";
    }
}


console.log(foo("Hej!")); 
console.log(foo(5));       
console.log(foo(true));    
