import React from "react";
import { useRef, useState } from "react";
import DesignCard from "../components/DesignCard";


//icons
import Search from "../assets/icons/Search";
import Filter from "../assets/icons/Filter";
import ArrowLeft from "../assets/icons/ArrowLeft";

const imgLink =
  "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1xw:0.74975xh;center,top&resize=1200:*";

const behanceLink =
  "https://www.behance.net/gallery/215843079/Chimes-Audio-Streaming-App-Design";

const dribbleLink = "https://dribbble.com/shots/25786171-craft-mfg-logo";

const ExternalLink = "https://www.bbc.com/"

const DESIGNS_DATA = [
  {
    id: 1,
    title: "Be Yourself and Shine 1",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind",
    tech: ["Photoshop", "Illustrator"],
    category: "logo",
    img: [
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MTkyMHgxMDgwfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fDE5MjB4MTA4MHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1487252015168-776961549aca?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fDE5MjB4MTA4MCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlOQCpOkPwRh6t2JW2LQpFKilE9dsUe1SduQ&shttps://images.unsplash.com/photo-1502856755506-d8626589ef19?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8MTkyMHgxMDgwJTIwd2FsbHBhcGVyc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://haman.no/wp-content/uploads/2024/05/lukas-tennie-54Pfu4EK4pc-unsplash-1920x1080.jpg",
      "https://plus.unsplash.com/premium_photo-1723983555804-4f76968a2a2d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8MTkyMHgxMDgwJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1478001517127-fccc92f54906?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fDE5MjB4MTA4MCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D",
    ],
    behance: behanceLink,
    dribble: dribbleLink,
    link: ExternalLink
  },
  {
    id: 2,
    title: "Be Yourself and Shine 2 Rise and Shine part 5 - 876",
    description: "A compelling description",
    tech: ["Figma", "Photoshop", "Illustrator"],
    category: "logo",
    behance: behanceLink,
  },
  {
    id: 3,
    title: "Be Yourself and Shine 3",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tech: ["Photoshop", "Illustrator"],
    category: "uiux",
    //img: imgLink,
    img: [
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MTkyMHgxMDgwfGVufDB8fDB8fHww",
      
    ],
    behance: behanceLink,
  },
  {
    id: 4,
    title: "Be Yourself and Shine 4",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text everis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    tech: ["InDesign"],
    category: "print",
    dribble: dribbleLink,
    link: ExternalLink
  },
  {
    id: 5,
    title: "Be Yourself and Shine 5",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    tech: ["TailwindCSS", "WordPress"],
    category: "logo",
  },
  {
    id: 6,
    title: "Be Yourself and Shine 6",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tech: ["JavaScript", "NodeJS", "JS", "X", "|", "TailwindCSS"],
    category: "uiux",
    //img: imgLink,
    img: [
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MTkyMHgxMDgwfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fDE5MjB4MTA4MHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1487252015168-776961549aca?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fDE5MjB4MTA4MCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlOQCpOkPwRh6t2JW2LQpFKilE9dsUe1SduQ&shttps://images.unsplash.com/photo-1502856755506-d8626589ef19?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8MTkyMHgxMDgwJTIwd2FsbHBhcGVyc3xlbnwwfHwwfHx8MA%3D%3D",
      "https://haman.no/wp-content/uploads/2024/05/lukas-tennie-54Pfu4EK4pc-unsplash-1920x1080.jpg",
      "https://plus.unsplash.com/premium_photo-1723983555804-4f76968a2a2d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8MTkyMHgxMDgwJTIwd2FsbHBhcGVyfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1478001517127-fccc92f54906?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fDE5MjB4MTA4MCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D",
    ],
    link: ExternalLink
  },
];

const Designs = () => {
  const selectRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All");

  const [selectedCategory, setSelectedCategory] = useState(null);

const filteredDesigns = selectedCategory
  ? DESIGNS_DATA.filter((item) => item.category === selectedCategory)
  : DESIGNS_DATA;


  const options = [
    {
      value: 1,
      label: "All",
    },
    {
      value: 2,
      label: "Graphic Design",
    },
    {
      value: 3,
      label: "UI/UX",
    },
    {
      value: 4,
      label: "Print Design",
    },
  ];

  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <div className="min-h-screen bg-zinc-950 py-8 px-4 mx-auto w-full items-center justify-center">
      <div className="flex flex-col bg-gray-900 items-center justify-center">
        <div className="flex flex-row gap-x-7  w-[40%]">
          <div className="flex flex-row  rounded-full items-center justify-center gap-x-3 relative ">
            <div>
              <div className="flex " title="Select Design Category">
                <select className="flex text-center cursor-pointer text-base items-center justify-center font-primary bg-zinc-700 hover:bg-zinc-800 duration-500 text-zinc-200 py-4 px-6 border focus:border-white/70 appearance-none border-border rounded-full">
                  <option value="all">All Categories</option>
                  <option value="logo">Logo Design</option>
                  <option value="uiux">UI/UX</option>
                  <option value="print">Print</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-row w-full items-center gap-x-3 relative py-3 ">
            <input
              type="text"
              title="Search Designs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="search designs"
              className="w-full rounded-full bg-zinc-800/60 font-primary text-white border-2 border-border  px-6 py-4 focus:outline-none focus:border-white/70 transition-colors duration-500"
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
      </div>

      <div className="flex w-full items-center justify-center mt-5 mb-4">
        <hr className="h-[1px] w-[60%] border-t-0 bg-border/50" />
      </div>

      <div className="flex items-center justify-center">
        <div className="w-[80%] grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {DESIGNS_DATA.map((design) => (
            <DesignCard
              img={design.img}
              key={design.id}
              title={design.title}
              description={design.description}
              tech={design.tech}
              behance={design.behance}
              dribble={design.dribble}
              link={design.link}
              category={design.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Designs;
