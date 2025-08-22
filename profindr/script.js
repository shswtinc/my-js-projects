let searchInput = document.querySelector("input");
let allCards = document.querySelectorAll(".profile_card");

searchInput.addEventListener("input", function() {
    let searchTerm = searchInput.value.toLowerCase();
    
    for (let card of allCards) {
        let nameElement = card.querySelector(".name");
        let name = nameElement.textContent.toLowerCase();
        
        if (name.includes(searchTerm)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    }
});