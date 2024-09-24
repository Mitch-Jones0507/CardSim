import { useState } from "react"
import { LayoutChangeEvent } from "react-native"

export const useHandLayoutMeasurements = () => {
  const [containerWidth, setContainerWidth] = useState(0)
  const [cardContentWidth, setCardContentWidth] = useState(0)

  const onContainerLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout
    setContainerWidth(width)
  }

  const onCardContentLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout
    setCardContentWidth(width)
  }

  return {
    containerWidth,
    cardContentWidth,
    onContainerLayout,
    onCardContentLayout
  }
}