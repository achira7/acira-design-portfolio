import React from 'react';
import NavBar from '../components/NavBar';
import Thumbnail from '../components/Thumbnail';
import img from "../assets/img.jpg";
import DesignCard from '../components/DesignCard';

// Move mock data to a separate file in real application
const DESIGNS_DATA = [
  {
    id: 1,
    title: "Be Yourself and Shine 1",
    description: "A compelling description",
    img: img,
  },
  {
    id: 2,
    title: "Be Yourself and Shine 2",
    description: "A compelling description",
    img: img,
  },
  {
    id: 3,
    title: "Be Yourself and Shine 6",
    description: "A compelling description",
    img: img,
  },
  {
    id: 4,
    title: "Be Yourself and Shine 6",
    description: "A compelling description",
    img: img,
  },
  {
    id: 5,
    title: "Be Yourself and Shine 6",
    description: "A compelling description",
    img: img,
  },
  {
    id: 6,
    title: "Be Yourself and Shine 6",
    description: "A compelling description",
    img: img,
  },
];

const Designs = () => {
  // Add state management for future filter functionality
  const [searchQuery, setSearchQuery] = React.useState('');
  
  return (
    <div className="min-h-screen bg-gray-50">

      <FilterBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {DESIGNS_DATA.map((design) => (
            <Thumbnail
              key={design.id}
              {...design}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

// Extracted filter component
const FilterBar = ({ searchQuery, onSearchChange }) => (
  <div className="shadow-sm">
    <div className="container mx-auto px-4 py-6 flex items-center justify-between">
      <div className="flex items-center gap-4 w-full max-w-md">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search designs..."
          className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
        <FilterIcon />
      </button>
    </div>
  </div>
);

// SVG components with accessibility
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="w-6 h-6 text-gray-400"
    aria-hidden="true"
  >
    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
  </svg>
);

const FilterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-6 h-6 text-gray-600"
    aria-hidden="true"
  >
    <path d="M21 3H5a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1zm-6.707 9.293A.996.996 0 0 0 14 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L6 6.59V5h14.001l.002 1.583-5.71 5.71z" />
  </svg>
);

export default Designs;