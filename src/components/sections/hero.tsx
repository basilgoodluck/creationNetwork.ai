import Button from "@/components/ui/button"
import Image from "next/image"
import heroImage from "@/assets/img/heroImg.png"

export function Hero() {
  return (
    <section className="w-[95%] md:w-5/6 lg:w-4/5 mx-auto py-4">
      <div className="w-[fit-content] mx-auto flex justify-center md:justify-between items-center gap-8 pt-24">
        <div>
          <h4 className="font-semibold text-lg md:text-xl text-center">Launch App</h4>
          <Image src="/assets/img/elipse1.png" alt="" width={100} height={100} />
        </div>
        <div>
          <h4 className="font-semibold text-lg md:text-xl text-center">ICO / Dapp</h4>
          <Image src="/assets/img/elipse2.png" alt="" width={100} height={100} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 pt-6 pb-20">
        {/* Left content */}
        <div className="space-y-4 text-center lg:text-left">
          <p className="text-blue-500 text-xs md:text-sm ">Secure, smart, and transformative</p>
          <h1 className="text-3xl sm:text-3xl md:text-4xl font-normal tracking-tight ">
            Revolutionizing Digital <br />
            Transformation with{" "} <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold">
              AI & Blockchain
            </span>
          </h1>
          <p className="text-sm md:text-lg text-muted-foreground max-w-[600px]">
            Your all-in-one platform for content creation, e-commerce, and social media management.
          </p>
          <div className="flex gap-4 flex-col md:flex-row md:justify-center md:items-center lg:justify-start">
            <Button size="lg">Join the ICO</Button>
            <Button size="lg" variant="outline" className="border-none">Launch App</Button>
          </div>
        </div>

        {/* Right image */}
        <div className="relative">
          {/* <div className="absolute -z-10">
            <div className="relative w-[500px] h-[500px] blur-3xl opacity-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
          </div> */}
          <Image
            src={heroImage}
            alt="Hero illustration"
            width={700}
            height={700}
            className="relative z-10"
            priority
          />
        </div>
      </div>
    </section>
  )
}
