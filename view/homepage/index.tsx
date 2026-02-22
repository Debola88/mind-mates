import heroImage from "@/assets/image/Peace of mind-rafiki (1) 1.svg";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import doctor from "@/assets/image/doctor (1) 1.svg";
import drug from "@/assets/image/Group 67.svg";
import hospital from "@/assets/image/View Hospitals.svg";
import ChatCard from "./_component/chat-card";

export default function HomePageView() {
  return (
    <div className=" ">
      {/* Hero Section */}
      <div className="bg-[#F4FEFF]">
        <div className="max-w-7xl 2xl:max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex max-md:flex-col-reverse items-center h-screen">
            <div className="flex-1">
              <h2 className="text-5xl max-md:text-3xl text-black font-bold md:leading-14">
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
                resources, find support, and connect with a community dedicated
                to well-being.
              </p>
              <div className="pt-6">
                <Button className="bg-color px-7 rounded-full cursor-pointer">
                  Get Started
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div className="w-full h-full">
                <Image
                  src={heroImage}
                  width={600}
                  height={500}
                  alt=""
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* why section */}
      <div className="bg-white max-w-7xl 2xl:max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl max-md:text-3xl font-bold text-center md:leading-14 pt-24">
          Why our{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#56E0E0] to-[#007299]">
            Mental Health
          </span>{" "}
          Consultants are
          <br /> the Best Choice
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 space-x-10 pt-16 ">
          <Card className="text-center bg-[#F4FEFF] border-0">
            <CardContent>
              <div className=" pt-16 flex justify-center">
                <Image src={doctor} width={200} height={355} alt="" />
              </div>
              <CardTitle className="font-bold text-2xl mt-6">
                Chat with Expert
              </CardTitle>
              <CardDescription className="mt-6">
                You can connect directly, quickly and easily, and there is no
                need to doubt the quality of the consultation and treatment
                offered.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center bg-bottomcolor border-0 text-white">
            <CardContent>
              <div className=" pt-16 flex justify-center">
                <Image src={drug} width={200} height={355} alt="" />
              </div>
              <CardTitle className="font-bold text-2xl mt-6">
                Anonymous Identity
              </CardTitle>
              <CardDescription className="mt-6 text-white">
                Talk about the health complaints you are experiencing and
                don&apos;t hesitate to ask about the proper treatment
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="text-center bg-[#F4FEFF] border-0">
            <CardContent>
              <div className=" pt-16 flex justify-center">
                <Image src={hospital} width={200} height={355} alt="" />
              </div>
              <CardTitle className="font-bold text-lg mt-6">
                Visit Hospitals
              </CardTitle>
              <CardDescription className="mt-6">
                Get priority services in hospitals with Haidoc. Which allows you
                to go to the hospital more practically and save time.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* Our Mind Mates Section */}
      <h2 className="text-5xl max-md:text-3xl font-bold text-center md:leading-14 pt-32 max-md:24">
        Our{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#56E0E0] to-[#007299]">
          Mind Mates
        </span>
      </h2>
      <div className="bg-linear-to-b from-[#D5E9F5] to-[#D4F5F5] mt-16">
        <div className="max-w-7xl 2xl:max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
          <ChatCard />
        </div>
      </div>
    </div>
  );
}
