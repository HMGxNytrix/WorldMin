document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let status = document.getElementById("status");

    if(name.trim() === "") {
        status.style.color = "red";
        status.textContent = "Musisz wpisać swoje imię!";
    } else {
        status.style.color = "lightgreen";
        status.textContent = "Wiadomość wysłana! Dzięki, " + name + "!";
    }
    console.log("Sekcja pobierania gry WikuZone załadowana!");

});
