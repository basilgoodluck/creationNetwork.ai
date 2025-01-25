import Image from "next/image"
import Link from "next/link"
import { FaTwitter, FaTelegram, FaFacebook } from "react-icons/fa"
import { HiArrowRight } from "react-icons/hi"

const navigation = {
  menu: [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "Solutions", href: "#solutions" },
    { name: "Market Insights", href: "#market-insights" },
    { name: "Tokenomics", href: "#tokenomics" }
  ],
  legal: [
    { name: "Terms and Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Disclaimer", href: "#" }
  ],
  social: [
    { name: "Twitter", href: "#", icon: FaTwitter },
    { name: "Facebook", href: "#", icon: FaFacebook },
    { name: "Telegram", href: "#", icon: FaTelegram }
  ]
}

export function Footer() {
  return (
    <footer className="relative bg-[#01071d]">
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/img/bgfooter.png"
          alt="Footer Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/img/bgFooter2.png"
          alt="Footer Background Overlay"
          fill
          className="object-cover mix-blend-overlay"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto w-[95%] md:w-5/6 lg:w-4/5 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Image
                src="/assets/img/logo.png"
                alt="CreationNetwork.ai"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-xl font-bold">Creation Network</span>
            </div>
            <p className="text-sm text-gray-400">
              Empowering content creators and digital marketers with AI-powered tools for seamless content creation, distribution, and monetization.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.menu.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-white mb-6">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">
              Get the latest updates about Creation Network and exclusive offers.
            </p>
            <div className="flex max-w-md mx-auto md:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 rounded-l-lg px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="bg-gradient-to-r from-[#3DD9C9] to-[#5B7FFF] rounded-r-lg px-4 py-2 text-white hover:opacity-90 transition-opacity">
                <HiArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="flex gap-4 py-3 justify-center md:justify-start">
              {navigation.social.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={item.name}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 py-4 text-sm gap-4 mt-8">
          <span className="text-center md:text-left"> 2024. Creation Network. All rights reserved.</span>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 items-center">
            <a href="/terms" className="hover:underline px-2">Terms and Conditions</a>
            <a href="/privacy" className="hover:underline md:border-l border-purple-500 px-4">Privacy Policy</a>
            <a href="/disclaimers" className="hover:underline md:border-l border-purple-500 px-4">Disclaimers</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
