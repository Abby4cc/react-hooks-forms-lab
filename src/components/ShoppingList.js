import React, { useState } from "react";
import Item from "./Item";
import ItemForm from "./ItemForm";
import Filter from "./Filter";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [itemsList, setItemsList] = useState(items);

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleSearchChange(searchValue) {
    setSearch(searchValue);
  }

  function handleItemFormSubmit(newItem) {
    setItemsList([...itemsList, newItem]);
  }

  const itemsToDisplay = itemsList.filter((item) => {
    return (
      (selectedCategory === "All" || item.category === selectedCategory) &&
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter
        search={search}
        onSearchChange={handleSearchChange}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
