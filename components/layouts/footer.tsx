import logo from "@/assets/image/Group 169.svg"
import { LocateIcon, MailIcon, PhoneIcon, SeparatorHorizontal } from "lucide-react";
import Image from "next/image";
import { Separator } from "../ui/separator";

export default function Footer() {
  return (
    <div className="bg-[#F4FEFF]">
        <div className="max-w-7xl 2xl:max-w-360 mx-auto px-4 sm:px-6 lg:px-8  py-10 lg:py-24">
          <div className="w-full gap-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          <div className="w-auto text-[#999AA1] text-sm">
            <div>
              <Image src={logo} alt="" width={200} height={240} />
            </div>
            <p className="mt-6">You’ve reached the end, but it’s not the end!</p><br/>
            <p>Remember, you’re not alone. Reach out, seek support, and prioritize your mental well-being.</p>
          </div>
          <div className="text-sm space-y-4 text-[#172048]">
            <h2 className="text-2xl font-semibold">Services</h2>
            <p>Psychotherapy</p>
            <p>Mental Councelling</p>
            <p>Support Groups</p>
            <p>Case Management</p>
          </div>
          <div className="text-sm space-y-4 text-[#172048]">
            <h2 className="text-2xl font-semibold">Contacts</h2>
            <div className="space-x-4 flex"><PhoneIcon size={20}/><p>+14 5464 8272</p></div>
           <div className="space-x-4 flex"><MailIcon/><p>rona@domain.com</p></div>
           <div className="space-x-4 flex"><LocateIcon/><p>Lazy Towe 192, Burn Swiss</p></div>
          </div>
          <div className="text-sm space-y-4 text-[#172048]">
            <h2 className="text-2xl font-semibold">Links</h2>
            <p>Privacy Policy</p>
            <p>Tern Os Use</p>
          </div>
        </div>
        <div className="my-10 border-b border-[#02607E]/57"></div>
        <p className="text-center text-[#172048]">copyright 2026 @mindmates all right reserved</p>
        </div>
      </div>
  );
}
