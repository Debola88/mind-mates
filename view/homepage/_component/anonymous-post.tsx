import wave from "@/assets/image/Ellipse 21 (2).svg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import { MdOutlineFavoriteBorder } from "react-icons/md";

interface CardProps {
  name: string;
  comment: string;
  image: StaticImageData;
}

export default function AnonymousPostCard({ name, comment, image }: CardProps) {
  return (
    <div className="hover:bg-linear-to-r from-[#56E0E0] to-[#007299] hover:text-white border-2 rounded-4xl py-5 px-5 lg:px-20 flex my-5 lg:my-10 transition-all duration-200 shadow-md">
      <div className="w-auto">
        <Image
          src={image}
          alt=""
          width={150}
          height={300}
          className="object-cover"
        />
      </div>
      <div className="pl-10 pr-5 lg:pr-20">
        <h3 className="font-semibold text-2xl lg:text-3xl">{name}</h3>
        <p className="pt-3 text-lg text-[#999AA1] hover:text-white">
          {comment}
        </p>
      </div>
      <div className="ml-auto text-xl lg:text-2xl"> 
        <MdOutlineFavoriteBorder />
      </div>
    </div>
  );
}
