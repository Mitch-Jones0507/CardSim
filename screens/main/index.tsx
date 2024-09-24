import { Box } from "@/components/ui/box"
import { Hand } from "@/screens/main/Hand"
import { CardDisplayArea } from "@/screens/main/CardDisplayArea"
import { Divider } from "@/components/ui/divider"
import { HStack } from "@/components/ui/hstack"
import { VStack } from "@/components/ui/vstack"
import { ComboDisplayArea } from "@/components/ComboDisplayArea"

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
          <ComboDisplayArea />
        </Box>
      </HStack>
    </VStack>
  )
}

