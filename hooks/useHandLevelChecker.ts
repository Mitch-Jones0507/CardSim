import { useContext } from "react"
import { HandLevelCheckerContext } from "@/contexts/handleLevelChecker"

export const useHandLevelChecker = () => {
  const context = useContext(HandLevelCheckerContext)

  if (!context) {
    throw new Error("useAppState must be used within an AppStateProvider")
  }
  return context
}