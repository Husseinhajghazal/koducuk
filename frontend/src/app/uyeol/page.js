import LoginImage from "@/assets/images/signup.jpg";
import Form from "@/components/signup/Form";
import Image from "next/image";

export default function UyeOl() {
  return (
    <main>
      <div className="h-screen w-screen grid lg:grid-cols-3">
        <Form />
        <div className="hidden lg:block relative overflow-hidden">
          <Image
            src={LoginImage}
            alt="login image"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-ai-purple/30" />
        </div>
      </div>
    </main>
  );
}
