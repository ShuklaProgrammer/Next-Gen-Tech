import Counter from "@/components/ui/counter";
import { FaPlus } from "react-icons/fa";

interface Target {
  title: string;
  target: number;
}

const targets: Target[] = [
  {
    title: "Resources Available",
    target: 300,
  },
  {
    title: "Total Downloads",
    target: 12,
  },
  {
    title: "Active Users",
    target: 10,
  },
];

export default function CounterUp() {
  return (
    <div className="flex border border-white/20 justify-around">
      {targets.map((counter, index) => (
        <div
          key={index}
          className={`space-y-2 p-10 ${index !== targets.length - 1 ? "border-r border-white/20" : ""}`}
        >
          <span className="text-5xl text-white font-semibold flex items-center">
            <Counter target={counter.target} />
            <FaPlus className="text-3xl text-rose-600" />
          </span>
          <p className="text-white/60">{counter.title}</p>
        </div>
      ))}
    </div>
  );
}
