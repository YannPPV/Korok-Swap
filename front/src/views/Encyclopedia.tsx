import { useEffect, useState } from 'react'
import ItemCard from '../components/ItemCard'
import items from '../data/item'
import type { Item } from '../types/items'

function Encyclopedia() {
  const [gameItems, setGameItems] = useState<Item[]>([])
  const [inputFilter, setinputFilter] = useState("")

  useEffect(() => {
    async function setItems() {
      const Allitems = await items('botw')
      setGameItems(Allitems)
    }
    setItems()
  }, [])

  
  const itemsSort = gameItems.filter((item) => 
      item.name.toLocaleLowerCase().includes(inputFilter.toLocaleLowerCase().trim())
  )

  return (
    <main>
      <h1>The Encyclopedia of Hyrule</h1>
      <input 
      value={inputFilter}
      onChange={e => setinputFilter(e.target.value)}
      />

      {itemsSort.map((item) => (
        <ItemCard item={item} key={item.id}/>
      ))}
    </main>
  )
}

export default Encyclopedia
