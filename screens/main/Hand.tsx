import { FC, useCallback, useEffect, useState } from "react"
import { VStack } from "@/components/ui/vstack"
import { Button, ButtonGroup, ButtonText } from "@/components/ui/button"
import { Divider } from "@/components/ui/divider"
import { Pressable, ScrollView, View } from "react-native"
import { Card } from "@/components/Card"
import type { Card as TCard } from "@/types/Card"
import { useHandLayoutMeasurements } from "@/hooks/useHandLayoutMeasurements"
import { useGameState } from "@/hooks/useGameState"
import { useHandLevelChecker } from "@/hooks/useHandLevelChecker"

export const Hand: FC = () => {
  const { gameState, dispatch } = useGameState()
  const { hovering, matches } = useHandLevelChecker()
  const [selectedSwapIds, setSelectedSwapIds] = useState<Array<string>>([])
  const { containerWidth, cardContentWidth, onContainerLayout, onCardContentLayout } = useHandLayoutMeasurements()

  const cardOnPress = useCallback(
    (card: TCard) => setSelectedSwapIds([...selectedSwapIds, card.id]),
    [selectedSwapIds]
  )

  useEffect(() => {
    if (selectedSwapIds.length === 2) {
      dispatch({ type: "DISABLE_CARD_SWAPPING" })
      dispatch({ type: "SWAP_CARDS", firstCardId: selectedSwapIds[0], secondCardId: selectedSwapIds[1] })
      setSelectedSwapIds([])
    }
  }, [selectedSwapIds])

  const centerAlignCards = cardContentWidth <= containerWidth

  const cardIdsToHighlight = hovering
    ? matches[hovering].flat()
    : []
    // : gameState.hand.map(card => card.id)

  return (
    <VStack className="h-full items-center">
      <HandButtonSet />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className={`h-full w-full p-2 ${centerAlignCards ? "justify-center" : "justify-start"}`}
        onLayout={onContainerLayout}
        contentContainerStyle={{ justifyContent: centerAlignCards ? "center" : "flex-start" }}
      >
        <View className="h-full w-fit flex-row gap-2" onLayout={onCardContentLayout}>
          {gameState.hand.map(card => gameState.handSwapEnabled
            ? <Pressable key={card.id}
                         className={`h-full w-fit ${cardIdsToHighlight.includes(card.id) ? "opacity-100" : "opacity-60"}`}
                         onPress={() => cardOnPress(card)}>
              <Card card={card} />
            </Pressable>
            : <View key={card.id}
                    className={`h-full w-fit ${cardIdsToHighlight.includes(card.id) ? "opacity-100" : "opacity-60"}`}>
              <Card card={card} />
            </View>)}
        </View>
      </ScrollView>
    </VStack>
  )
}

const HandButtonSet = () => {
  const { gameState, dispatch } = useGameState()

  const drawCardButtonOnPress = () => dispatch({ type: "DRAW_CARD" })
  const swapCardsButtonOnPress = () => dispatch(
    gameState.handSwapEnabled
      ? { type: "DISABLE_CARD_SWAPPING" }
      : { type: "ENABLE_CARD_SWAPPING" }
  )

  return (
    <VStack className="items-center p-2 gap-2">
      <ButtonGroup className="flex-row gap-2">
        <Button onPress={drawCardButtonOnPress}>
          <ButtonText>Draw Card</ButtonText>
        </Button>
        <Button onPress={swapCardsButtonOnPress} variant={gameState.handSwapEnabled ? "outline" : "solid"}>
          <ButtonText>Swap Cards</ButtonText>
        </Button>
        <Button onPress={() => dispatch({ type: "DRAW_CARD" })}>
          <ButtonText>Play Cards</ButtonText>
        </Button>
      </ButtonGroup>
      <Divider className="w-4/5" />
    </VStack>
  )
}
