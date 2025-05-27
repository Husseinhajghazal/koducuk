import Container from "@/components/layout/Container";
import heroImage from "@/assets/images/hero-image.webp";
import Image from "next/image";
import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <div className="bg-purplish-black overflow-x-clip">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-20">
          <div className="flex flex-col gap-6">
            <h3 className="font-bold text-center md:text-start text-3xl md:text-4xl lg:text-6xl text-white">
              Çocuğunuzu <span className="text-ai-purple">dijital çağa</span>{" "}
              uygun şekilde eğitin
            </h3>
            <p className="text-kc-gray text-center md:text-start md:text-lg font-medium">
              koducuk, 5-18 yaş aralığındaki çocuklara yönelik, kodlama
              konusunda online eğitim sunan bir online platformdur.
            </p>
            <a href="/giris">
              <Button type="button" className="w-full md:w-max">
                İlk Adımı At
              </Button>
            </a>
          </div>
          <div className="lg:w-[700px]">
            <Image src={heroImage} alt="hero image" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
