import { Card, CardAction, CardContent, CardTitle } from "@/components/ui/card";
import wellWisher from "@/assets/image/Ellipse 21.svg";
import helpingHand from "@/assets/image/Ellipse 21 (1).svg";
import smiley from "@/assets/image/Ellipse 20.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ChatCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12 gap-6 md:gap-10 place-items-center">
      <Card className="md:h-142.5 bg-[#F4FEFF]">
        <CardContent className="lg:px-10">
          <div className="flex items-center justify-center">
            <Image src={wellWisher} alt="" width={200} height={350} />
          </div>
          <CardTitle className="text-center pt-8 font-bold text-xl">
            Your Well-Wisher
          </CardTitle>
          <div className="flex justify-center gap-2 pt-4">
            <span className="border shadow-lg rounded-full px-4 py-1">
              Depression
            </span>
            <span className="border shadow-lg rounded-full px-4 py-1">
              Psychology
            </span>
          </div>
          <p className="pt-8">
            I believe that mental health is a key component of well-being and
            success. I use evidence based and holistic approaches to address the
            root causes of mental health issues.
          </p>
          <CardAction className="w-full pt-5">
            <Button className="text-white w-full text-lg font-semibold rounded-full bg-color">
              Start Chat
            </Button>
          </CardAction>
        </CardContent>
      </Card>
      <Card className="md:h-168 bg-[#F4FEFF]">
        <CardContent className="lg:px-10">
          <div className="flex items-center justify-center">
            <Image src={helpingHand} alt="" width={200} height={350} />
          </div>
          <CardTitle className="text-center pt-8 font-bold text-xl">
            Helping hands
          </CardTitle>
          <div className="flex justify-center gap-2 pt-4">
            <span className="border shadow-lg rounded-full px-4 py-1">
              Anxiety
            </span>
            <span className="border shadow-lg rounded-full px-4 py-1">
              Depression
            </span>
          </div>
          <p className="pt-8">
            I believe that mental health is a key component of well-being and
            success. I use evidence based and holistic approaches to address the
            root causes of mental health issues.
          </p>
          <CardAction className="w-full pt-5">
            <Button className="text-white w-full text-lg font-semibold rounded-full bg-color">
              Start Chat
            </Button>
          </CardAction>
        </CardContent>
      </Card>
      <Card className="md:h-142.5 bg-[#F4FEFF]">
        <CardContent className="lg:px-10">
          <div className="flex items-center justify-center">
            <Image src={smiley} alt="" width={200} height={350} />
          </div>
          <CardTitle className="text-center pt-8 font-bold text-xl">
            Smiley
          </CardTitle>
          <div className="flex justify-center gap-2 pt-4">
            <span className="border shadow-lg rounded-full px-4 py-1">
              Anxiety
            </span>
            <span className="border shadow-lg rounded-full px-4 py-1">
              Psychology
            </span>
          </div>
          <p className="pt-8">
            I believe that mental health is a key component of well-being and
            success. I use evidence based and holistic approaches to address the
            root causes of mental health issues.
          </p>
          <CardAction className="w-full pt-5">
            <Button className="text-white w-full text-lg font-semibold rounded-full bg-color">
              Start Chat
            </Button>
          </CardAction>
        </CardContent>
      </Card>
    </div>
  );
}
