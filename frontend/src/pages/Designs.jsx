import React from 'react';
import NavBar from '../components/NavBar';
import Thumbnail from '../components/Thumbnail';
import img from "../assets/img.jpg";
import DesignCard from '../components/DesignCard';
import DevCard from '../components/DevCard';

// Move mock data to a separate file in real application
const DESIGNS_DATA = [
  {
    id: 1,
    title: "Be Yourself and Shine 1",
    description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ind",
    tech: ["JavaScript", "NodeJS", "TailwindCSS"]
  },
  {
    id: 2,
    title: "Be Yourself and Shine 2",
    description: "A compelling description",
    tech: ["JavaScript", "TailwindCSS"]
  },
  {
    id: 3,
    title: "Be Yourself and Shine 6",
    description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tech: ["JavaScript", "NodeJS", "TailwindCSS"]
  },
  {
    id: 4,
    title: "Be Yourself and Shine 6",
    description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text everis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    tech: ["JavaScript", "NodeJS", "TailwindCSS"]
  },
  {
    id: 5,
    title: "Be Yourself and Shine 6",
    description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
    tech: [ "TailwindCSS"]
  },
  {
    id: 6,
    title: "Be Yourself and Shine 6",
    description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tech: ["JavaScript", "NodeJS", "TailwindCSS"]
  },
];

const Designs = () => {
  // Add state management for future filter functionality
  const [searchQuery, setSearchQuery] = React.useState('');
  
  return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 mx-auto max-w-[80%]">

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {DESIGNS_DATA.map((design) => (
              <DevCard
                key={design.id}
                title={design.title}
                description={design.description}
                tech={design.tech}
              />
            ))}
          </div>
        </div>
      );
    }


export default Designs;