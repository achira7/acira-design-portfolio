import React from "react";
import NavBar from "../components/NavBar";
import img from "../assets/img.jpg";
import Thumbnail from "../components/Thumbnail";

const Designs = () => {
  const info = [
    {
      id: 1,
      title: "Be yourself and Shine",
      description:
        "This is a brief description of the image. It can contain more details.",
      img: img,
    },
    {
      id: 2,
      title: "Be yourself and Shine 2",
      description:
        "This is a brief description of the image. It can contain more details.",
      img: img,
    },
    {
      id: 3,
      title: "Be yourself and Shine 3",
      description:
        "This is a brief description of the image. It can contain more details.",
      img: img,
    },
    {
      id: 4,
      title: "Be yourself and Shine 3",
      description:
        "This is a brief description of the image. It can contain more details.",
      img: img,
    },
    {
      id: 5,
      title: "Be yourself and Shine 3",
      description:
        "This is a brief description of the image. It can contain more details.",
      img: img,
    },
    {
      id: 6,
      title: "Be yourself and Shine 3",
      description:
        "This is a brief description of the image. It can contain more details.",
      img: img,
    },
  ];
  return (
    <div className="">
      <NavBar />

      {/* Search and Functions */}
      <div className="flex justify-center items-center gap-5 my-8">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width={30}
            className="fill-blue cursor-pointer"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </div>

        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={35}
            className="fill-blue cursor-pointer"
            viewBox="0 0 24 24"
          >
            <path d="M21 3H5a1 1 0 0 0-1 1v2.59c0 .523.213 1.037.583 1.407L10 13.414V21a1.001 1.001 0 0 0 1.447.895l4-2c.339-.17.553-.516.553-.895v-5.586l5.417-5.417c.37-.37.583-.884.583-1.407V4a1 1 0 0 0-1-1zm-6.707 9.293A.996.996 0 0 0 14 13v5.382l-2 1V13a.996.996 0 0 0-.293-.707L6 6.59V5h14.001l.002 1.583-5.71 5.71z"></path>
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mx-8 md:mx-52 items-center justify-center">

        {info.map(({ id, title, description, img }) => (
          <Thumbnail
            key={id}
            img={img}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default Designs;
