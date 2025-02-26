import PageTileBar from "@/components/PageTitleBar";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

export default function ReadersSection() {
  const generateStars = (count: number) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <FaStar
          className={`text-xl hover:cursor-pointer text-orange-400`}
          key={i}
        />
      );
    }
    return stars;
  };

  const readers = [
    {
      name: "Michael Johnson",
      image: "/home-assets/images/readers/reader1.jpg",
      location: "London, UK",
      comment:
        "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
    },
    {
      name: "Emily Davis",
      location: "Toronto, Canada",
      image: "/home-assets/images/readers/reader2.jpg",
      comment:
        "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions.",
    },
    {
      name: "Rajesh Patel",
      location: "Mumbai, India",
      image: "/home-assets/images/readers/reader3.jpg",
      comment:
        "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.",
    },
    {
      name: "Lara Gómez",
      location: "Madrid, Spain",
      image: "/home-assets/images/readers/reader4.jpg",
      comment:
        "The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view of what lies beyond Earth.",
    },
    {
      name: "Hiroshi Tanaka",
      image: "/home-assets/images/readers/reader5.jpg",
      location: "Tokyo, Japan",
      comment:
        "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics.",
    },
    {
      name: "Chloe Martin",
      location: "Sydney, Australia",
      image: "/home-assets/images/readers/reader6.jpg",
      comment:
        "The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability.",
    },
  ];
  return (
    <>
      <PageTileBar
        subTitle="What Our Readers Say"
        title="Real Words from Real Readers"
        button="View All Testimonials"
      />

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 w-[85%] mx-auto py-14">
        {readers.map((reader, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-8 border border-1 border-white/30 rounded-md p-5 shadow-[0_0_10px_yellow]"
          >
            <div className="flex items-center gap-2">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <Image
                  src={reader.image}
                  width={100}
                  height={100}
                  alt="profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg text-white font-semibold capitalize">
                  {reader.name}
                </h4>
                <p className="text-white/50">{reader.location}</p>
              </div>
            </div>
            <div className="bg-neutral-900 border border-white/20 p-4 pt-0 flex flex-col items-center rounded-md space-y-2">
              <div className="flex gap-1 bg-neutral-800 p-2 border-white-20 rounded-b-md">
                {generateStars(5)}
              </div>
              <p className="text-white text-center">{reader.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
