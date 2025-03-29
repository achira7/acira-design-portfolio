import React from "react";
import DesignCard from "../components/DesignCard";

//icons
import Search from "../assets/icons/Search";

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
    <div className="min-h-screen bg-gray-50 py-8 px-4 mx-auto max-w-[80%]">
      {/* <div className="flex flex-row items-center gap-x-3">
        <Search className="text-white"/>
        <input type="text" className="rounded-full font-primary text-primary border border-white/50 bg-transparent px-3 py-1" />
      </div> */}

<div className=" bg-gray-900 flex items-center justify-center">
        <div className="flex flex-row items-center gap-x-3 relative py-3">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="search designs"
            className="w-full rounded-full font-primary text-white border-2 border-border bg-transparent px-6 py-4 focus:outline-none focus:border-white transition-colors"
          />
          <div className="absolute right-3">
            <div className="relative group z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full group-hover:blur-[0.55vw] duration-500"></div>
              <div className="relative">
                <button
                  type="submit"
                  className="border border-blue-400/70 group-hover:border-blue-300 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-700 via-blue-600 to-blue-500 text-white p-2 rounded-full duration-500 group-hover:shadow-xl"
                >
                  <Search size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

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
