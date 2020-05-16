const firstName = "Patryk";
const number = 600;

console.log(`Siema! Jestem ${firstName}, witam na mojej stronie :)`);
console.log(`Pozdro ${number}!`);

const heading = document.querySelector(".main__heading--js");
heading.innerHTML = `Mam na imię ${firstName}.`;
