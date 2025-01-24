import Image from "next/image";

const tokenAllocation = [
  { label: "Public Sale", percentage: "40%", color: "#3DD9C9" },
  { label: "Team & Advisors", percentage: "20%", color: "#5B7FFF" },
  { label: "Marketing", percentage: "15%", color: "#7F5BFF" },
  { label: "Development", percentage: "10%", color: "#FF5B5B" },
  { label: "Liquidity", percentage: "10%", color: "#FFB800" },
  { label: "Reserve", percentage: "5%", color: "#00FF94" }
]

export function Tokenomics() {
  return (
    <section className="py-20">
      <div className="container mx-auto w-4/5">
        <p className="text-blue-500 uppercase text-center">TOKENOMICS</p>
        <h2 className="text-3xl font-bold text-center mb-12">
          Token <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Distribution</span>
        </h2>

        {/* Token Image */}
        <div className="relative w-full h-[400px] mb-12">
          <Image
            src="/assets/img/tokenomics.png"
            alt="Tokenomics Distribution"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Token Allocation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tokenAllocation.map((item, index) => (
            <div
              key={index}
              className="bg-[#131a2e] p-6 rounded-lg flex items-center gap-4"
            >
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <div>
                <p className="font-medium">{item.label}</p>
                <p className="text-foreground/60">{item.percentage}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
