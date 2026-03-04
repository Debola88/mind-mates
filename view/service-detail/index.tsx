import { Button } from "@/components/ui/button";
import AnonymousPostCard from "./_component/anonymous-post";
import wave from "@/assets/image/Ellipse 21 (2).svg";
import lady from "@/assets/image/Ellipse 22.svg";
import guy from "@/assets/image/Ellipse 22 (1).svg";
import ChatCard from "./_component/chat-card";

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

export default function ServiceDetailView() {
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
                  Services Details
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
      {/* Community anonymous post     */}
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
      {/* Renowned consultants */}
      <div className="bg-[#FFFFFF]">
        <div className="max-w-7xl 2xl:max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <h2 className="text-5xl max-md:text-3xl text-center md:leading-14 font-bold">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#56E0E0] to-[#007299]">
              Renowned
              <br /> Consultants
            </span>
          </h2>
          <div className="max-w-7xl 2xl:max-w-360 mx-auto px-4 sm:px-6 lg:px-8">
            <ChatCard />
            <ChatCard />
          </div>
        </div>
      </div>
    </div>
  );
}
