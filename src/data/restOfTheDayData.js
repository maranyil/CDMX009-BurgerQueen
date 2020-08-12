import wata from '../img/wata.webp'
import soda from '../img/soda.webp'
import hamb from '../img/simple-hamb.webp'
import doubleHamb from '../img/double-hamb.webp'
import fries from '../img/fries.webp'
import onionRings from '../img/onion-rings.webp'
import { v4 as uuidv4 } from 'uuid'

const foodData = [
    {
        id: uuidv4(),
        url: wata,
        item: "Agua",
        price: 5,
        tag: "drink"
    },
    {
        id: uuidv4(),
        url: soda,
        item: "Soda",
        price: 6,
        tag: "drink"
    },
    {
        id: 7,
        url: hamb,
        item: "Hamb",
        price: 5,
        tag: "food"
    },
    {
        id: uuidv4(),
        url: doubleHamb,
        item: "Hamb doble",
        price: 7,
        tag: "food"
    },
    {
        id: uuidv4(),
        url: fries,
        item: "Papas fritas",
        price: 7,
        tag: "foo"
    },
    {
        id: uuidv4(),
        url: onionRings,
        item: "Aros de cebolla",
        price: 7,
        tag: "food"
    }
]

export default foodData