import { Button } from "./ui/button";
import { FiArrowUpRight } from "react-icons/fi";

export default function ArrowButton() {
  return (
    <Button variant="rose" className="p-4 rounded-full">
      <FiArrowUpRight className="text-2xl" />
    </Button>
  );
}
