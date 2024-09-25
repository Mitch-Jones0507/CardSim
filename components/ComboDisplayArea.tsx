import { FC } from "react"
import { Box } from "@/components/ui/box"
import { ThemedText } from "@/components/ThemedText"
import { VStack } from "@/components/ui/vstack"
import { typedEntries } from "@/util/typedEntries"
import { useHandLevelChecker } from "@/hooks/useHandLevelChecker"
import { CardComboLevels } from "@/contexts/handleLevelChecker/util/types"

const comboLevelsColourMap: Record<CardComboLevels, string> = {
  L1: "tertiary-600",
  L2: "tertiary-900",
  L3: "error-600",
  L4: "error-900",
  L5: "info-600",
  L10: "info-900"
} as const

export const ComboDisplayArea = () => {
  const {
    successfulMatches,
    comboCardOnPointerEnter,
    comboCardOnPointerLeave
  } = useHandLevelChecker()

  return <VStack className="h-full w-fit p-2 items-center justify-center gap-2">
    {typedEntries(successfulMatches).map(([levelName, matches]) => (
      <ComboCard
        key={levelName}
        text={levelName}
        colour={comboLevelsColourMap[levelName]}
        visible={matches.length > 0}
        onPointerEnter={() => comboCardOnPointerEnter(levelName)}
        onPointerLeave={comboCardOnPointerLeave}
      />
    ))}
  </VStack>
}

type ComboCardProps = {
  text: string
  colour: string
  visible: boolean
  onPointerEnter: () => void
  onPointerLeave: () => void
}

const ComboCard: FC<ComboCardProps> = ({ text, colour, visible, onPointerEnter, onPointerLeave }) => <Box
  className={`p-2 w-full bg-${colour} rounded ${visible ? "visible" : "invisible"} items-center`}
  onPointerEnter={onPointerEnter}
  onPointerLeave={onPointerLeave}
>
  <ThemedText>{text}</ThemedText>
</Box>