import { THandCheck, TMatches } from "@/contexts/handleLevelChecker/util/types"
import { Card } from "@/types/Card"

export const handChecksToLevelCheck = (handChecks: Array<THandCheck>, hand: Array<Card>): TMatches => handChecks
  .map(({matchName, check}) => ({
    matchName,
    matches: check(hand)
  }))
  .filter(handCheck => handCheck.matches.length > 0)
