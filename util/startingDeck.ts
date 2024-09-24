import { Card } from "@/types/Card"

type CardWithoutId = Omit<Card, "id">
const setOfCards: Array<CardWithoutId> = [
  { suit: "White", mark: "Diamond", attribute: "Neutral"},
  { suit: "White", mark: "Diamond", attribute: "Neutral"},
  { suit: "Red", mark: "Diamond", attribute: "Good"},
  { suit: "Red", mark: "Diamond", attribute: "Good"},
  { suit: "Blue", mark: "Diamond", attribute: "Good"},
  { suit: "Blue", mark: "Diamond", attribute: "Good"},
  { suit: "Black", mark: "Diamond", attribute: "Neutral"},
  { suit: "Black", mark: "Diamond", attribute: "Neutral"},

  { suit: "White", mark: "Triangle", attribute: "Good"},
  { suit: "White", mark: "Triangle", attribute: "Neutral"},
  { suit: "Red", mark: "Triangle", attribute: "Good"},
  { suit: "Red", mark: "Triangle", attribute: "Neutral"},
  { suit: "Blue", mark: "Triangle", attribute: "Good"},
  { suit: "Blue", mark: "Triangle", attribute: "Neutral"},
  { suit: "Black", mark: "Triangle", attribute: "Good"},
  { suit: "Black", mark: "Triangle", attribute: "Neutral"},

  { suit: "White", mark: "Semicircle", attribute: "Neutral"},
  { suit: "White", mark: "Semicircle", attribute: "Good"},
  { suit: "Red", mark: "Semicircle", attribute: "Neutral"},
  { suit: "Red", mark: "Semicircle", attribute: "Neutral"},
  { suit: "Blue", mark: "Semicircle", attribute: "Neutral"},
  { suit: "Blue", mark: "Semicircle", attribute: "Neutral"},
  { suit: "Black", mark: "Semicircle", attribute: "Neutral"},
  { suit: "Black", mark: "Semicircle", attribute: "Neutral"},

  { suit: "White", mark: "Square", attribute: "Good"},
  { suit: "White", mark: "Square", attribute: "Good"},
  { suit: "Red", mark: "Square", attribute: "Neutral"},
  { suit: "Red", mark: "Square", attribute: "Good"},
  { suit: "Blue", mark: "Square", attribute: "Good"},
  { suit: "Blue", mark: "Square", attribute: "Good"},
  { suit: "Black", mark: "Square", attribute: "Neutral"},
  { suit: "Black", mark: "Square", attribute: "Good"},

  { suit: "White", mark: "Circle", attribute: "Neutral"},
  { suit: "White", mark: "Circle", attribute: "Neutral"},
  { suit: "Red", mark: "Circle", attribute: "Good"},
  { suit: "Red", mark: "Circle", attribute: "Good"},
  { suit: "Blue", mark: "Circle", attribute: "Good"},
  { suit: "Blue", mark: "Circle", attribute: "Good"},
  { suit: "Black", mark: "Circle", attribute: "Neutral"},
  { suit: "Black", mark: "Circle", attribute: "Good"},

  { suit: "White", mark: "Circle", attribute: "Bad"},
  { suit: "Red", mark: "Circle", attribute: "Bad"},
  { suit: "Blue", mark: "Circle", attribute: "Bad"},
  { suit: "Black", mark: "Circle", attribute: "Bad"},
]

export const startingDeck: Array<Card> = setOfCards.map((card, index) => ({...card, id: `${index}`}))
