import type { Card } from "@/types/Card"
import { nOfSameVal } from "@/contexts/handleLevelChecker/util/nOfSameVal"
import { getMark, getSuit } from "@/contexts/handleLevelChecker/util/getters"
import { nOfSpecificValWithSameType } from "@/contexts/handleLevelChecker/util/nOfSpecificValWithSameType"


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

const threeOfSameSuitCheck: THandLevelChecker = (hand) => nOfSameVal(hand, getSuit, 3)

const twoOfSameMarkCheck: THandLevelChecker = (hand) => nOfSameVal(hand, getMark, 2)

const twoGoodCardsWithSameSuit: THandLevelChecker = (hand) => nOfSpecificValWithSameType(hand, (card: Card) => card.attribute === "Good", getSuit, 2)
