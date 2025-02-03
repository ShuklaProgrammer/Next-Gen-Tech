import React from "react";
import { FaLightbulb } from "react-icons/fa";
import { RiGlobalFill } from "react-icons/ri";
import { SiTrustpilot } from "react-icons/si";

interface Feature {
  title: string;
  subTitle: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Latest News Updates",
    subTitle: "Stay Current",
    description: "Over 1,000 articles published monthly",
    icon: <FaLightbulb className="text-5xl text-rose-600" />,
  },
  {
    title: "Expert Contributors",
    subTitle: "Trusted Insights",
    description: "50+ renowned AI experts on our team",
    icon: <SiTrustpilot className="text-5xl text-rose-600" />,
  },
  {
    title: "Global Readership",
    subTitle: "Worldwide Impact",
    description: "2 million monthly readers",
    icon: <RiGlobalFill className="text-5xl text-rose-600" />,
  },
];

export default function Features() {
  return (
    <div className="flex border border-white/20 px-10 w-[85%] mx-auto my-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`space-y-4 w-full p-14 ${index !== features.length - 1 ? "border-r border-white/20" : ""}`}
        >
          {feature.icon}

          <div>
            <h4 className="text-xl text-white">{feature.title}</h4>
            <span className="text-white/50">{feature.subTitle}</span>
          </div>
          <p className="text-white/60">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
