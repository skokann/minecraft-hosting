function Discover() {
  return (
    <div className="bg-black">
      <h1 className="text-center py-10">Discover us</h1>
      <div className="flex flex-col text-sm text-center  justify-center gap-5 px-10 items-center w-full h-screen  pt-10   ">
        <div className="bg-green-500  p-2 rounded-2xl">
          <p className="text-xl m-1 ">DDOS PROTECTION</p>
          <p>
            Always-on traffic monitoring: Your application traffic patterns are
            monitored 24 hours a day, 7 days a week, looking for indicators of
            DDoS attacks.
          </p>
        </div>
        <div className="bg-green-500 p-2 rounded-2xl ">
          <p className="text-xl m-1">LOCATIONS AROUND THE WORLD</p>
          <p>
            We own and operate data centers around the world to keep our
            products running 24 hours a day, 7 days a week.
          </p>
        </div>
        <div
          className="
        bg-green-500 p-2 rounded-2xl "
        >
          <p className="text-xl m-1">24/7/365 SUPPORT</p>
          <p>
            We've been running gaming servers for years, and we're here to use
            that experience to help you. Whether it's a modpack issue, plugin
            problem, or something else
          </p>
        </div>
        <div
          className="
        bg-green-500 p-2 rounded-2xl"
        >
          <p className="text-xl m-1">Instant Setup</p>
          <p>
            Servers are automatically provisioned upon purchase and ready to
            play in seconds so you can start building today.
          </p>
        </div>
        <div className="bg-green-500 p-2 rounded-2xl">
          <p className="text-xl m-1">2,000+ SERVER MODPACK INSTALLS</p>
          <p>
            We support modpacks from the following Launchers: CurseForge,
            ATLauncher and the FTB App.
          </p>
        </div>
        <div className="bg-green-500 p-2 rounded-2xl">
          <p className="text-xl m-1">NVME SSDS</p>
          <p>
            NVMe technology provides superior storage, speed and compatibility
            utilizing PCIe sockets to transfer 25x more data than SATA.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Discover;
