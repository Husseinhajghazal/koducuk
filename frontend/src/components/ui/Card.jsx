import Image from "next/image";

const Card = ({ name, image_url, onEnroll }) => {
  return (
    <div className="bg-black-700 rounded-3xl p-8 border-2 border-kc-gray/30 hover:border-ai-purple duration-200">
      <p className="text-kc-gray font-medium text-xl">kurs</p>
      <h5 className="text-white font-bold text-xl lg:text-2xl text-wrap mt-5">
        {name}
      </h5>
      <Image
        src={image_url}
        width={140}
        height={140}
        className="mx-auto my-16"
        alt={name}
      />
      <button
        onClick={onEnroll}
        className="bg-kc-gray border-2 w-full border-kc-gray hover:bg-ai-purple hover:text-white hover:border-ai-purple duration-300 text-black-700 rounded-xl py-4 px-8 font-bold"
      >
        Katıl
      </button>
    </div>
  );
};

export default Card;
