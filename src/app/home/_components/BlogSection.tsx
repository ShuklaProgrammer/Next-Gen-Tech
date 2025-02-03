import PageTileBar from "@/components/PageTitleBar";
import BlogCards from "./_subcomponents/BlogCards";

const blogs = [
  {
    authorImage: "/home-assets/images/profilePic.jpg",
    authorName: "John Techson",
    authorRole: "Quantum Computing",
    date: "October 15, 2023",
    title: "The Quantum Leap in Computing",
    description:
      "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
    likes: 25.5,
    comments: 50,
    shares: 20,
    button: "View Blog",
  },
  {
    authorImage: "/home-assets/images/profilePic1.jpg",
    authorName: "Sarah Ethicist",
    authorRole: "AI Ethics",
    date: "November 5, 2023",
    title: "The Ethical Dilemmas of AI",
    description:
      "A deep dive into ethical challenges posed by AI, including bias, privacy, and transparency.",
    likes: 32,
    comments: 72,
    shares: 18,
    button: "View Blog",
  },
  {
    authorImage: "/home-assets/images/profilePic2.jpg",
    authorName: "Astronomer X",
    authorRole: "Space Exploration",
    date: "December 10, 2023",
    title: "The Mars Colonization Challenge",
    description:
      "Exploring the technical and logistical challenges of human colonization on Mars.",
    likes: 20,
    comments: 31,
    shares: 12,
    button: "View Blog",
  },
];

export default function BlogSection() {
  return (
    <div>
      <PageTileBar
        subTitle="A Knowledge Treasure Trove"
        title="Explore FutureTech's In-Depth Blog Posts"
        button="View All Blogs"
      />

      {blogs.map((blog, index) => (
        <BlogCards
          key={index}
          authorName={blog.authorName}
          authorRole={blog.authorRole}
          authorImage={blog.authorImage}
          date={blog.date}
          title={blog.title}
          description={blog.description}
          likes={blog.likes}
          shares={blog.shares}
          comments={blog.comments}
          button={blog.button}
        />
      ))}
    </div>
  );
}
