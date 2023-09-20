import { ModPack } from "./ModpackBlock";

function Modpacks() {
  return (
    <div>
      <div className="grid w-full h-screen gap-5 grid-cols-2 pt-10 items-center justify-center md:grid-cols-3 bg-black ">
        <ModPack header="SkyFactory" image="img\modpacks\skyfactory.svg" />
        <ModPack
          header="Medieval Minecraft"
          image="img\modpacks\medieval.svg"
        />
        <ModPack header="Dark RPG" image="img\modpacks\dark.svg" />
        <ModPack header="Zombie Apocalypse" image="img\modpacks\zombie.svg" />
      </div>
    </div>
  );
}

export default Modpacks;
