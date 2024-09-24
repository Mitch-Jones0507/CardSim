import { createContext, FC, ReactNode, useEffect, useState } from "react"
import { useGameState } from "@/hooks/useGameState"
import { l1Check } from "@/contexts/handleLevelChecker/L1Check"
import { l2Check } from "@/contexts/handleLevelChecker/L2Check"
import { l3Check } from "@/contexts/handleLevelChecker/L3Check"
import { l4Check } from "@/contexts/handleLevelChecker/L4Check"
import { l5Check } from "@/contexts/handleLevelChecker/L5Check"
import { l10Check } from "@/contexts/handleLevelChecker/L10Check"
import { CardComboLevels } from "@/contexts/handleLevelChecker/util/types"

type THandLevelCheckerContext = {
  hovering: CardComboLevels | null
  matches: Record<CardComboLevels, Array<Array<string>>>
  comboCardOnPointerEnter: (level: CardComboLevels) => void
  comboCardOnPointerLeave: () => void
}

const initialSuccessfulMatches: Record<CardComboLevels, Array<Array<string>>> = {
  L1: [],
  L2: [],
  L3: [],
  L4: [],
  L5: [],
  L10: []
}

const contextDefaultValue: THandLevelCheckerContext = {
  hovering: null,
  matches: initialSuccessfulMatches,
  comboCardOnPointerEnter: () => undefined,
  comboCardOnPointerLeave: () => undefined
}

export const HandLevelCheckerContext = createContext<THandLevelCheckerContext>(contextDefaultValue)

export const HandLevelCheckerProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [successfulMatches, setSuccessfulMatches] = useState(initialSuccessfulMatches)
  const [hoveringComboCard, setHoveringComboCard] = useState<CardComboLevels | null>(null)

  const comboCardOnPointerEnter = (level: CardComboLevels) => setHoveringComboCard(level)
  const comboCardOnPointerLeave = () => setHoveringComboCard(null)

  const { gameState } = useGameState()
  const { hand } = gameState

  useEffect(() => {
    setSuccessfulMatches({
      L1: l1Check(hand),
      L2: l2Check(hand),
      L3: l3Check(hand),
      L4: l4Check(hand),
      L5: l5Check(hand),
      L10: l10Check(hand),
    })
  }, [hand])

  return <HandLevelCheckerContext.Provider value={{
    hovering: hoveringComboCard,
    matches: successfulMatches,
    comboCardOnPointerEnter,
    comboCardOnPointerLeave
  }}>
    {children}
  </HandLevelCheckerContext.Provider>
}
