import { nOfSameVal } from "@/contexts/handleLevelChecker/util/nOfSameVal"
import { getMark } from "@/contexts/handleLevelChecker/util/getters"
import { Card } from "@/types/Card"


import { THandLevelChecker } from "@/contexts/handleLevelChecker/util/types"

/*
* Should pass if:
* - 4 of same mark
* - 2 of the same suit and mark
* - 3 good cards with same mark
* - 4 good cards with different suits
*/

export const l4Check: THandLevelChecker = (hand) => [
  ...fourOfTheSameMark(hand),
  ...twoSameSuitSameMark(hand)
]

const fourOfTheSameMark: THandLevelChecker = (hand) => nOfSameVal(hand, getMark, 4)

const twoSameSuitSameMark: THandLevelChecker = (hand) => {
  const getSuitAndMark = (card: Card) => `${card.suit}-${card.mark}`

  return nOfSameVal(hand, getSuitAndMark, 2)
}
