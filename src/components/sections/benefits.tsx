import { BenefitCard } from "@/components/ui/benefit-card";
import Image from "next/image";

const benefits = [
  {
    title: "Content Creators & Influencers",
    who: "Freelancers, YouTubers, influencers.",
    needs: "Streamlined content creation, managing multiple platforms, monetization.",
    solution: "Tools like AI Copywriter and AI Video Maker simplify content production and distribution.",
    color: "green" as const
  },
  {
    title: "Digital Marketing Agencies",
    who: "Marketing teams, agencies, brand managers.",
    needs: "Efficient campaign management, content scaling, performance tracking.",
    solution: "Integrated marketing tools and analytics for optimized campaign performance.",
    color: "blue" as const
  },
  {
    title: "Small and Medium Enterprises (SMEs)",
    who: "Local businesses, e-commerce stores.",
    needs: "Efficient digital marketing, social media management, e-commerce tools.",
    solution: "Integrated e-commerce and social media automation tools for easy management and growth.",
    color: "blue" as const
  },
  {
    title: "E-commerce Businesses",
    who: "Online retailers, marketplace sellers, D2C brands.",
    needs: "Product listings, marketing materials, customer engagement.",
    solution: "Automated content generation for product descriptions and marketing assets.",
    color: "purple" as const
  },
  {
    title: "Media Companies",
    who: "Publishers, news outlets, entertainment companies.",
    needs: "Rapid content production, multi-format distribution, engagement metrics.",
    solution: "AI-powered content creation and distribution across multiple channels.",
    color: "pink" as const
  }
];

export function Benefits() {
  return (
    <section className="py-20">
      <div className="container flex flex-col items-center gap-6">
        <p className="text-blue-500 uppercase text-center">Customer Profiles</p>
        <h2 className="text-3xl font-bold text-center">
        Who Benefits from <br />
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">CreationNetwork.ai?</span>
        </h2>
        <p className="text-foreground/60 text-center max-w-2xl">
          Tailored solutions for different user segments, addressing specific needs and challenges in content creation and digital marketing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-4/5 mx-auto mt-8 relative">
          <BenefitCard {...benefits[0]} borderStyle="border-green-500" />
          <div className="relative w-full h-full flex items-center justify-center">
            <Image 
              src="/assets/img/elipse4.png" 
              alt="elipse4" 
              width={300}
              height={300}
              className="object-contain translate-y-12"
            />
          </div>
          <BenefitCard {...benefits[1]} borderStyle="border-red-500" />
          <BenefitCard {...benefits[2]} borderStyle="border-purple-500" />
          <BenefitCard {...benefits[3]} borderStyle="border-blue-500" className="translate-y-12" />
          <BenefitCard {...benefits[4]} borderStyle="border-blue-100" />
        </div>
      </div>
    </section>
  );
}
