import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import { downloadFileTypes } from "./utils/data";
function App() {
  const [downloadType, setDownloadType] = useState<Number>(0);
  const [url, setUrl] = useState<String>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUrl(value);
  };
  console.log(downloadType);
  console.log(url);
  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="grid gap-y-8">
        <Input
          variant="underlined"
          size="lg"
          type="url"
          label="Enter Youtube URL"
          className="w-96"
          color="primary"
          onChange={handleChange}
        />
        <div className="flex justify-between gap-x-4 items-center">
          <Select
            label="Select Type"
            className="max-w-lg "
            size="sm"
            isRequired
          >
            {downloadFileTypes.map((_) => (
              <SelectItem
                key={_.value}
                value={_.value}
                onClick={() => setDownloadType(_.id)}
                className=""
              >
                {_.label}
              </SelectItem>
            ))}
          </Select>

          <Button
            size="lg"
            color="primary"
            radius="sm"
            variant="ghost"
            onClick={() => toast.info("Processing")}
          >
            Download
          </Button>
        </div>
      </div>
      <Toaster/>
    </div>
  );
}

export default App;
