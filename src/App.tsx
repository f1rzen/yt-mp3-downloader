import { Button, Flex, Text } from "@radix-ui/themes";

function App() {
  return (
<>
    <Flex direction="column" gap="2" justify={"center"} align={"center"} className="h-screen flex items-center justify-center">
      <Text>Hello from Radix Themes :)</Text>
      <Button>Let's go</Button>
    </Flex>
</>
  );
}

export default App;
