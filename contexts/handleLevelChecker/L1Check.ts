import { nOfSameProperty } from "@/contexts/handleLevelChecker/util/nOfSameProperty"
import { getSuit } from "@/contexts/handleLevelChecker/util/getters"


import { THandLevelChecker } from "@/contexts/handleLevelChecker/util/types"

/*
* Should pass if:
* - 2 of same suit
* - 1 good card
*/

export const l1Check: THandLevelChecker = (hand) => [...twoOfSameSuitCheck(hand), ...oneGoodCardCheck(hand)]

const twoOfSameSuitCheck: THandLevelChecker = (hand) => nOfSameProperty(hand, getSuit, 2)

const oneGoodCardCheck: THandLevelChecker = (hand) => {
  const goodCards = hand.filter(card => card.attribute === "Good")
  return goodCards.map(card => [card.id])
}
