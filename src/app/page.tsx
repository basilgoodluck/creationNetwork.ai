import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Tools } from "@/components/sections/tools"
import { MarketInsights } from "@/components/sections/market-insights"
import { Benefits } from "@/components/sections/benefits"
import { Comparison } from "@/components/sections/comparison"
import { Tokenomics } from "@/components/sections/tokenomics"
import { FAQ } from "@/components/sections/faq"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { OurFeatures } from "@/components/sections/ourFeatures";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#01071d]">
      <div className="relative">
        {/* Background image with gradient overlay */}
        <div className="absolute inset-0" style={{ height: '100vh' }}>
          <div className="absolute inset-0 bg-[url('/assets/img/bgnet.png')] bg-cover bg-center bg-no-repeat" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#01071d]/80 via-[#01071d]/50 to-[#01071d]" />
        </div>
        {/* Content */}
        <div className="relative">
          <Header />
          <main>
            <div id="home">
              <Hero />
            </div>
            <div id="features">
              <Features />
            </div>
            <div id="solutions">
              <Tools />
            </div>
            <div id="our-features">
              <OurFeatures />
            </div>
            <div id="market-insights">
              <MarketInsights />
            </div>
            <Benefits />
            <Comparison />
            <div id="tokenomics">
              <Tokenomics />
            </div>
            <FAQ />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}
