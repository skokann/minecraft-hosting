import "../App.css";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-screen bg1 ">
      <div className="w-full h-full bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col items-center justify-center pt-36 ">
        <h1 className="text-center text-white uppercase text-4xl xl:text-8xl font-stapel">
          CRAFTCONNECT
        </h1>
        <h2 className="text-center text-white uppercase pt-14 text-1xl xl:text-4xl font-stapel ">
          Your Ultimate Minecraft Hosting <br /> Solution
        </h2>
        <div className="flex flex-col items-center pt-6 gap-4 xl:gap-3 xl:flex-row xl:flex ">
          <div className=" uppercase rounded-[75px] border-zinc-800 border-2 border-radiu w-52 h-[3.7rem]  flex flex-col justify-center items-center  ">
            <p className="text-xs font-StapelLight text-gray-500">status</p>
            <p className="text-sm"> 🟢 active</p>
          </div>
          <div className=" uppercase rounded-[75px] border-zinc-800  border-2 w-52 h-[3.7rem] flex flex-col justify-center items-center">
            <p className=" text-xs text-gray-500">online players</p>
            <p>4,688</p>
          </div>
          <div className="uppercase rounded-[75px] border-zinc-800  border-2 w-52 h-[3.7rem] flex flex-col justify-center items-center">
            <p className=" text-xs text-gray-500">online servers</p>
            <p>1,256</p>
          </div>
        </div>
        <button
          onClick={() => navigate("/register")}
          className="mt-8 bg-uran text-black"
        >
          Register your own server
        </button>
      </div>
    </div>
  );
}

export default Hero;
