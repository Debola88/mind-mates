import { Card, CardAction, CardContent, CardTitle } from "@/components/ui/card";
import wellWisher from "@/assets/image/Ellipse 21.svg";
import helpingHand from "@/assets/image/Ellipse 21 (1).svg";
import smiley from "@/assets/image/Ellipse 20.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function ConsultantCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-12 gap-6 md:gap-10 place-items-center">
      <Card className="md:h-142.5 w-full">
        <CardContent className="lg:px-10">
          <div className="flex items-center justify-center">
            <Image
              src={wellWisher}
              alt=""
              width={200}
              height={200}
              className="object-cover border rounded-full"
            />
          </div>
          <CardTitle className="text-center pt-8 font-bold text-xl">
            Smiley
          </CardTitle>
          <div className="text-[#999AA1] max-md:text-sm">
            <p className="pt-8">M.Phil Clinical Psychology (RCI).</p>
            <p>Diploma in Guidance & Counseling</p>
            <p>M.A. Psychology</p>
            <p>B.A. (Hons) Psychology.</p>
            <br />
            <p>
              <span className="font-semibold text-[#5B5B5C]">Address :</span> Any City, XYZ MP
            </p>
          </div>
          <CardAction className="pt-5 w-full flex justify-center">
            <Button className="text-white text-lg font-semibold rounded-full px-6 bg-color">
              Start Chat
            </Button>
          </CardAction>
        </CardContent>
      </Card>
      <Card className="md:h-142.5 w-full">
        <CardContent className="lg:px-10">
          <div className="flex items-center justify-center">
            <Image
              src={helpingHand}
              alt=""
              width={200}
              height={200}
              className="object-cover border rounded-full"
            />
          </div>
          <CardTitle className="text-center pt-8 font-bold text-xl">
            Your Well Wisher
          </CardTitle>
          <div className="text-[#999AA1] max-md:text-sm">
            <p className="pt-8">M.A Counselling Psychology APA Member</p>
            <p>Certified NLP practitioner</p>
            <p>Certified Relationship Coach</p>
            <br />
            <p>
              <span className="font-semibold text-[#5B5B5C]">Address :</span> Any City, XYZ MP
            </p>
          </div>
          <CardAction className="pt-5 w-full flex justify-center">
            <Button className="text-white text-lg font-semibold rounded-full px-6 bg-color">
              Start Chat
            </Button>
          </CardAction>
        </CardContent>
      </Card>
      <Card className="md:h-142.5 w-full">
        <CardContent className="lg:px-10">
          <div className="flex items-center justify-center">
            <Image
              src={smiley}
              alt=""
              width={200}
              height={200}
              className="object-cover border rounded-full"
            />
          </div>
          <CardTitle className="text-center pt-8 font-bold text-xl">
            Helping hands
          </CardTitle>
          <div className="text-[#999AA1] max-md:text-sm">
            <p className="pt-8">M.Phil Clinical Psychology (RCI).</p>
            <p>Diploma in Guidance & Counseling</p>
            <p>M.A. Psychology</p>
            <p>B.A. (Hons) Psychology.</p>
            <br />
            <p>
              <span className="font-semibold text-[#5B5B5C]">Address :</span> Any City, XYZ MP
            </p>
          </div>
          <CardAction className="pt-5 w-full flex justify-center">
            <Button className="text-white text-lg font-semibold rounded-full px-6 bg-color">
              Start Chat
            </Button>
          </CardAction>
        </CardContent>
      </Card>
    </div>
  );
}
