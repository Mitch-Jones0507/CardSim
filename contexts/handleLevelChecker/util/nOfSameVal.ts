import { Card } from "@/types/Card"
import _ from "lodash"
import { getId } from "@/contexts/handleLevelChecker/util/getters"

export const nOfSameVal = <T extends keyof Card>(
  hand: Array<Card>,
  getVal: (card: Card) => Card[T],
  n: number
) => {
  const valGroups = _.groupBy(hand, getVal)
  const idGroups = Object.values(valGroups).map(cardGroup => cardGroup.map(getId))
  return idGroups.filter(group => group.length >= n)
}
