import { Button } from "@/components/ui/button";
import ConsultantCard from "./_component/consultant-card";
import doctor from "@/assets/image/Doctor-pana 1.svg";
import Image from "next/image";

export default function AboutPageView() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-linear-to-b from-[#D5E9F5] to-[#D4F5F5]">
        <div className="max-w-7xl 2xl:max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex max-md:flex-col-reverse items-center h-[50vh]">
            <div className="flex md:gap-6">
              <div className="border-2 border-[#02607E]"></div>
              <div className="space-y-4">
                <h1 className="text-3xl text-[#02607E] font-semibold">
                  About Us
                </h1>
                <p className="text-[#02607E]">
                  Our website offers a range of services to support your
                  well-being, including online therapy sessions with licensed
                  professionals, community forums for peer support, and
                  personalized mental health assessments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MENTAL HEALTH CONSULTRANTS */}
      <div className="bg-[#FFFFFF]">
        <div className="max-w-7xl 2xl:max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="text-5xl max-md:text-3xl text-center md:leading-14 font-bold">
            Discover the Faces Behind Our
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#56E0E0] to-[#007299]">
              Mental Health Consultants
            </span>
          </h2>
          <div className="max-w-7xl 2xl:max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
            <ConsultantCard />
            <ConsultantCard />
          </div>
          <div className="text-center mt-10">
            <Button className="px-12 py-6 rounded-full  text-lg bg-color text-white cursor-pointer">
              View All
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-linear-to-b from-[#D5E9F5] to-[#D4F5F5] my-16">
        <div className="max-w-7xl 2xl:max-w-360 mx-auto px-4 sm:px-6 lg:px-8 flex max-md:flex-col items-center">
          <div className="flex-1">
            <Image
              src={doctor}
              alt=""
              width={500}
              height={500}
              className="object-contain -mb-7.5"
            />
          </div>
          <div className="flex-1 text-[#02607E] py-10">
            <h2 className="text-3xl lg:text-4xl font-bold py-6">Mind Mates</h2>
            <p className="text-lg font-semibold">
              Our mental health counselors are highly qualified professionals
              with extensive experience in their fields, providing expert
              support and guidance tailored to individual needs. Trust in their
              expertise to navigate and address your mental health concerns
              effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
