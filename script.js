console.log("JS loaded successfully");


// Våra variabler
let completedCount = 0;
let totalTasks = 0;
const array = [];


// Våra HTML-element
const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");
const label = document.querySelector("p");


// Uppdaterar klara uppgifter och hur många uppgifter
function numberOfTasksDone() {
    label.innerText = `${completedCount}/${totalTasks} completed tasks`;
}


// Vad som händer när vi klickar OK
button.addEventListener("click", function () {

    // Hämta text från input
    // Test med input.value funkar med bara mellanslag.
    const text = input.value;
    if (input.value == 0) {
        input.placeholder = "Input must not be empty";
        return;
    }


    // Lägger till text i array
    array.push(text);


    // Lägg till vår text i ToDo (ul)
    const item = document.createElement("li");
    item.setAttribute("class", "notCompleted");
    list.appendChild(item);
    const itemLabel = document.createElement("span");
    itemLabel.innerText = text;
    item.appendChild(itemLabel);
    totalTasks++;


    // Trashcan och remove
    const trashcan = document.createElement("span")
    trashcan.innerHTML = "&#x1F5D1";
    trashcan.setAttribute("class", "trashcan");
    item.appendChild(trashcan);


    // Lägg till klick på våra todos i listan
    itemLabel.addEventListener("click", function () {
        if (item.getAttribute("class") == "completed") {
            item.setAttribute("class", "notCompleted");
            completedCount--;
        }
        else {
            item.setAttribute("class", "completed");
            completedCount++;
        }
        numberOfTasksDone();

    }, false);




    // Lägg till klick på vår trashcan
    trashcan.addEventListener("click", function () {

        // Tar bort från array
        let index = array.findIndex(x => x === itemLabel.innerText);
        array.splice(index, 1);

        // Tar bort från vår lista
        if (item.getAttribute("class") == "completed") {
            completedCount--;
        }
        totalTasks--
        item.remove();
        numberOfTasksDone();
    }, false)


    numberOfTasksDone()

    //Nollställa input
    input.value = '';


}, false);


