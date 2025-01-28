
import logo from "../assets/logo.svg"
import LogoPattern from "../components/LogoPattern";
import Logo from "../assets/Logo";

const Home = () => {
  return (
    <div className="flex flex-col justify-between w-full h-screen bg-gray-100">

      

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
              <div key={index} className="bg-gray-200 h-20 w-36 rounded-lg"></div>
            ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="flex justify-between items-center p-8">
        <div className="flex font-primary text-blue gap-10 text-5xl ">
          <a href="/design" className="hover:text-red transition duration-700">
            DESIGN
          </a>
          <a href="/music" className="hover:text-red transition duration-700">
            MUSIC
          </a>
          <a href="/about" className="hover:text-red transition duration-700">
            ABOUT
          </a>
        </div>
        <div className="flex font-secondary font-medium text-gray text-xl" >DESIGNED & DEVELOPED BY <b>ACHIRA SILVA</b></div>
      </footer>
    </div>
  );
};

export default Home;