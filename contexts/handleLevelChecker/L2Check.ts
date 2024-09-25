import type { Card } from "@/types/Card"
import { nOfSameProperty } from "@/contexts/handleLevelChecker/util/nOfSameProperty"
import { getMark, getSuit } from "@/contexts/handleLevelChecker/util/getters"
import { nOfSpecificValWithSameProperty } from "@/contexts/handleLevelChecker/util/nOfSpecificValWithSameProperty"
import { THandCheck, TLevelCheck } from "@/contexts/handleLevelChecker/util/types"
import { goodCardFilter } from "@/contexts/handleLevelChecker/util/filters"
import { handChecksToLevelCheck } from "@/contexts/handleLevelChecker/util/handChecksToLevelCheck"

/*
* Should pass if:
* - 3 of same suit
* - 2 of same mark
* - 2 good cards with same suit
*/

const threeOfSameSuit: THandCheck = {
  matchName: "threeOfSameSuit",
  check: (hand) => nOfSameProperty(hand, getSuit, 3)
}

const twoOfSameMark: THandCheck = {
  matchName: "twoOfSameMark",
  check: (hand) => nOfSameProperty(hand, getMark, 2)
}

const twoGoodCardsWithSameSuit: THandCheck = {
  matchName: "twoGoodCardsWithSameSuit",
  check: (hand) => nOfSpecificValWithSameProperty(hand, goodCardFilter, getSuit, 2)
}

export const l2Check: TLevelCheck = (hand: Array<Card>) => handChecksToLevelCheck([
  threeOfSameSuit,
  twoOfSameMark,
  twoGoodCardsWithSameSuit
], hand)
