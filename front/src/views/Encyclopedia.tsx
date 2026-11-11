import { useEffect, useState } from 'react';
import ItemCard from '../components/ItemCard';
import items from '../data/item';
import type { Item } from '../types/items';

function Encyclopedia() {
  const [gameItems, setGameItems] = useState<Item[]>([]);
  const [inputFilter, setinputFilter] = useState('');
  const [selectGame, setSelectGame] = useState('botw');
  const games = ['botw', 'totk'];

  useEffect(() => {
    async function setItems() {
      const Allitems = await items(selectGame);
      setGameItems(Allitems);
    }
    setItems();
  }, [selectGame]);

  const itemsSort = gameItems.filter((item) =>
    item.name
      .toLocaleLowerCase()
      .includes(inputFilter.toLocaleLowerCase().trim()),
  );

  return (
    <main>
      <h1>The Encyclopedia of Hyrule</h1>
      <input
        value={inputFilter}
        onChange={(e) => setinputFilter(e.target.value)}
      />

      <span>
        {games.map((game) => (
          <span key={game}>
            <input
              type="checkbox"
              value={game}
              id={game}
              checked={selectGame === game}
              onChange={(e) => setSelectGame(e.target.value)}
            />
            <label htmlFor={game}> {game} </label>
          </span>
        ))}
      </span>

      {itemsSort.map((item) => (
        <ItemCard item={item} key={item.id} />
      ))}
    </main>
  );
}

export default Encyclopedia;
