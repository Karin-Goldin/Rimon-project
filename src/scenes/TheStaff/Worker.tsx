type Props = {
  title: string;
  description: string;
  image: string;
};

const Worker = ({ title, description, image }: Props) => {
  return (
    <li className="relative inline-block h-[380px] ">
      <div
        className={`p-5 absolute flex h-[380px] flex-col item-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90 z-20`}
      >
        <p className="text-2xl">{title}</p>
        <p className="mt-5 text-lg">{description}</p>
      </div>
      <img src={image} alt={`${image}`} />
    </li>
  );
};

export default Worker;
