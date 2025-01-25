// import { Card } from "@/components/ui/card"
import Button from "../ui/button"
import Image from "next/image";

export function Tools() {
  return (
    <section className="pt-20">
      <div className="w-[95%] md:w-5/6 lg:w-4/5 mx-auto flex flex-col items-center gap-4">
        <p className="text-blue-500 uppercase text-center text-sm md:text-lg">Power in every tool</p>
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Tools and Integrations
          </span>
        </h2>
        <div className="text-foreground/60 text-center w-[fit-content] bg-slate-50/5 p-2 rounded-lg">
          <Button>
            @ Tools
          </Button>        
          <Button variant="outline" className="border-none">
            @ Integrations
          </Button>        
        </div>
        <Image src="/assets/img/elipse3.png" alt="Tools" width={160} height={160} />

        <div className="relative w-[95%] md:w-5/6 lg:w-4/5 mx-auto aspect-[4/3] md:-mt-24">
          <Image 
            src="/assets/img/toolsImg.png" 
            alt="Tool 1" 
            fill 
            className="object-contain" 
          />
        </div>
      </div>
      <div className="w-[95%] md:w-5/6 lg:w-4/5 mx-auto flex flex-col items-center gap-6">
        <p className="text-blue-500 uppercase text-center text-sm md:text-lg">Smart tech, real solutions</p>
        <h2 className="text-2xl md:text-3xl font-bold text-center ">
        Solving Modern Challenges with <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            AI & Blockchain
          </span>
        </h2>
        <p className="text-foreground/60 text-center">
        AI and Blockchain redefine efficiency and trust. Unlock smarter, <br className="hidden md:block" /> scalable solutions for your digital transformation.
        </p>

        <div className="relative w-[95%] md:w-5/6 lg:w-4/5 mx-auto aspect-[4/3] md:-mt-24">
          <Image 
            src="/assets/img/toolsImg2.png" 
            alt="Tool 1" 
            fill 
            className="object-contain" 
          />
        </div>
      </div>
    </section>
  )
}
