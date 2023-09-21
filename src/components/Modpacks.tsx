import { ModPack } from "./ModpackBlock";

function Modpacks() {
  return (
    <div className="bg-black items-center flex flex-col py-5">
      <h1 className="font-Raleway font-bold text-4xl py-10 ">Our modpacks</h1>
      <div className="grid w-full  h-[51rem]  grid-cols-2 pt-10 items-center justify-center md:grid-cols-3 bg-black ">
        <ModPack header="SkyFactory" image="img\modpacks\skyfactory.svg" />
        <ModPack
          header="Medieval Minecraft"
          image="img\modpacks\medieval.svg"
        />
        <ModPack header="Dark RPG" image="img\modpacks\dark.svg" />
        <ModPack header="Zombie Apocalypse" image="img\modpacks\zombie.svg" />
        <ModPack
          header="Zombie Apocalypse"
          image="img\modpacks\allinone2.svg"
        />
        <ModPack header="Zombie Apocalypse" image="img\modpacks\zombie.svg" />
      </div>
    </div>
  );
}

export default Modpacks;
