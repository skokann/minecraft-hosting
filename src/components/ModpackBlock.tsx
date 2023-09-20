type ModPackProps = {
  header: string;
  image: string;
};

export const ModPack = ({ header, image }: ModPackProps) => {
  return (
    <div className="flex w-auto h-max items-center flex-col">
      <h4 className="text-xl w-2 font-bold">{header}</h4>
      <img src={image} alt={header} className="w-24 pt-5" />
    </div>
  );
};
