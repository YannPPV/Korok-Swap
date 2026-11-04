async function items(game : string) {
  const response = await fetch(`/data/${game}.json`)
  const AllItems = await response.json()
  return AllItems
}

export default items