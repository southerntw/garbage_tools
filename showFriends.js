// Langsung copy dari spreadsheet masukkan di sini
// JANGAN LUPA LIST 100
const masukkanDiSini = `@nurulwahdania182
@erwinsisy
@fadhilahmazzahr1
@nfahrisalim
@salsabilaz23h
@IvanBetrandi
@akunnyadirga
@rahmanmka23h
@areliopalinoan
@Hamdi070705
@wahidan23h
@fauzanalwan193`;

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

if (foundUsernames.length == 0) {
    console.log("Belum ada yang submit!")
} else {
    console.log("Total yang submit:", foundUsernames.length, "Praktikan")
}

