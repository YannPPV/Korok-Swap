export type Base = {
  id: number
  name: string
  description: string
  image: string
  dlc: boolean
  common_locations: string[] | null
}

export type Material = Base & {
  category: 'materials'
  cooking_effect: string
  hearts_recovered: number
  fuse_attack_power?: number // TOTK uniquement
}

export type Monster = Base & {
  category: 'monsters'
  drops: string[] | null
}

export type Treasure = Base & {
  category: 'treasure'
  drops: string[]
}

export type Equipment = Base & {
  category: 'equipment'
  properties: {
    attack: number | null
    defense: number | null
    effect?: string // TOTK uniquement
    type?: string // TOTK uniquement
  }
}

export type Creature = Base & {
  category: 'creatures'
  edible: boolean
  drops?: string[] | null
  cooking_effect?: string
  hearts_recovered?: number
}

export type ApiItem = Material | Monster | Treasure | Equipment | Creature
export type Item = ApiItem & { botw: boolean; totk: boolean }
