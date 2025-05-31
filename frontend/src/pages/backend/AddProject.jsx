import React, { useState } from "react";

const AddProject = () => {
  const [tools, setTools] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      if (!tools.includes(inputValue.trim())) {
        setTools([...tools, inputValue.trim()]);
      }
      setInputValue("");
    }
  };

  const removeTool = (toolToRemove) => {
    setTools(tools.filter((tool) => tool !== toolToRemove));
  };

  const [images, setImages] = useState([]);

  return (
    <div className="flex flex-col items-center justify-center px-5 py-10 font-primary text-primary">
      <div className="flex w-full max-w-md sm:max-w-xl lg:max-w-2xl my-5 rounded-full overflow-hidden border-2 border-border bg-zinc-900">
        <div className="w-1/2 text-center py-3 cursor-pointer hover:bg-zinc-700 duration-300">
          Design
        </div>
        <div className="w-1/2 text-center py-3 cursor-pointer hover:bg-zinc-700 duration-300">
          Development
        </div>
      </div>

      <form className="w-full max-w-md sm:max-w-xl lg:max-w-2xl flex flex-col gap-6">
        {/* Category Dropdown */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-white/70">Category</label>
          <select
            name="category"
            id="category"
            className="bg-zinc-800/60 text-white text-sm px-4 py-2 rounded-xl border-2 border-border focus:outline-none focus:border-white/70 transition"
          >
            <option value="">Graphic Design</option>
            <option value="">UI/UX</option>
            <option value="">Print Design</option>
            <option value="">Logo Design</option>
          </select>
        </div>

        {/* Project Title */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-white/70">Project Title</label>
          <input
            type="text"
            className="bg-zinc-800/60 text-white text-sm px-4 py-2 rounded-xl border-2 border-border focus:outline-none focus:border-white/70 transition"
            placeholder="Enter project title"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-white/70">Description</label>
          <textarea
            rows="4"
            className="bg-zinc-800/60 text-white text-sm px-4 py-2 rounded-xl border-2 border-border focus:outline-none focus:border-white/70 transition resize-none"
            placeholder="Write a brief description..."
          ></textarea>
        </div>

        {/* Tools Used */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-white/70">Tools Used</label>
          <div className="flex flex-wrap gap-2 bg-zinc-800/60 p-3 rounded-xl border-2 border-border min-h-[3rem] items-center">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 text-white px-3 py-1 rounded-full text-sm"
              >
                {tool}
                <button
                  type="button"
                  onClick={() => removeTool(tool)}
                  className="text-white hover:text-red-400 transition-colors"
                >
                  ✕
                </button>
              </div>
            ))}
            <input
              type="text"
              className="bg-transparent outline-none text-white placeholder-white/50 text-sm flex-grow min-w-[120px]"
              placeholder="Press Enter to add"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>

        {/* Image Upload with Preview & Reorder */}
        <div className="flex flex-col gap-2">
          <label className="text-sm text-white/70">Project Images</label>

          <div className="flex items-center gap-4">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => {
                const files = Array.from(e.target.files);
                const previews = files.map((file) => ({
                  file,
                  url: URL.createObjectURL(file),
                }));
                setImages((prev) => [...prev, ...previews]);
              }}
              className="text-sm text-white"
            />
          </div>

          <div className="flex flex-wrap gap-4 mt-2">
            {images.map((img, index) => (
              <div
                key={index}
                className="relative w-24 h-24 rounded-xl overflow-hidden border-2 border-border bg-zinc-800 group"
              >
                <img
                  src={img.url}
                  alt={`upload-${index}`}
                  className="object-cover w-full h-full"
                />
                <button
                  type="button"
                  onClick={() => {
                    setImages(images.filter((_, i) => i !== index));
                    URL.revokeObjectURL(img.url);
                  }}
                  className="absolute top-1 right-1 text-white bg-black/50 rounded-full px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition"
                >
                  ✕
                </button>

                {/* Reorder Buttons */}
                <div className="absolute bottom-1 left-1 flex gap-1 opacity-0 group-hover:opacity-100 transition">
                  <button
                    type="button"
                    onClick={() =>
                      index > 0 &&
                      setImages((prev) => {
                        const newArr = [...prev];
                        [newArr[index], newArr[index - 1]] = [
                          newArr[index - 1],
                          newArr[index],
                        ];
                        return newArr;
                      })
                    }
                    className="text-white bg-black/50 rounded-full px-2 py-1 text-xs"
                  >
                    ↑
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      index < images.length - 1 &&
                      setImages((prev) => {
                        const newArr = [...prev];
                        [newArr[index], newArr[index + 1]] = [
                          newArr[index + 1],
                          newArr[index],
                        ];
                        return newArr;
                      })
                    }
                    className="text-white bg-black/50 rounded-full px-2 py-1 text-xs"
                  >
                    ↓
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button (optional styling) */}
        <button
          type="submit"
          className="mt-4 bg-white text-zinc-900 font-semibold py-2 px-6 rounded-full shadow-md hover:bg-white/80 transition w-fit self-center"
        >
          Submit Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;
