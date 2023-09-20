type ModPackProps = {
  header: string;
  image: string;
};

export const ModPack = ({ header, image }: ModPackProps) => {
  return (
    <div className="flex w-full items-center flex-col">
      <h4 className="text-base pb-10 font-bold">{header}</h4>
      <img src={image} alt={header} className=" " />
    </div>
  );
};
