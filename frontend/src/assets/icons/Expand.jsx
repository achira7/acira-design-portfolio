import React from "react";

const Expand = () => {
  return (
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   width={24}
    //   height={24}
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   stroke="currentColor"
    //   strokeWidth={2}
    //   strokeLinecap="round"
    //   strokeLinejoin="round"
    //   className="icon icon-tabler icons-tabler-outline icon-tabler-arrows-maximize"
    // >
    //   <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    //   <path d="M16 4l4 0l0 4" />
    //   <path d="M14 10l6 -6" />
    //   <path d="M8 20l-4 0l0 -4" />
    //   <path d="M4 20l6 -6" />
    //   <path d="M16 20l4 0l0 -4" />
    //   <path d="M14 14l6 6" />
    //   <path d="M8 4l-4 0l0 4" />
    //   <path d="M4 4l6 6" />
    // </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-maximize"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
      <path d="M4 16v2a2 2 0 0 0 2 2h2" />
      <path d="M16 4h2a2 2 0 0 1 2 2v2" />
      <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
    </svg>
  );
};

export default Expand;
