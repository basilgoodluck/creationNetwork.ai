import Image from "next/image";

const tokenAllocation = [
  { percentage: "24.39%", label: "ICO Pre-sale", amount: "90,000,000 CRNT", color: "#FE686B" },
  { percentage: "8.61%", label: "IDO Pre-sale", amount: "31,770,000 CRNT", color: "#FE68AE" },
  { percentage: "20%", label: "Liquidity", amount: "73,800,000 CRNT", color: "#D368FE" },
  { percentage: "10%", label: "Marketing", amount: "36,900,000 CRNT", color: "#A168FE" },
  { percentage: "10%", label: "Staking Rewards", amount: "36,900,000 CRNT", color: "#688BFE" },
  { percentage: "12%", label: "Team/Advisors", amount: "44,280,000 CRNT", color: "#3AF3C2" },
  { percentage: "13%", label: "Reserve", amount: "47,970,000 CRNT", color: "#68FE72" },
  { percentage: "2%", label: "Airdrop", amount: "7,380,000 CRNT", color: "#F9FE68" },
];

export function Tokenomics() {
  return (
    <section className="py-20">
      <div className="w-[95%] md:w-5/6 lg:w-4/5 mx-auto">
        <h2 className="text-3xl font-bold text-center -mb-36 md:mb-12">
           <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">CRNT Tokenomics</span>
        </h2>

        <div className="flex items-center flex-col md:flex-row gap-6">
          <div className="relative w-full h-[550px] -mb-36 md:mb-12">
            <Image
              src="/assets/img/tokenomics.png"
              alt="Tokenomics Distribution"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="flex flex-col justify-center items-center gap-4 w-full md:w-3/5 p-2 md:p-0 text-xs md:text-base">
            {tokenAllocation.map((item, index) => (
              <div
                key={index}
                className="rounded-lg flex items-center gap-4"
              >
                <div
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                  <p>{item.percentage}</p>
                  <p className="font-medium">{item.label}</p>
                  <p className="text-foreground/60">{item.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
