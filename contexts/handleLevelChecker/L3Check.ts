import type { Card } from "@/types/Card"
import { nOfSameVal } from "@/contexts/handleLevelChecker/util/nOfSameVal"
import { nOfDifferentVal } from "@/contexts/handleLevelChecker/util/nOfDifferentVal"
import { getMark, getSuit } from "@/contexts/handleLevelChecker/util/getters"
import { nOfSpecificValWithSameType } from "@/contexts/handleLevelChecker/util/nOfSpecificValWithSameType"


import { THandLevelChecker } from "@/contexts/handleLevelChecker/util/types"

/*
* Should pass if:
* - 3 of same mark
* - 4 different suits
* - 3 good cards with same suit
* - 2 good cards with same mark
*/

const goodCardFilter = (card: Card) => card.attribute === "Good"

export const l3Check: THandLevelChecker = (hand) => [
  ...threeOfTheSameMark(hand),
  ...fourDifferentSuits(hand),
  ...threeGoodCardsWithSameSuit(hand),
  ...twoGoodCardsWithSameMark(hand)
]

const threeOfTheSameMark: THandLevelChecker = (hand) => nOfSameVal(hand, getMark, 3)

const fourDifferentSuits: THandLevelChecker = (hand) => nOfDifferentVal(hand, getSuit, 4)

const threeGoodCardsWithSameSuit: THandLevelChecker = (hand) => nOfSpecificValWithSameType(hand, goodCardFilter, getSuit, 3)

const twoGoodCardsWithSameMark: THandLevelChecker = (hand) => nOfSpecificValWithSameType(hand, goodCardFilter, getMark, 2)
