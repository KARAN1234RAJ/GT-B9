// Imperative
// const list = document.createElement("ul");
// document.body.appendChild(list);

// const items = ["Item 1", "Item 2", "Item 3"];
// items.forEach((item) => {
//   const listItem = document.createElement("li");
//   listItem.textContent = item;
//   list.appendChild(listItem);
// });

//Declarative
const items = ["Item 1", "Item 2", "Item 3"];

function ItemList() {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

ItemList()