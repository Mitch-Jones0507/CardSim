import type { Marks, Suits, Card as TCard, Attributes } from "@/types/Card"
import { FC } from "react"
import { Box } from "@/components/ui/box"
import { Circle as LCircle, Diamond, Triangle } from "lucide-react-native"
import { Text } from "@/components/ui/text"
import { VStack } from "@/components/ui/vstack"
import { createIcon, Icon } from "@/components/ui/icon"
import { Circle, G, Line, Rect } from "react-native-svg"

type CardProps = {
  card: TCard
}

export const Card: FC<CardProps> = ({ card }) => {
  const { suit, mark, attribute } = card

  const colour = suitColourSelector(suit)
  const markIcon = markIconSelector(mark)
  const borderColour = borderColourSelector(attribute)

  const innerBorderValues = borderColour
    ? `border-4 border-${borderColour} rounded`
    : "p-2"

  return (
    <Box className="h-full w-fit aspect-card border-4 border-primary-950 rounded-lg">
      <VStack
        className={`h-full w-full ${innerBorderValues} justify-center`}>
        {/*<ThemedText>{topText}</ThemedText>*/}
        <Text className={`text-${colour} h-fit w-full items-center`}>
          {markIcon}
        </Text>
      </VStack>
    </Box>
  )
}

const suitColourSelector = (suit: Suits) => {
  switch (suit) {
    case "White":
      return "secondary-50"
    case "Red":
      return "error-300"
    case "Blue":
      return "info-300"
    case "Black":
      return "primary-500"
  }
}

const SquareIcon = createIcon({
  viewBox: "0 0 24 24",
  path: <Rect x={3} y={3} width={18} height={18} rx={2} strokeWidth={2} stroke="currentColor" fill="none" />
})

const SemicircleIcon = createIcon({
  viewBox: "0 0 24 24",
  path: <G translate={[1, 1]} scale={1.1}>
    <Circle
      cx={12} cy={12} r={10}
      strokeWidth={2} strokeDasharray={[30.5]}
      strokeDashoffset={-24}
      strokeLinecap="round" stroke="currentColor" fill="none"
    />
    <Line x1={5} x2={19} y1={19} y2={5} strokeWidth={2} strokeLinecap="round" stroke="currentColor" fill="none" />
  </G>
})

const markIconSelector = (mark: Marks) => {
  switch (mark) {
    case "Square":
      return <Icon as={SquareIcon} role="img" stroke="currentColor" className="h-fit w-full" />
    case "Diamond":
      return <Diamond className="h-fit w-full" />
    case "Triangle":
      return <Triangle className="h-fit w-full" />
    case "Circle":
      return <LCircle className="h-fit w-full" />
    case "Semicircle":
      return <Icon as={SemicircleIcon} role="img" stroke="currentColor" className="h-fit w-full" />
    // return <LoaderCircle className="h-fit w-full" />
    default:
      return null
  }
}

const borderColourSelector = (attribute: Attributes) => {
  switch (attribute) {
    case "Good":
      return "warning-300"
    case "Bad":
      return "outline-400"
  }
}
