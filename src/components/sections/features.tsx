import { Card, CardImage, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    image: "/assets/img/feature1.png",
    title: "All-In-One Digital Solution",
    description: "Consolidated tools for content creation, social media, and e-commerce in one platform."
  },
  {
    image: "/assets/img/feature2.png",
    title: "AI-Driven Efficiency and Customization",
    description: "Powerful tools for content creation and management, tailored to your needs."
  },
  {
    image: "/assets/img/feature3.png",
    title: "Blockchain Transparency and Profit Sharing",
    description: "Decentralized, secure payment system and transparent technology-driven ecosystem."
  },
  {
    image: "/assets/img/feature4.png",
    title: "Constant Innovation",
    description: "Continuous updates to stay ahead of digital trends and make your platform future-proof."
  }
]

export function Features() {
  return (
    <section className="py-20">
      <div className="container flex flex-col items-center gap-4 justify-center">
        <p className="text-blue-500">Future-focused, user-driven</p>
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-bold">CreationNetwork.ai?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-4/5 mx-auto">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardImage src={feature.image} alt={feature.title} width={80} />
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
