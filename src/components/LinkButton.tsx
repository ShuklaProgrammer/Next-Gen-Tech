import { Button } from "./ui/button";
import { FiArrowUpRight } from "react-icons/fi";

interface LinkButtonProps {
  children?: React.ReactNode;
}

export default function LinkButton({ children }: LinkButtonProps) {
  return (
    <Button variant="link">
      {children}
      <FiArrowUpRight className="md:text-2xl text-xl text-rose-600" />
    </Button>
  );
}
