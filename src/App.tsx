import { Button, Flex, Select, Text } from "@radix-ui/themes";
import { useState } from "react";
import { downloadFileTypes } from "./utils/data";

function App() {
  const [selectedResolution, setSelectedResolution] = useState<string>(downloadFileTypes[0].value);
  return (
<>
    <Flex direction="column" gap="2" justify={"center"} align={"center"} className="h-screen flex items-center justify-center">
      <Text>Hello from Radix Themes :)</Text>
      <Button>Let's go</Button>
      <Select.Root defaultValue={downloadFileTypes[0].value}>
        <Select.Trigger />
        <Select.Content position="popper">
          {downloadFileTypes.map((e,i) => (
            <Select.Item onClick={() => setSelectedResolution(e.value)} key={i} value={e.value}>{ e.label }</Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
      <Text>{ selectedResolution }</Text>
    </Flex>
</>
  );
}

export default App;
