import { nOfSameProperty } from "@/contexts/handleLevelChecker/util/nOfSameProperty"
import { nOfDifferentProperty } from "@/contexts/handleLevelChecker/util/nOfDifferentProperty"
import { getMark, getSuit } from "@/contexts/handleLevelChecker/util/getters"
import { nOfSpecificValWithSameProperty } from "@/contexts/handleLevelChecker/util/nOfSpecificValWithSameProperty"
import { THandCheck, TLevelCheck } from "@/contexts/handleLevelChecker/util/types"
import { goodCardFilter } from "@/contexts/handleLevelChecker/util/filters"
import { handChecksToLevelCheck } from "@/contexts/handleLevelChecker/util/handChecksToLevelCheck"
import { Card } from "@/types/Card"

/*
* Should pass if:
* - 3 of same mark
* - 4 different suits
* - 3 good cards with same suit
* - 2 good cards with same mark
*/

const threeOfSameMark: THandCheck = {
  matchName: "threeOfSameMark",
  check: (hand) => nOfSameProperty(hand, getMark, 3)
}

const fourDifferentSuits: THandCheck = {
  matchName: "fourDifferentSuits",
  check: (hand) => nOfDifferentProperty(hand, getSuit, 4)
}

const threeGoodCardsWithSameSuit: THandCheck = {
  matchName: "threeGoodCardsWithSameSuit",
  check: (hand) => nOfSpecificValWithSameProperty(hand, goodCardFilter, getSuit, 3)
}

const twoGoodCardsWithSameMark: THandCheck = {
  matchName: "twoGoodCardsWithSameMark",
  check: (hand) => nOfSpecificValWithSameProperty(hand, goodCardFilter, getMark, 2)
}

export const l3Check: TLevelCheck = (hand: Array<Card>) => handChecksToLevelCheck([
  threeOfSameMark,
  fourDifferentSuits,
  threeGoodCardsWithSameSuit,
  twoGoodCardsWithSameMark
], hand)
