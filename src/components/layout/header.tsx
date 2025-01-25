"use client"
import Image from "next/image"
import Button from "@/components/ui/button"
import { useEffect, useState } from "react"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Solutions", href: "#solutions" },
  { name: "Features", href: "#features" },
  { name: "Market Insights", href: "#market-insights" },
  { name: "Tokenomics", href: "#tokenomics" }
]

export function Header() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigation.map(item => item.href.replace("#", "")).filter(Boolean)
      
      // Check if we're at the top of the page for home section
      if (window.scrollY < 100) {
        setActiveSection("home")
        return
      }

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    if (targetId) {
      const element = document.getElementById(targetId)
      element?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm w-4/5 mx-auto">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Image
              src="/assets/img/logo.png"
              alt="CreationNetwork.ai"
              width={40}
              height={40}
              className="object-contain"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`
                  text-sm text-gray-300 hover:text-white transition-colors relative
                  ${item.href.replace("#", "") === activeSection ? "text-white" : ""}
                  after:content-[''] after:absolute after:bottom-[-4px] after:left-0 
                  after:w-full after:h-[2px] after:bg-gradient-to-r after:from-blue-500 
                  after:to-purple-500 after:scale-x-0 after:transition-transform after:duration-300
                  ${item.href.replace("#", "") === activeSection ? "after:scale-x-100" : ""}
                `}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">Contact us</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
