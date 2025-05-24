import Image from "next/image";
import HtmlIcon from "@/assets/icons/html.svg";

const Card = () => {
  return (
    <div className="bg-black-700 rounded-3xl w-[350px] p-8 border-2 border-kc-gray/30 hover:border-ai-purple duration-200">
      <p className="text-kc-gray font-medium text-xl">kurs</p>
      <h5 className="text-white font-bold text-2xl text-wrap mt-5">
        Docker & Kubernetes Essentials
      </h5>
      <Image
        src={HtmlIcon}
        width={140}
        height={140}
        className="mx-auto my-16"
        alt=""
      />
      <a href="/giris">
        <button className="bg-kc-gray border-2 w-full border-kc-gray hover:bg-ai-purple hover:text-white hover:border-ai-purple duration-300 text-black-700 rounded-xl py-4 px-8 font-bold">
          Katıl
        </button>
      </a>
    </div>
  );
};

export default Card;
