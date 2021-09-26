const ingredients = [
    "Картошка",
    "Грибы",
    "Чеснок",
    "Помидоры",
    "Зелень",
    "Приправы",
];
const listUl = document.getElementById("ingredients");
const elemLi = ingredients.map((ingredient) => {
    const item = document.createElement("li");
    item.textContent = ingredient;

    return item;
});

listUl.append(...elemLi);
console.log(listUl);