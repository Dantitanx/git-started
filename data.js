const title = "Egri csillagok";
console.log(title);

const author = "Gárdonyi Géza";
console.log(author);

const year = 1899;
console.log(year);

let isNewerThan2000 = false;
console.log(isNewerThan2000);

let age = 2024 - year;
console.log(age);

const characters = ["Jumurdzsák", "FÜrjes Ádám", "Dobó István", "Bornemissza Gergely"];

for (let i = 0; i < characters.length; i++) {

    console.log(characters[i]);
}

console.log();  //jobb láthatóság
console.log();

for (let i = 0; i < characters.length - 2; i++) {

    console.log(characters[i]);
}
