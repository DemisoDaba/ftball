document.addEventListener("DOMContentLoaded", function() {
    const predictionsContainer = document.getElementById("predictions");
    const apiKey = '044f9a476974465db3e0bbcf207e251e';
    const apiUrl = 'https://api.football-data.org/v4/matches';

    fetch(apiUrl, {
        headers: {
            'X-Auth-Token': apiKey
        }
    })
    .then(response => response.json())
    .then(data => {
        data.matches.forEach(match => {
            const matchDiv = document.createElement("div");
            matchDiv.classList.add("match");
            matchDiv.innerHTML = `
                <h2>${match.homeTeam.name} vs. ${match.awayTeam.name}</h2>
                <p>Kickoff: ${match.utcDate}</p>
            `;
            predictionsContainer.appendChild(matchDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        predictionsContainer.innerHTML = "<p>Error fetching data. Please try again later.</p>";
    });
});
