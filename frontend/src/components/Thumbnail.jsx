import PropTypes from 'prop-types';

const Thumbnail = ({ img, title, description }) => {
  return (
    <article className="flex justify-center items-center m-0">
      <div className="relative w-[30vh] rounded-3xl overflow-hidden group cursor-pointer">
        {/* Image with lazy loading and accessibility */}
        <img 
          src={img} 
          alt={title} 
          className="w-full h-auto object-cover"
          loading="lazy"
          style={{ aspectRatio: '1/1' }}
        />
        
        {/* Overlay with improved transitions */}
        <div className="absolute inset-0 flex bg-black/0 group-hover:bg-black/60 transition-colors duration-300 items-end">
          <div className="text-white px-6 py-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
            <h2 className="text-2xl font-secondary font-semibold tracking-wide mb-2">
              {title}
            </h2>
            <p className="text-lg font-body line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

Thumbnail.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Thumbnail;