import React from "react";
import NavBar from "../components/NavBar";
import Thumbnail from "../components/Thumbnail";
import img from "../assets/img.jpg";
import DesignCard from "../components/DesignCard";
import DevCard from "../components/DevCard";

// Move mock data to a separate file in real application

const imgLink =
  "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;center,top&resize=1200:*";

const behanceLink =
  "https://www.behance.net/gallery/215843079/Chimes-Audio-Streaming-App-Design";

const dribbleLink = "https://dribbble.com/shots/25786171-craft-mfg-logo";

const DESIGNS_DATA = [
  {
    id: 1,
    title: "Be Yourself and Shine 1",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind",
    tech: ["Photoshop", "Illustrator"],
    img: imgLink,
    behance: behanceLink,
    dribble: dribbleLink,
  },
  {
    id: 2,
    title: "Be Yourself and Shine 2 Rise and Shine part 5 - 876",
    description: "A compelling description",
    tech: ["Figma", "Photoshop", "Illustrator"],
    behance: behanceLink,
  },
  {
    id: 3,
    title: "Be Yourself and Shine 3",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tech: ["Photoshop", "Illustrator"],
    img: imgLink,
    behance: behanceLink,
  },
  {
    id: 4,
    title: "Be Yourself and Shine 4",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text everis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    tech: ["InDesign"],
    dribble: dribbleLink,
  },
  {
    id: 5,
    title: "Be Yourself and Shine 5",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    tech: ["TailwindCSS", "WordPress"],
  },
  {
    id: 6,
    title: "Be Yourself and Shine 6",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tech: ["JavaScript", "NodeJS", "JS", "X", "|", "TailwindCSS"],
    img: imgLink,
  },
];

const Designs = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 mx-auto max-w-[80%]">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {DESIGNS_DATA.map((design) => (
          <DesignCard
            img={design.img}
            key={design.id}
            title={design.title}
            description={design.description}
            tech={design.tech}
            behance={design.behance}
            dribble={design.dribble}
          />
        ))}
      </div>
    </div>
  );
};

export default Designs;
