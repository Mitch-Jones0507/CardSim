import { Card } from "@/types/Card"
import { nOfSameVal } from "@/contexts/handleLevelChecker/util/nOfSameVal"

export const nOfSpecificValWithSameType = <T extends keyof Card>(
  hand: Array<Card>,
  valFilter: (card: Card) => boolean,
  getType: (card: Card) => Card[T],
  n: number
) => {
  const filteredCards = hand.filter(valFilter)
  return nOfSameVal(filteredCards, getType, n)
}
