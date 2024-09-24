import { Card } from "@/types/Card"
import { nOfSameProperty } from "@/contexts/handleLevelChecker/util/nOfSameProperty"

export const nOfSpecificValWithSameProperty = <T extends keyof Card>(
  hand: Array<Card>,
  valFilter: (card: Card) => boolean,
  getType: (card: Card) => Card[T],
  n: number
) => {
  const filteredCards = hand.filter(valFilter)
  return nOfSameProperty(filteredCards, getType, n)
}
