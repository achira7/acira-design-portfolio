import React from "react";

const Tag = ({text}) => {
  return (
    <div className="inline-flex flex-wrap rounded-full bg-zinc-800 py-2 px-5 text-slate-300 font-primary text-xs cursor-pointer hover:bg-zinc-600 duration-300">
      {text}
    </div>
  );
};

export default Tag;
