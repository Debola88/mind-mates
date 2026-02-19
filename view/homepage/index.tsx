import heroImage from "@/assets/image/Peace of mind-rafiki (1) 1.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomePageView() {
  return (
    <div className="max-w-7xl 2xl:max-w-360 mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {/* Hero Section */}
      <div className="flex max-md:flex-col-reverse justify-between items-center">
        <div className="flex-1">
          <h2 className="text-5xl text-black font-bold leading-14">
            Healthy Minds, Happy
            <br /> Lives{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#56E0E0] to-[#007299]">
              Mental Health
            </span>
            <br />
            Consultancy
          </h2>
          <p className="text-[#999AA1] pt-10">
            Welcome to MindMates, your haven for mental wellness! Explore
            resources, find support, and connect with a community dedicated to
            well-being.
          </p>
          <div className="pt-6">
            <Button className="bg-color px-7 rounded-full cursor-pointer">Get Started</Button>
          </div>
        </div>
        <div className="flex-1">
          <div className="w-auto ">
            <Image
              src={heroImage}
              width={600}
              height={500}
              alt=""
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
