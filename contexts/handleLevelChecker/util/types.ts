import { Card } from "@/types/Card"

export type TMatches = Array<{ matchName: string, matches: Array<Array<string>> }>
export type THandCheck = { matchName: string, check: (hand: Array<Card>) => Array<Array<string>> }
export type TLevelCheck = (hand: Array<Card>) => TMatches

export type CardComboLevels =
  | "L1" | "L2"
  | "L3" | "L4"
  | "L5" | "L10"
