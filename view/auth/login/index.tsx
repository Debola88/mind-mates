import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import peace from "@/assets/image/Positive thinking-rafiki (1) 1.svg";

export default function LoginPageView() {
  return (
    <div className="flex max-md:flex-col h-screen">
      <div className="flex-1 relative w-full h-full max-md:hidden">
        <Image
          src={peace}
          alt=""
          width={700}
          height={400}
          className="object-cover w-full h-screen"
        />
      </div>
      <div className="md:m-20 max-md:p-5 grid place-items-center flex-1">
        <div className="md:w-3/4 h-full">
          <h1 className="text-[#444B59] md:text-5xl text-3xl font-bold pb-5">
            Welcome back!
            
          </h1>
          <div className="text-[#444B59] text-sm pb-3">
            Already have an Account. Log in
          </div>
          {/* {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4 md:w-3/4">
            {error}
          </div>
        )} */}
          <div className="p-0 mt-2">
            <form className="w-full space-y-6">
              <div className="space-y-2 text-[#202224]/80">
                <Label>Usernme</Label>
                <Input
                  className="bg-white"
                  //   onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  type="email"
                  placeholder= "debola123@gmail.com"
                  //   value={email}
                  required
                  //   disabled={loading}
                />
              </div>
              <div className="space-y-2 text-[#202224]/80">
                <Label>Password</Label>
                <Input
                  type="password"
                  className="bg-white"
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
                  className="bg-color text-white w-2/3 rounded-full hover:bg-[#C8EE44]/70"
                >
                  {/* {loading ? "Loading..." : "Sign in"} */}
                  Log in
                </Button>
                <div className="flex justify-center mt-2 md:text-sm text-xs font-medium items-start">
                  <p>Don&apos;t have an account?</p>
                  <div className="-mt-2">
                    <Button
                      variant="link"
                      type="button"
                      className="text-[#5A8CFF] cursor-pointer"
                      //   onClick={() => router.push(APP_LINKS.SIGNUP_HOME)}
                    >
                      Sign up for free
                    </Button>
                    {/* <Image
                      src={curve}
                      alt=""
                      width={100}
                      height={100}
                      className="mx-auto"
                    /> */}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
