import { nOfSameProperty } from "@/contexts/handleLevelChecker/util/nOfSameProperty"
import { getMark, getSuit } from "@/contexts/handleLevelChecker/util/getters"
import { Card } from "@/types/Card"


import { THandLevelChecker } from "@/contexts/handleLevelChecker/util/types"
import { nOfSpecificValWithSameProperty } from "@/contexts/handleLevelChecker/util/nOfSpecificValWithSameProperty"
import { goodCardFilter } from "@/contexts/handleLevelChecker/util/filters"
import { nOfDifferentProperty } from "@/contexts/handleLevelChecker/util/nOfDifferentProperty"

/*
* Should pass if:
* - 4 of same mark
* - 2 of the same suit and mark
* - 3 good cards with same mark
* - 4 good cards with different suits
*/

export const l4Check: THandLevelChecker = (hand) => [
  ...fourOfTheSameMark(hand),
  ...twoSameSuitSameMark(hand),
  ...threeGoodWithSameMark(hand),
  ...fourGoodDifferentSuit(hand)
]

const fourOfTheSameMark: THandLevelChecker = (hand) => nOfSameProperty(hand, getMark, 4)

const twoSameSuitSameMark: THandLevelChecker = (hand) => {
  const getSuitAndMark = (card: Card) => `${card.suit}-${card.mark}`

  return nOfSameProperty(hand, getSuitAndMark, 2)
}

const threeGoodWithSameMark: THandLevelChecker = (hand) => nOfSpecificValWithSameProperty(hand, goodCardFilter, getMark, 3)

const fourGoodDifferentSuit: THandLevelChecker = (hand) => {
  const filteredCards = hand.filter(goodCardFilter)

  return nOfDifferentProperty(filteredCards, getSuit, 4)
}