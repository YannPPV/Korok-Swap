import { useEffect, useState } from 'react'
import ItemCard from '../components/ItemCard'
import items from '../data/item'
import type { Item } from '../types/items'

function Encyclopedia() {
  const [gameItems, setGameItems] = useState<Item[]>([])

  useEffect(() => {
    async function setItems() {
      const Allitems = await items('botw')
      setGameItems(Allitems)
    }
    setItems()
  }, [])

  return (
    <main>
      <h1>The Encyclopedia of Hyrule</h1>
      {gameItems.map((item) => (
        <ItemCard item={item} key={item.id}/>
      ))}
    </main>
  )
}

export default Encyclopedia
