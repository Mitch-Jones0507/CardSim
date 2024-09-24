import type { Card } from "@/types/Card"
import { nOfSameProperty } from "@/contexts/handleLevelChecker/util/nOfSameProperty"
import { nOfDifferentProperty } from "@/contexts/handleLevelChecker/util/nOfDifferentProperty"
import { getMark, getSuit } from "@/contexts/handleLevelChecker/util/getters"
import { nOfSpecificValWithSameProperty } from "@/contexts/handleLevelChecker/util/nOfSpecificValWithSameProperty"


import { THandLevelChecker } from "@/contexts/handleLevelChecker/util/types"
import { goodCardFilter } from "@/contexts/handleLevelChecker/util/filters"

/*
* Should pass if:
* - 3 of same mark
* - 4 different suits
* - 3 good cards with same suit
* - 2 good cards with same mark
*/

export const l3Check: THandLevelChecker = (hand) => [
  ...threeOfTheSameMark(hand),
  ...fourDifferentSuits(hand),
  ...threeGoodCardsWithSameSuit(hand),
  ...twoGoodCardsWithSameMark(hand)
]

const threeOfTheSameMark: THandLevelChecker = (hand) => nOfSameProperty(hand, getMark, 3)

const fourDifferentSuits: THandLevelChecker = (hand) => nOfDifferentProperty(hand, getSuit, 4)

const threeGoodCardsWithSameSuit: THandLevelChecker = (hand) => nOfSpecificValWithSameProperty(hand, goodCardFilter, getSuit, 3)

const twoGoodCardsWithSameMark: THandLevelChecker = (hand) => nOfSpecificValWithSameProperty(hand, goodCardFilter, getMark, 2)
