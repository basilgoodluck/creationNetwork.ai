import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is CreationNetwork.ai and what does it offer?",
    answer: "CreationNetwork.ai is an integrated online platform that streamlines users by providing a comprehensive suite of tools for content creation, social media management, and e-commerce. We combine AI and blockchain technology to create and streamline all creative and management processes."
  },
  {
    question: "How does the CRNT token benefit users?",
    answer: "The CRNT token provides governance rights, staking rewards, and access to premium features. Token holders can participate in platform decisions and earn rewards through various ecosystem activities."
  },
  {
    question: "Who benefits from using CreationNetwork?",
    answer: "Content creators, digital marketers, e-commerce businesses, and social media managers benefit from our integrated tools, AI-powered automation, and blockchain-based rewards system."
  },
  {
    question: "How does CreationNetwork simplify content creation and management?",
    answer: "Our AI-powered tools automate repetitive tasks, provide creative suggestions, and streamline workflow processes. The integrated platform eliminates the need for multiple separate tools."
  },
  {
    question: "What sets CreationNetwork apart from other platforms?",
    answer: "We combine AI and blockchain technology with comprehensive tools for content creation, social media, and e-commerce in one platform, offering unique features like decentralized rewards and AI-driven automation."
  }
]

export function FAQ() {
  return (
    <section className="py-20">
      <div className="container mx-auto w-[95%] md:w-5/6 lg:w-4/5">
        {/* <p className="text-blue-500 uppercase text-center">FAQ</p> */}
        <h2 className="text-3xl font-semibold text-center mb-12">
          <span className="bg-gradient-to-r from-[#3DD9C9] via-[#5B7FFF] to-[#7F5BFF] bg-clip-text text-transparent">
          Frequently Asked  Questions
          </span>
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="bg-slate-50/5 data-[state=open]:bg-gradient-to-b data-[state=open]:from-[#0f1128] data-[state=open]:to-[#2c2968] rounded-lg transition-all duration-200"
            >
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-foreground/60">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
