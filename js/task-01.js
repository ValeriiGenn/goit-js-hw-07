const categoryListRef = document.querySelectorAll("li.item");
console.log(`В списке ${categoryListRef.length} категории.`);

const categoryRef = document.querySelectorAll("li.item");
categoryRef.forEach((category) => {
    console.log("Категория :", category.firstElementChild.textContent);
    console.log(
        "Kоличество элементов:",
        category.lastElementChild.children.length
    );
});