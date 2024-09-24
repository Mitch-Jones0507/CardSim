import { useContext } from "react"
import { GameStateContext } from "@/reducers/gameState"

export const useGameState = () => {
  const context = useContext(GameStateContext)

  if (!context) {
    throw new Error("useAppState must be used within an AppStateProvider")
  }
  return context
}