import { Card } from "@/types/Card"
import _ from "lodash"
import { getId } from "@/contexts/handleLevelChecker/util/getters"
import { permute } from "@/util/permute"

export const nOfDifferentProperty = <T extends keyof Card>(hand: Array<Card>, getVal: (card: Card) => Card[T], n: number) => {
  const valGroups = _.groupBy(hand, getVal)
  if (Object.keys(valGroups).length >= n) {
    const idGroups = Object.values(valGroups).map(cardGroup => cardGroup.map(getId))
    return permute(idGroups)
  }
  return []
}

export const nOfTwoDifferentProperties = <T extends keyof Card>(hand: Array<Card>, getVal: (card: Card) => Card[T], getVal2: (card: Card) => Card[T], n: number) => {
  const valGroups = _.groupBy(hand, getVal)
  const valGroupsData = _.values(valGroups)
  if (Object.keys(valGroups).length >= n) {
    const valGroups2 = _.groupBy(valGroupsData, getVal2)
    if (Object.keys(valGroups2).length >= n) {
      const idGroups = Object.values(valGroups2).map(cardGroup => cardGroup.map(getId))
      return permute(idGroups)
    }
  }
    return []
  }
