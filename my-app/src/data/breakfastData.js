import americanCoffee from '../img/american-coffee.webp'
import coffeeMilk from '../img/coffee-milk.webp'
import juice from '../img/juice.webp'
import sandwich from '../img/sandwich.webp'
import { v4 as uuidv4 } from 'uuid'

const breakfastData = [
    {
        id: uuidv4(),
        url: americanCoffee,
        item: "Café americano",
        price: 5,
        tag: "drink"
    },
    {
        id: uuidv4(),
        url: coffeeMilk,
        item: "Café con leche",
        price: 7,
        tag: "drink"
    },
    {
        id: uuidv4(),
        url: juice,
        item: "Jugo de frutas",
        price: 10,
        tag: "drink"
    },
    {
        id: uuidv4(),
        url: sandwich,
        item: "Sandwich jamón",
        price: 7,
        tag: "food"
    }
]

export default breakfastData