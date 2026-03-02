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
import peaceOne from "@/assets/image/image 14.svg";
import peaceTwo from "@/assets/image/image 15.svg";
import trust from "@/assets/image/Treatments to Manage PCOS Symptoms _ PCOS Living 1.svg";
import wave from "@/assets/image/Ellipse 21 (2).svg";
import lady from "@/assets/image/Ellipse 22.svg";
import guy from "@/assets/image/Ellipse 22 (1).svg";
import AnonymousPostCard from "./_component/anonymous-post";
import search from "@/assets/image/Mind Mate Search.svg";
import Faq from "./_component/faq";

const anonymousPosts = [
  {
    name: "Mystery Mind",
    comment:
      "Hi, i had been suffering from depression since past few months then i came across this website, and consulted... It was a life changing experience.",
    image: wave,
  },
  {
    name: "Micky Mouse",
    comment:
      "Really thankful to the MindMates! They helped me overcome my situation of anxiety, which kept me ...from living a normal life. I am now able to enjoy my life and be happy.",
    image: lady,
  },
  {
    name: "Shadow Light",
    comment:
      "Few months back, I was just like a typical depressed person, but now, I’m a whole new person, with much more confidence in me, all thanks to ...MindMates. I am now able to enjoy my life and be happy.",
    image: guy,
  },
];

export default function HomePageView() {
  return (
    <div>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 pt-16 ">
          <Card className="text-center bg-[#F4FEFF] border-0 max-md:w-full">
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
          <Card className="text-center bg-bottomcolor border-0 text-white max-md:w-full">
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
          <Card className="text-center bg-[#F4FEFF] border-0 max-md:w-full">
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
      {/* About us */}
      <div className="bg-white max-w-7xl 2xl:max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <h2 className="text-black font-bold text-xl text-center">About us</h2>
        <div className="flex max-md:flex-col gap-6 items-center pt-16">
          <div className="flex gap-4">
            <div className="h-full ">
              <Image
                src={trust}
                alt=""
                width={250}
                height={300}
                className="object-contain"
              />
            </div>
            <div>
              <div className="w-full ">
                <Image
                  src={peaceTwo}
                  alt=""
                  width={235}
                  height={250}
                  className="object-contain"
                />
              </div>
              <div className="w-full">
                <Image
                  src={peaceOne}
                  alt=""
                  width={260}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-5xl max-md:text-3xl font-bold md:leading-14">
              Discover the Faces Behind <br /> Our{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#56E0E0] to-[#007299]">
                Mental Health
              </span>
              <br /> Consultancy
            </h2>
            <p className="text-[#999AA1] pt-6">
              Meet our compassionate Mates at MindMates. With expertise in
              various fields, they&apos;re here to support you on your journey
              to mental wellness.
            </p>
            <Button className="text-lg font-semibold py-6 px-8 bg-color bg-color rounded-full mt-10 cursor-pointer">
              Explore Experts
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-[#F4FEFF]">
        <div className="max-w-7xl 2xl:max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="text-5xl max-md:text-3xl text-center md:leading-14 font-bold">
            Community{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#56E0E0] to-[#007299]">
              Anonymous
              <br /> Posts
            </span>
          </h2>
          <div className="pt-10">
            {anonymousPosts.map((post, index) => (
              <AnonymousPostCard
                key={index}
                name={post.name}
                comment={post.comment}
                image={post.image}
              />
            ))}
          </div>
          <div className="text-center pt-10">
            <Button
              className="px-12 py-6
             rounded-full  text-lg bg-color text-white cursor-pointer"
            >
              View All
            </Button>
          </div>
        </div>
      </div>
      {/* next section */}
      <div className="bg-white max-w-7xl 2xl:max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex max-md:flex-col items-center gap-10 lg:gap-20">
          <div className="w-full flex-1">
            <Image
              src={search}
              alt=""
              width={500}
              height={500}
              className="object-cover overflow-hidden"
            />
          </div>
          <div className="w-full flex-1">
            <h2 className="text-5xl max-md:text-3xl md:leading-14 font-bold">
              Find Your perfect
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#56E0E0] to-[#007299]">
                Mind Mate
              </span>
            </h2>
            <Button className="mt-10 px-6 py-6 bg-color text-lg text-white rounded-full cursor-pointer">
              Explore Experts
            </Button>
          </div>
        </div>
      </div>
      {/* Faq section */}
      <div>
        <Faq />
      </div>
    </div>
  );
}
