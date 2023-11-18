// Langsung copy dari spreadsheet masukkan di sini
// JANGAN LUPA LIST 100
const masukkanDiSini = `@southerntw
@southerntw
@southerntw
@southerntw
@southerntw`;

const usernames = masukkanDiSini.split('\n');
const desiredUsernames = usernames.map(username => username.replace('@', ''));
const hackerNameElements = document.querySelectorAll('.leaderboard-hackername');
const foundUsernames = [];
hackerNameElements.forEach(element => {
    const username = element.textContent.trim();
    if (desiredUsernames.includes(username)) {
        element.style.backgroundColor = 'yellow';
        element.style.color = 'black';
        foundUsernames.push(username);
    }
});

desiredUsernames.forEach(desiredUsername => {
    if (!foundUsernames.includes(desiredUsername)) {
        console.log("Username belum submit:", desiredUsername);
    }
});

