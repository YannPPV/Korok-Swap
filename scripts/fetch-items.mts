import { writeFile } from 'node:fs/promises';
import type { ApiItem, Item } from '../front/src/types/items';

async function listItemsZelda(zelda: 'botw' | 'totk'): Promise<ApiItem[]> {
  const response = await fetch(
    `https://api.hyrule-compendium.com/v3/compendium/all?game=${zelda}`,
  );
  const dataItems = await response.json();
  const items = dataItems.data;
  return items;
}

function findGame(listItem: ApiItem[], zelda: 'botw' | 'totk') {
  let listGame: Item[] = [];
  if (zelda === 'botw') {
    listGame = listItem.map((elt) => ({
      ...elt,
      totk: false,
      botw: true,
    }));
  } else {
    listGame = listItem.map((elt) => ({
      ...elt,
      totk: true,
      botw: false,
    }));
  }
  return listGame;
}

async function itemToJson(zelda: 'botw' | 'totk', game: Item[]) {
  const data = JSON.stringify(game, null, 2);
  await writeFile(`front/src/data/${zelda}.json`, data);
}

const listBotw = await listItemsZelda('botw');
const listTotk = await listItemsZelda('totk');

const botw = findGame(listBotw, 'botw');
const totk = findGame(listTotk, 'totk');

await itemToJson('botw', botw);
await itemToJson('totk', totk);

// function allItems(botw: Item[], totk: Item[]) {
//   let items : Item[] = [];
//   items = botw.map((element : Item) => ({ ...element, botw: true, totk: false }));
//   totk.forEach((element : Item) => {
//     const botwItem = items.find(
//       (item : Item) => item.name.toLowerCase() === element.name.toLowerCase(),
//     );
//     if (botwItem) {
//       botwItem.totk = true;
//     } else {
//       let item = { ...element, botw: false, totk: true };
//       items = [...items, item];
//     }
//   });
//   return items;
// }
