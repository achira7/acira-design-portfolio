import pfp from "../assets/achira.jpeg";
import ImageModal from "../components/ImageModal";

const Home = () => {
  return (
    <div className="flex flex-row md:flex-col justify-between w-screen h-screen bg-Gray mx-auto max-w-[60%]">
      <div className="flex flex-col md:flex-row items-center justify-center md:p-10">
        <div className="flex md:max-w-44">
          <img src={pfp} alt="achira" className="rounded-full" />
        </div>
        <div className="flex flex-col md:pl-10">
          <h1 className="font-primary text-primary text-xl md:text-3xl">Hey there</h1>
          <p className="font-primary text-primary text-base md:text-base ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      {/* Main Content */}
      
    </div>
  );
};

export default Home;
