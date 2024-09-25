import { Card } from "@/types/Card"
import _ from "lodash"
import { getId } from "@/contexts/handleLevelChecker/util/getters"

export const nOfSameProperty = (
  hand: Array<Card>,
  getProperty: (card: Card) => string,
  n: number
) => {
  const valGroups = _.groupBy(hand, getProperty)
  const idGroups = Object.values(valGroups).map(cardGroup => cardGroup.map(getId))
  return idGroups.filter(group => group.length >= n)
}
