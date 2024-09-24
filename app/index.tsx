import { View } from "react-native"

import { MainScreen } from "@/screens/main"
import { GameStateProvider } from "@/reducers/gameState"
import { HandLevelCheckerProvider } from "@/contexts/handleLevelChecker"

export default function Index() {
  return (
    <GameStateProvider>
      <HandLevelCheckerProvider>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <MainScreen />
        </View>
      </HandLevelCheckerProvider>
    </GameStateProvider>
  )
}
