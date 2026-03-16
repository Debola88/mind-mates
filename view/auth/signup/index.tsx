import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import woman from "@/assets/image/Login-rafiki (1) 1.svg";
import Link from "next/link";


export default function SignupPageView() {
  return (
    <div className="flex max-md:flex-col h-screen">
      <div className="flex-1 w-full h-full max-md:hidden bg-[#F4FEFF]">
        <Image
          src={woman}
          alt=""
          width={700}
          height={400}
          className="object-cover w-full h-screen"
        />
      </div>
      <div className="mx-auto max-md:p-5 flex items-center justify-center h-full w-full flex-1">
        <div className="md:w-3/4 w-full">
          <h1 className="text-[#444B59] md:text-5xl text-3xl font-bold pb-5">
            Welcome!

          </h1>
          <div className="text-[#444B59] text-sm pb-3">
            Don&apos;t have an account. Sign up
          </div>
          {/* {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4 md:w-3/4">
            {error}
          </div>
        )} */}
          <div className="p-0 mt-2">
            <form className="w-full space-y-6">
              <div className="space-y-2 text-[#202224]/80">
                <Label>Full Name</Label>
                <Input
                  className="bg-white rounded-full h-12 border-[#4ED6DA]"
                  //   onChange={(e) => setEmail(e.target.value)}
                  placeholder="Badejo Adebola"
                  type="text"
                  //   value={email}
                  required
                  //   disabled={loading}
                />
              </div>
              <div className="space-y-2 text-[#202224]/80">
                <Label>Email</Label>
                <Input
                  className="bg-white rounded-full h-12 border-[#4ED6DA]"
                  //   onChange={(e) => setEmail(e.target.value)}
                  placeholder="debola123@gmail.com"
                  type="email"
                  //   value={email}
                  required
                  //   disabled={loading}
                />
              </div>
              <div className="space-y-2 text-[#202224]/80">
                <Label>Password</Label>
                <Input
                  type="password"
                  className="bg-white rounded-full h-12 border-[#4ED6DA]"
                  //   onChange={(e) => setPassword(e.target.value)}
                  placeholder="*******"
                  //   value={password}
                  required
                  //   disabled={loading}
                />
              </div>
              <div className="mt-10 text-center">
                <Button
                  type="submit"
                  //   disabled={loading}
                  className="bg-color text-white w-2/3 text-lg font-semibold py-6 rounded-full hover:bg-[#C8EE44]/70"
                >
                  {/* {loading ? "Loading..." : "Sign in"} */}
                  Sign Up
                </Button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
 