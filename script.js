// LOSOWE TŁO
function randomBackground() {
    const colors = [
        "#1abc9c", "#3498db", "#9b59b6",
        "#e67e22", "#e74c3c", "#2c3e50"
    ];
    document.body.style.background =
        colors[Math.floor(Math.random() * colors.length)];
}

// LOSOWY CYTAT
function randomQuote() {
    document.getElementById("quote").textContent =
        quotes[Math.floor(Math.random() * quotes.length)];
}

// LOGOWANIE (reset po odświeżeniu)
const loginBtn = document.getElementById("loginBtn");
const welcomeText = document.getElementById("welcomeText");

loginBtn.addEventListener("click", () => {
    const login = prompt("Podaj login:");
    if (login) {
        welcomeText.textContent = `Witaj ${login}`;
        loginBtn.style.display = "none";
    }
});

// RENDER TABELI
function renderGamesTable(data) {
    const tbody = document.querySelector("#gamesTable tbody");
    tbody.innerHTML = "";

    data.forEach(game => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><img src="${game.okladka}" alt="Okładka ${game.nazwa}"></td>
            <td>${game.nazwa}</td>
            <td>${game.opis}</td>
            <td>${game.rok}</td>
            <td>${game.sprzedaneKopie}</td>
        `;
        tbody.appendChild(row);
    });
}

// FILTR NA ŻYWO
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("input", () => {
    const text = searchInput.value.toLowerCase();
    const filteredGames = games.filter(game =>
        game.nazwa.toLowerCase().includes(text)
    );
    renderGamesTable(filteredGames);
});

// START
randomBackground();
randomQuote();
renderGamesTable(games);
