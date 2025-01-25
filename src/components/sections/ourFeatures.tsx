import { Card } from "@/components/ui/card"
import Image from "next/image"

const features = [
    {
    "title": "AI Tools",
    "image": "/assets/img/ai-tools-icon.png",
    "content": "Highlight tools like AI Copywriter and AI Video Maker."
    },
    {
    "title": "Blockchain Features",
    "image": "/assets/img/blockchain-icon.png",
    "content": "Showcase transparency and profit sharing."
    },
    {
    "title": "Integrations",
    "image": "/assets/img/integrations-icon.png",
    "content": "Display platform connectivity."
    }
]

export function OurFeatures() {
  return (
    <section className="pb-20">
      <div className="w-[95%] md:w-5/6 lg:w-4/5 mx-auto flex flex-col items-center gap-6">
        <p className="text-blue-500 uppercase text-center text-sm md:text-lg">OUR Features</p>
        <h2 className="text-2xl md:text-3xl font-bold text-center ">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold">AI-powered tools</span>{" "}for efficiency
        </h2>
        <p className="text-foreground/60 text-center">Blockchain transparency and profit sharing. Seamless <br className="hidden md:block" /> integrations with 29+ platforms.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[95%] md:w-5/6 lg:w-4/5 mx-auto">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6">
              <div className="flex items-start gap-6">
                <div className="bg-[#1c2248] p-4 rounded-lg flex-shrink-0">
                  <Image 
                    src={feature.image} 
                    alt={feature.title} 
                    width={40} 
                    height={40}
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col gap-2 text-left">
                  <h3 className="text-lg font-semibold text-left">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm text-left">{feature.content}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
