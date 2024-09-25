import { Box } from "@/components/ui/box"
import { Hand } from "@/screens/main/Hand"
import { CardDisplayArea } from "@/screens/main/CardDisplayArea"
import { Divider } from "@/components/ui/divider"
import { HStack } from "@/components/ui/hstack"
import { VStack } from "@/components/ui/vstack"
import { ComboDisplayArea } from "@/components/ComboDisplayArea"
import { Popover, PopoverBody, PopoverContent } from "@/components/ui/popover"
import { useHandLevelChecker } from "@/hooks/useHandLevelChecker"
import { Text } from "@/components/ui/text"
import { typedEntries } from "@/util/typedEntries"

export const MainScreen = () => {

  return (
    <VStack className="h-full w-full">
      <Box className="h-3/5 bg-emerald-50">
        <CardDisplayArea />
      </Box>
      <HStack className="h-2/5 w-full">
        <Box className="h-full w-full bg-emerald-600">
          <Hand />
        </Box>
        <Divider orientation="vertical" />
        <Box className="h-full w-fit bg-emerald-800">
          <ComboDisplayPopover />
        </Box>
      </HStack>
    </VStack>
  )
}

const ComboDisplayPopover = () => {
  const { hovering } = useHandLevelChecker()

  return <Popover
    isOpen={!!hovering}
    trigger={() => (
      <ComboDisplayArea />
    )}
  >
    {/*<PopoverBackdrop />*/}
    <PopoverContent className="shadow-soft-1">
      <ComboDisplayPopoverBody />
    </PopoverContent>
  </Popover>
}

const ComboDisplayPopoverBody = () => {
  const { hovering, successfulMatches } = useHandLevelChecker()

  if (hovering) {
    return <PopoverBody>{
      typedEntries(successfulMatches)
        .filter(([levelName]) => levelName === hovering)
        .map((([_, match]) => <VStack>{
          match.map(match => <Text>{match.matchName}</Text>)
        }</VStack>))
    }</PopoverBody>
  }
}
