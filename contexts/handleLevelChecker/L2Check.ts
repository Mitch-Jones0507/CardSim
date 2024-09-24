import type { Card } from "@/types/Card"
import { nOfSameProperty } from "@/contexts/handleLevelChecker/util/nOfSameProperty"
import { getMark, getSuit } from "@/contexts/handleLevelChecker/util/getters"
import { nOfSpecificValWithSameProperty } from "@/contexts/handleLevelChecker/util/nOfSpecificValWithSameProperty"


import { THandLevelChecker } from "@/contexts/handleLevelChecker/util/types"

/*
* Should pass if:
* - 3 of same suit
* - 2 of same mark
* - 2 good cards with same suit
*/

export const l2Check: THandLevelChecker = (hand) => [
  ...threeOfSameSuitCheck(hand),
  ...twoOfSameMarkCheck(hand),
  ...twoGoodCardsWithSameSuit(hand)
]

const threeOfSameSuitCheck: THandLevelChecker = (hand) => nOfSameProperty(hand, getSuit, 3)

const twoOfSameMarkCheck: THandLevelChecker = (hand) => nOfSameProperty(hand, getMark, 2)

const twoGoodCardsWithSameSuit: THandLevelChecker = (hand) => nOfSpecificValWithSameProperty(hand, (card: Card) => card.attribute === "Good", getSuit, 2)
