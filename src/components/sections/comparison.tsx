import { Check, X } from "lucide-react"

const features = [
  "All-In-One Platform",
  "AI-Powered Content Creation",
  "Video & Audio Production",
  "Social Media Automation",
  "E-commerce Integration",
  "AI-Driven Branding Tools",
  "Content AI Automation",
  "Advanced Analytics"
]

const competitors = [
  { name: "CreationNetwork.ai", features: [true, true, true, true, true, true, true, true] },
  { name: "Jasper", features: [false, true, false, false, false, false, false, true] },
  { name: "Notion.ai", features: [false, false, true, false, false, false, false, false] },
  { name: "Hootsuite", features: [false, false, false, true, false, false, false, false] },
  { name: "copy.ai", features: [false, true, false, false, false, false, true, false] }
]

export function Comparison() {
  return (
    <section className="py-20 w-4/5 mx-auto ">
      <div className="container flex flex-col items-center gap-4">
        <p className="text-center text-blue-500">Competitor Comparison</p>
        <h2 className="text-3xl font-semibold text-center mb-4">
          How We Stand Out <br /><span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Against the Competition</span>
        </h2>
        
        <div className="mt-12 w-full overflow-hidden rounded-lg border border-grey-100 py-8">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-4 rounded-tl-lg">Features</th>
                {competitors.map((competitor, index) => (
                  <th key={competitor.name} className={`p-4 text-center ${
                    competitor.name === "CreationNetwork.ai" 
                      ? "bg-[#243460]"
                      : ""
                  } ${index === competitors.length - 1 ? "rounded-tr-lg" : ""}`}>
                    {competitor.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, featureIndex) => (
                <tr key={feature} className="border-t border-border/50">
                  <td className={`p-4 ${featureIndex === features.length - 1 ? "rounded-bl-lg" : ""}`}>
                    {feature}
                  </td>
                  {competitors.map((competitor, index) => (
                    <td key={`${competitor.name}-${feature}`} 
                      className={`p-4 text-center ${
                        competitor.name === "CreationNetwork.ai" 
                          ? "bg-[#243460]"
                          : ""
                          
                      } ${
                        featureIndex === features.length - 1 && index === competitors.length - 1 
                          ? "rounded-br-lg" 
                          : ""
                      }`}
                    >
                      {competitor.features[featureIndex] ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
