const Thumbnail = ({ img, title, description }) => {
  return (
    <div className="flex justify-center items-center">
            <div className="relative w-[30vh] rounded-3xl overflow-hidden group cursor-pointer m-0">
              {/* Image */}
              <img src={img} alt={title} className="w-full" />
    
              {/* Overlay */}
              <div className="absolute flex inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition duration-700 items-end">
                <div className="text-white px-6 py-5 transform translate-y-full group-hover:translate-y-0 transition duration-700">
                  <h2 className="text-2xl font-secondary font-semibold tracking-wide capitalize my-2">
                    {title}
                  </h2>
                  <p className="text-lg font-body hidden md:flex">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          </div>
  )
}

export default Thumbnail