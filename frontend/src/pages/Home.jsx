import logo from "../assets/logo.svg";
import LogoPattern from "../components/LogoPattern";
import Logo from "../assets/Logo";
import pfp from '../assets/achira.jpeg';

const Home = () => {
  return (
    <div className="flex flex-col justify-between w-full h-screen bg-gray-100 mx-auto max-w-[60%] ">
      <div className="flex items-center justify-center p-10">
        <div className="flex max-w-44">
          <img src={pfp} alt="achira" className="rounded-full" />
        </div>
        <div className="flex flex-col pl-10">
          <h1 className="font-primary text-primary text-3xl">Hey there</h1>
          <p className="font-primary text-primary text-xl">
            I am a creative individual with this and that etc etc
            I am a creative individual with this and that etc etc
            I am a creative individual with this and that etc etc
            I am a creative individual with this and that etc etc
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-between items-center p-8 ">
        {/* Left Section */}
        <div className="flex flex-col gap-5 font-primary text-gray text-4xl tracking-wider ">
          <h1>DESIGN GENERALIST</h1>
          <h1>INTERNET SAVANT</h1>
          <h1>DEVELOPER</h1>
          <h1>ARTIST</h1>
        </div>

        {/* Placeholder for Right Section */}
        <div className="grid grid-cols-2 gap-4">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="bg-gray-200 h-20 w-36 rounded-lg"
              ></div>
            ))}
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default Home;
