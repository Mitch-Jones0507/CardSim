import { nOfSameProperty } from "@/contexts/handleLevelChecker/util/nOfSameProperty"
import { getSuit } from "@/contexts/handleLevelChecker/util/getters"
import { THandCheck, TLevelCheck, TMatches } from "@/contexts/handleLevelChecker/util/types"
import { handChecksToLevelCheck } from "@/contexts/handleLevelChecker/util/handChecksToLevelCheck"
import { Card } from "@/types/Card"

/*
* Should pass if:
* - 2 of same suit
* - 1 good card
*/

const twoOfSameSuit: THandCheck = {
  matchName: "twoOfSameSuit",
  check: (hand) => nOfSameProperty(hand, getSuit, 2)
}

const oneGoodCard: THandCheck = {
  matchName: "oneGoodCard",
  check: (hand) => {
    const goodCards = hand.filter(card => card.attribute === "Good")
    return goodCards.map(card => [card.id])
  }
}

// export const l1Check: TLevelCheck = (hand: Array<Card>) => handChecksToLevelCheck([
//   twoOfSameSuit,
//   oneGoodCard
// ], hand)

export const l1Check: TLevelCheck = (hand: Array<Card>) => {
  const returnObj: TMatches = []

  const twoOfSameSuitMatches = twoOfSameSuit.check(hand)
  if (twoOfSameSuitMatches.length > 0) {
    returnObj.push({ matchName: twoOfSameSuit.matchName, matches: twoOfSameSuitMatches })
  }

  const oneGoodCardMatches = oneGoodCard.check(hand)
  if (oneGoodCardMatches.length > 0) {
    returnObj.push({ matchName: oneGoodCard.matchName, matches: oneGoodCardMatches })
  }

  const explicit = handChecksToLevelCheck([
    twoOfSameSuit,
    oneGoodCard
  ], hand)
  console.log("Explicit: ", explicit)
  console.log("Inline: ", returnObj)

  return returnObj
}
