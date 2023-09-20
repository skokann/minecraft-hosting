import { ModPack } from "./ModpackBlock";

function Modpacks() {
  return (
    <div className="grid w-full h-auto gap-5  grid-cols-2 pt-10 items-center justify-center md:grid-cols-3 bg-black ">
      <ModPack header="SkyFactory" image="img\modpacks\skyfactory.svg" />
      <ModPack header="Medieval Minecraft" image="img\modpacks\medieval.svg" />
      <ModPack header="Dark RPG" image="img\modpacks\dark.svg" />
      <ModPack header="Zombie Apocalypse" image="img\modpacks\zombie.svg" />
    </div>
  );
}

export default Modpacks;
