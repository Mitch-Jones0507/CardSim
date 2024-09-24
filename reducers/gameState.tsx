import { createContext, Dispatch, FC, ReactNode, Reducer, useReducer } from "react"
import { startingDeck } from "@/util/startingDeck"
import { Card } from "@/types/Card"

type GameState = {
  deck: Array<Card>
  hand: Array<Card>
  handSwapEnabled: boolean
}

type Action =
  { type: "DRAW_CARD" } |
  { type: "ENABLE_CARD_SWAPPING" } |
  { type: "DISABLE_CARD_SWAPPING" } |
  { type: "SWAP_CARDS", firstCardId: string, secondCardId: string }

const initialGameState: GameState = {
  deck: startingDeck,
  hand: [],
  handSwapEnabled: false
}

const gameStateReducer: Reducer<GameState, Action> = (state, action) => {
  switch (action.type) {
    case "DRAW_CARD": {
      if (state.deck.length === 0) {
        console.log("No cards")
        return state
      } else {
        const sampleIndex = Math.floor(Math.random() * state.deck.length)

        const sampleCard = state.deck[sampleIndex]
        const deckWithoutSample = state.deck.filter((_, index) => index !== sampleIndex)

        return state.hand.length === 5
          ? { ...state, deck: deckWithoutSample, hand: [...state.hand.slice(1), sampleCard] }
          : { ...state, deck: deckWithoutSample, hand: [...state.hand, sampleCard] }
      }
    }
    case "ENABLE_CARD_SWAPPING": {
      console.log("ENABLED CARD SWAPPING MODE")
      return { ...state, handSwapEnabled: true }
    }
    case "DISABLE_CARD_SWAPPING": {
      console.log("DISABLED CARD SWAPPING MODE")
      return { ...state, handSwapEnabled: false }
    }
    case "SWAP_CARDS": {
      console.log("SWAP CARDS")

      const firstIndex = state.hand.findIndex(card => card.id === action.firstCardId);
      const secondIndex = state.hand.findIndex(card => card.id === action.secondCardId);

      if (firstIndex !== -1 && secondIndex !== -1) {
        const newHand = [...state.hand];
        [newHand[firstIndex], newHand[secondIndex]] = [newHand[secondIndex], newHand[firstIndex]];
        return { ...state, hand: newHand };
      }

      return state
    }
    default:
      console.log("=>(gameState.tsx:22) DEFAULT")
      return state
  }
}

type TGameStateContext = {
  gameState: GameState,
  dispatch: Dispatch<Action>,
}
export const GameStateContext = createContext<TGameStateContext | undefined>(undefined)

export const GameStateProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [gameState, dispatch] = useReducer(gameStateReducer, initialGameState)

  return <GameStateContext.Provider value={{ gameState, dispatch }}>
    {children}
  </GameStateContext.Provider>
}

