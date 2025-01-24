import Button from "@/components/ui/button"
import Image from "next/image"
import heroImage from "@/assets/img/heroImg.png"

export function Hero() {
  return (
    <section className="relative min-h-screen container px-4 w-4/5 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-full pt-32 pb-20">
        {/* Left content */}
        <div className="space-y-4">
          <p className="text-blue-500">Secure, smart, and transformative</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight ">
            Revolutionizing Digital <br />
            Transformation with{" "} <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold">
              AI & Blockchain
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-[600px]">
            Your all-in-one platform for content creation, e-commerce, and social media management.
          </p>
          <div className="flex gap-4">
            <Button size="lg">Join the ICO</Button>
            <Button size="lg" variant="outline" className="border-none">Launch App</Button>
          </div>
        </div>

        {/* Right image */}
        <div className="relative flex justify-center items-center">
          <div className="absolute -z-10">
            <div className="relative w-[500px] h-[500px] blur-3xl opacity-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
          </div>
          <Image
            src={heroImage}
            alt="Hero illustration"
            width={600}
            height={600}
            className="relative z-10"
            priority
          />
        </div>
      </div>
    </section>
  )
}
