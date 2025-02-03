import PageTileBar from "@/components/PageTitleBar";

import { GiWhiteBook } from "react-icons/gi";
import { IoIosWallet } from "react-icons/io";
import ResourceCard from "./_subcomponents/ResourceCard";

const resources = [
  {
    id: 1,
    icon: <GiWhiteBook />,
    name: "Ebook",
    detail:
      "Explore our collection of ebooks covering a wide spectrum of future technology topics.",
    button: "Download Ebooks Now",
    image: "/home-assets/images/ebook.jpg",
    imageTitle: "Variety of Topics",
    imageDetail:
      "Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).",
    totalName: "Total Ebooks",
    totalDownloads: "Over 100 ebooks",
    averageExpertise: "Average Author Expertise",
    averageExpertiseDetail:
      "Ebooks are authored by renowned experts with an average of 15 years of experience",
  },
  {
    id: 2,
    icon: <IoIosWallet />,
    name: "Whitepapers",
    detail:
      "Dive into comprehensive reports and analyses with our collection of whitepapers. ",
    button: "Download Whitepapers Now",
    image: "/home-assets/images/whitepaper.jpg",
    imageTitle: "Topics Coverage",
    imageDetail:
      "Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).",
    totalName: "Total Whitepapers",
    totalDownloads: "Over 50 whitepapers",
    averageExpertise: "Average Author Expertise",
    averageExpertiseDetail:
      "Whitepapers are authored by subject matter experts with an average of 20 years of experience.",
  },
];

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];

export default function ResourcesSection() {
  return (
    <>
      <PageTileBar
        subTitle="Your Gateway to In-Depth Information"
        title="Unlock Valuable Knowledge with FutureTech's Resources"
        button="View All Resources"
      />
      <ResourceCard resources={resources} people={people} />
    </>
  );
}
