import "../App.css";
function Hero() {
  return (
    <div className="w-screen h-screen bg1">
      <div className="w-full h-full bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col items-center justify-center pt-72 ">
        <h1 className="text-center text-white uppercase text-4xl xl:text-8xl font-stapel">
          CRAFTCONNECT
        </h1>
        <h2 className="text-center text-white uppercase pt-14 text-1xl xl:text-4xl font-stapel ">
          Your Ultimate Minecraft Hosting <br /> Solution
        </h2>
        <div className="flex flex-col items-center pt-6 gap-3 xl:flex-row xl:flex ">
          <div className=" uppercase rounded-[75px] border-zinc-800 border-2 border-radiu w-52 h-16  flex flex-col justify-center items-center  ">
            <p className="font-StapelLight">status</p>
            <p> 🟢 active</p>
          </div>
          <div className=" uppercase rounded-[75px] border-zinc-800  border-2 w-52 h-16 flex flex-col justify-center items-center">
            <p className="">online players</p>
            <p>4,688</p>
          </div>
          <div className="uppercase rounded-[75px] border-zinc-800  border-2 w-52 h-16 flex flex-col justify-center items-center">
            <p className="">online servers</p>
            <p>1,256</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
