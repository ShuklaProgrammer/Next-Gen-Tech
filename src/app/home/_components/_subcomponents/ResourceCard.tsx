import LinkButton from "@/components/LinkButton";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FaRegEye } from "react-icons/fa";
import { GiWhiteBook } from "react-icons/gi";

interface Resource {
  id: number;
  icon: React.ReactNode;
  name: string;
  detail: string;
  button: string;
  image: string;
  imageTitle: string;
  imageDetail: string;
  totalName: string;
  totalDownloads: string;
  averageExpertise: string;
  averageExpertiseDetail: string;
}

interface People {
  id: number;
  name: string;
  designation: string;
  image: string;
}

interface ResourceProps {
  resources: Resource[];
  people: People[];
}

export default function ResourceCard({ resources, people }: ResourceProps) {
  return (
    <>
      {resources.map((resource, index) => (
        <div
          key={index}
          className={`lg:flex lg:px-0 px-5 justify-between items-center md:w-[85%] mx-auto py-10 ${
            resources.length - 1 !== index && "border-b border-white/30"
          }`}
        >
          <div className="lg:w-[33%] flex flex-col space-y-6">
            <GiWhiteBook className="text-rose-600 text-5xl" />
            <h2 className="text-white font-semibold text-4xl">
              {resource.name}
            </h2>
            <p className="text-white/50">{resource.detail}</p>
            <LinkButton>{resource.button}</LinkButton>
            <div className="sm:flex justify-between gap-10 bg-neutral-900 border border-white/20 rounded-md p-5">
              <div>
                <span className="text-white/50">Downloaded By</span>
                <h3 className="text-white text-xl font-semibold">
                  10k + Users
                </h3>
              </div>
              <div className="flex items-center">
                <AnimatedTooltip items={people} />
              </div>
            </div>
          </div>

          <div className="lg:w-[55%] space-y-6">
            <div className="sm:flex items-center justify-between mt-2 sm:mt-0">
              <h2 className="text-white font-semibold text-xl">
                {resource.imageTitle}
              </h2>
              <p className="text-white/50 sm:w-[70%]">{resource.imageDetail}</p>
            </div>
            <div className="w-full h-72 overflow-hidden bg-red-600 rounded-xl hover:shadow-[0_0_50px_pink] duration-500">
              <Image
                src={resource.image}
                alt={resource.image}
                width={800}
                height={500}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 ease-in-out"
              />
            </div>

            <div className="sm:flex items-center justify-between w-full gap-4">
              <div className="bg-neutral-900 border border-white/20 p-4 sm:w-[35%] rounded-md mb-4 sm:mb-0">
                <span className="text-white/50">{resource.totalName}</span>
                <h2 className="text-white font-semibold text-lg">
                  {resource.totalDownloads}
                </h2>
              </div>

              <div className="bg-neutral-900 border border-white/20 p-4 flex items-center justify-between sm:w-[80%] rounded-md">
                <div>
                  <span className="text-white/50">Download Formats</span>
                  <h1 className="text-white font-semibold text-lg">
                    PDF format for access.
                  </h1>
                </div>

                <Button variant="link">
                  Preview <FaRegEye className="text-yellow-500" />
                </Button>
              </div>
            </div>

            <div className="bg-neutral-900 border border-white/20 p-4 rounded-md">
              <span className="text-white/50">{resource.averageExpertise}</span>
              <p className="text-white font-semibold">
                {resource.averageExpertiseDetail}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
