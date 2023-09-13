import { Button } from "@nextui-org/button";
import { AiOutlinePlus } from "react-icons/ai";
import { Kaushan_Script } from "next/font/google";

const kaushan = Kaushan_Script({
  weight: "400",
  subsets: ["latin"],
});

const SidebarHeader = () => {
  return (
    <header className="flex flex-col gap-3 px-2">
      <h2 className={kaushan.className}>Nowted</h2>
      <Button radius="sm">
        <span>
          <AiOutlinePlus />
        </span>
        New Note
      </Button>
    </header>
  );
};

export default SidebarHeader;
