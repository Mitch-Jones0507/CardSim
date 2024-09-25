import { Card } from "@/types/Card"

export const getId = (card: Card) => card.id
export const getSuit = (card: Card) => card.suit
export const getMark = (card: Card) => card.mark
export const getSuitAndMark = (card: Card) => `${card.suit}-${card.mark}`
