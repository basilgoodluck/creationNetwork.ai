import Button from "@/components/ui/button";
import Image from "next/image";

const marketButtons = [
  "Market Size Over Time",
  "Market Insights by Component",
  "E-Commerce Growth Statistics",
  "Global Social Media Market Shares",
  "Market Share by Digital Content Type",
  "Global E-Commerce Growth",
  "Regional Insights",
  "Digital Content Creation Market"
]

export function MarketInsights() {
  return (
    <section className="py-20">
      <div className="container flex flex-col items-center gap-6">
        <p className="text-blue-500 uppercase">MARKET INSIGHTS</p>
        <h2 className="text-3xl font-bold text-center">
          Explore the{" "}
          <span className="bg-gradient-to-r from-[#3DD9C9] via-[#5B7FFF] to-[#7F5BFF] bg-clip-text text-transparent">
            Addressable Market
          </span>
        </h2>
        <p className="text-foreground/60 text-center max-w-2xl">
          Discover key growth trends in digital content and e-commerce. Explore market size,
          regional insights, and component-level shares through clear visuals. Unlock
          opportunities in the evolving digital landscape.
        </p>

        <div className="flex flex-wrap justify-center gap-4 w-4/5 mx-auto mt-8">
          {marketButtons.map((text) => (
            <Button
              key={text}
              variant="outline"
              className="bg-[#1c2248]/50 border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 text-xs"
            >
              {text}
            </Button>
          ))}
        </div>

        <div className="w-4/5 mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Market Size over Time</h3>
            <p className="text-foreground/60">
              Distribution of Content Creation, E-commerce, and Social
              Media Marketing and Management Tools Market
            </p>
          </div>

          <div className=" rounded-lg  ">
            <h3 className="text-xl text-center font-semibold mb-6">Digital Content Creation Growth Statistics</h3>
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/assets/img/market-insight.png"
                alt="Digital Content Creation Market Growth Chart"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
