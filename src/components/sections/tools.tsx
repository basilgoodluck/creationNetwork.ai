import { Card } from "@/components/ui/card"

export function Tools() {
  return (
    <section className="py-20">
      <div className="container flex flex-col items-center gap-6">
        <p className="text-blue-500 uppercase">Tools</p>
        <h2 className="text-3xl font-bold text-center">
          Our Powerful <br />
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            AI Tools
          </span>
        </h2>
        <p className="text-foreground/60 text-center max-w-2xl">
          Discover our suite of AI-powered tools designed to revolutionize content creation,
          e-commerce, and social media management. Experience the future of digital content.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-12">
          <Card className="p-6 bg-[#131a2e]">
            <h3 className="text-xl font-semibold mb-4">Content Creation</h3>
            <p className="text-foreground/60">
              AI-powered content generation and optimization tools for all your creative needs.
            </p>
          </Card>
          
          <Card className="p-6 bg-[#131a2e]">
            <h3 className="text-xl font-semibold mb-4">E-commerce Suite</h3>
            <p className="text-foreground/60">
              Comprehensive tools for managing and optimizing your online store.
            </p>
          </Card>
          
          <Card className="p-6 bg-[#131a2e]">
            <h3 className="text-xl font-semibold mb-4">Social Media Manager</h3>
            <p className="text-foreground/60">
              Streamline your social media presence with our intelligent management tools.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
