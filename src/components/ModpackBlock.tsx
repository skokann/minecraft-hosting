type ModPackProps = {
  header: string;
  image: string;
};

export const ModPack = ({ header, image }: ModPackProps) => {
  return (
    <div className="flex w-full gap-5 h-auto items-center flex-col">
      <h4 className="text-base font-bold">{header}</h4>
      <img src={image} alt={header} className="" />
    </div>
  );
};
