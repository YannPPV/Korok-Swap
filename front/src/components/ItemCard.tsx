import type {ItemCardProps } from '../types/items'

function ItemCard({item} : ItemCardProps) {
    return(
        <article>
            <img src={item.image} alt={item.name} />
            <h3> {item.name} </h3>
            <p> {item.category} </p>
        </article>
    )
}

export default ItemCard
