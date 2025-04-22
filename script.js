const paragraph = document.getElementById("sug1");
const numPar = document.getElementById("numPar");
const wordPerPar = document.getElementById("sug2");
const numWord = document.getElementById("numWord");
const selectTag = document.getElementById("tags");
const insertHtml = document.getElementById("insertHtml");
const button = document.getElementById("generate");
const result = document.getElementById("textarea");

const Tag = ["p", "h1", "h2", "h3", "h4", "h5", "h6", "span", "div"];

selectTag.innerHTML = Tag.map((tag) => {
    return `<option value="${tag}">${tag}</option>`
}).join("");

const text = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, vel, laborum expedita necessitatibus eligendi consequuntur repellendus ipsum repellat rem neque voluptas possimus facilis, suscipit voluptatibus deleniti laudantium fugit cum aspernatur sed. Doloremque pariatur ipsa excepturi ea quod ad asperiores esse. Repellendus saepe, at velit quae adipisci aperiam doloribus sint officiis dignissimos libero ducimus blanditiis quidem a magnam eveniet officia beatae quibusdam praesentium numquam architecto consequatur, expedita voluptates. Eligendi laudantium consequatur nam. Facere doloremque, deleniti dicta possimus vitae ut pariatur temporibus architecto, tenetur sapiente at delectus, vel rerum ea perspiciatis harum voluptatibus quod natus! Hic consectetur, similique nesciunt illo facere natus!`;
const textArray = text.split(" ");

paragraph.addEventListener("input", () => {
    const value = parseInt(paragraph.value);
    if (value > 0 && value < 101) {
        numPar.textContent = value;
        numPar.style.opacity = 1;
    }
});

wordPerPar.addEventListener("input", () => {
    const value = parseInt(wordPerPar.value);
    if (value > 0 && value < 101) {
        numWord.textContent = value;
        numWord.style.opacity = 1;
    }
});

button.addEventListener("click", function(event) {
    event.preventDefault();

    const paragraphValue = parseInt(paragraph.value);
    const wordPerParValue = parseInt(wordPerPar.value);
    const tagValue = selectTag.value;
    const htmlOption = insertHtml.options[insertHtml.selectedIndex].text;

    let output = "";

    for (let i = 0; i < paragraphValue; i++) {
        let paragraphText = "";

        for (let j = 0; j < wordPerParValue; j++) {
            const randomIndex = Math.floor(Math.random() * textArray.length);
            paragraphText += textArray[randomIndex] + " ";
        }

        if (htmlOption === "yes") {
            output += "<" + tagValue + ">" + paragraphText + "</" + tagValue + ">";
        } else {
            output += paragraphText + "\n\n";
        }
    }

    result.value = output;
});
