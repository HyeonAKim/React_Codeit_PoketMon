import { useState } from "react";
import mockItems from "./pokemons.json";

function Pokemom({ item, onDelete }) {
  const handleDeleteClick = () => onDelete(item.id);
  return (
    <div>
      No.{item.id} {item.name}
      <button onClick={handleDeleteClick}>삭제</button>
    </div>
  );
}

function App() {
  const [items, setItems] = useState(mockItems);
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const [order, setOrder] = useState(1);
  const handleAscClick = () => setOrder(1);
  const handleDescClick = () => setOrder(-1);
  const sortedItem = items.sort((a, b) => order * (a.id - b.id));

  return (
    <>
      <div>
        <button onClick={handleAscClick}>오름차순</button>
        <button onClick={handleDescClick}>내림차순</button>
      </div>
      <ul>
        {sortedItem.map((item) => (
          <li key={item.id}>
            <Pokemom item={item} onDelete={handleDelete}></Pokemom>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
