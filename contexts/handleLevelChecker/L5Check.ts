import type { Card } from "@/types/Card"
import {THandLevelChecker} from "@/contexts/handleLevelChecker/util/types";
import {nOfSpecificValWithSameProperty} from "@/contexts/handleLevelChecker/util/nOfSpecificValWithSameProperty";
import {goodCardFilter} from "@/contexts/handleLevelChecker/util/filters";
import {getMark, getSuit} from "@/contexts/handleLevelChecker/util/getters";
import {nOfSameProperty} from "@/contexts/handleLevelChecker/util/nOfSameProperty";
import {nOfTwoDifferentProperties, nOfDifferentProperty} from "@/contexts/handleLevelChecker/util/nOfDifferentProperty";

export const l5Check: THandLevelChecker = (hand) => [
  ... fourGoodWithSameMark(hand),
  ... twoGoodWithSameSuitSameMark(hand),
  ... fourDifferentSuitDifferentMark(hand)
]

const fourGoodWithSameMark: THandLevelChecker = (hand) => nOfSpecificValWithSameProperty(hand, goodCardFilter, getMark, 4)

const twoGoodWithSameSuitSameMark: THandLevelChecker = (hand) => {
  const filteredCards = hand.filter(goodCardFilter)
  const getSuitAndMark = (card: Card) => `${card.suit}-${card.mark}`
  return nOfSameProperty(filteredCards, getSuitAndMark, 2)
}
const fourDifferentSuitDifferentMark: THandLevelChecker = (hand) => nOfTwoDifferentProperties(hand, getSuit, getMark, 4)