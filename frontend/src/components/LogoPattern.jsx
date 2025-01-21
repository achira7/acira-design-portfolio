import logo from "../assets/logo.svg";
import Logo from "../assets/Logo";

const LogoPattern = () => {
  return (
    <div className="flex overflow-hidden w-full bg-transparent justify-end">
      <div className="flex translate-x-[22%]">
        {Array(5)
          .fill("ACIRA")
          .map((text, index) => (
            <Logo
              key={index}
              className={`fill-blue w-[30vh] md:w-[55vh]  ${
                index == 1 ? "opacity-100" : "opacity-50"
              }`}
            />
          ))}
      </div>
    </div>
  );
};

export default LogoPattern;
