import { Card } from "@/types/Card"

export type THandLevelChecker = (hand: Array<Card>) => Array<Array<string>>

export type CardComboLevels =
  | "L1" | "L2"
  | "L3" | "L4"
  | "L5" | "L10"