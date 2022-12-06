const words = [
    "Software Developer",
    "Data Scientist",
    "Database Administrator",
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

export default function type() {
    if (count === words.length) {
        count = 0;
    }

    currentText = words[count];
    letter = currentText.slice(0, index++)


    document.querySelector("#lang").textContent = letter;

    if (currentText.length === letter.length) {
        count++;
        index = 0;
    }

    setTimeout(type, 200);
}
