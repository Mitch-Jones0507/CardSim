import { nOfSameProperty } from "@/contexts/handleLevelChecker/util/nOfSameProperty"
import { getMark, getSuit, getSuitAndMark } from "@/contexts/handleLevelChecker/util/getters"
import { Card } from "@/types/Card"


import { THandCheck, TLevelCheck } from "@/contexts/handleLevelChecker/util/types"
import { nOfSpecificValWithSameProperty } from "@/contexts/handleLevelChecker/util/nOfSpecificValWithSameProperty"
import { goodCardFilter } from "@/contexts/handleLevelChecker/util/filters"
import { nOfDifferentProperty } from "@/contexts/handleLevelChecker/util/nOfDifferentProperty"
import { handChecksToLevelCheck } from "@/contexts/handleLevelChecker/util/handChecksToLevelCheck"

/*
* Should pass if:
* - 4 of same mark
* - 2 of the same suit and mark
* - 3 good cards with same mark
* - 4 good cards with different suits
*/

const fourOfTheSameMark: THandCheck = {
  matchName: "fourOfSameMark",
  check: (hand) => nOfSameProperty(hand, getMark, 4)
}

const twoSameSuitAndMark: THandCheck = {
  matchName: "twoOfSameSuitAndMark",
  check: (hand) => nOfSameProperty(hand, getSuitAndMark, 2)
}

const threeGoodWithSameMark: THandCheck = {
  matchName: "threeGoodWithSameMark",
  check: (hand) => nOfSpecificValWithSameProperty(hand, goodCardFilter, getMark, 3)
}

const fourGoodDifferentSuit: THandCheck = {
  matchName: "fourGoodDifferentSuit",
  check: (hand) => {
    const filteredCards = hand.filter(goodCardFilter)

    return nOfDifferentProperty(filteredCards, getSuit, 4)
  }
}

export const l4Check: TLevelCheck = (hand: Array<Card>) => handChecksToLevelCheck([
  fourOfTheSameMark,
  twoSameSuitAndMark,
  threeGoodWithSameMark,
  fourGoodDifferentSuit
], hand)
