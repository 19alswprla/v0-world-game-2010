import Link from "next/link"
import Image from "next/image"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Revenue Model", href: "#revenue" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <div className="flex items-center gap-6">
              <Link href="/" className="-ml-2 inline-block">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/World_games_logo_final-Photoroom-ytXoCU9fKgw8bkpHSEtvhQWfmKEPL9.png"
                  alt="World Game 2010"
                  width={200}
                  height={80}
                  className="h-20 w-auto"
                  unoptimized
                />
              </Link>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/COAM%20logo-CBCApzHGVVDO1rfQdckBkiLVHJjKOq.png"
                alt="Georgia Lottery COAM Division"
                width={100}
                height={70}
                className="h-14 w-auto"
                unoptimized
              />
            </div>
            <p className="mt-4 text-sm text-primary-foreground/70 max-w-md">
              Licensed Georgia COAM Master Company providing gaming systems and technical support since 2010.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-sm text-primary-foreground/50">
            4413 Mendi Ct., Suwanee, GA 30024
          </div>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <a href="mailto:info@worldgame2010.com" className="hover:text-primary-foreground transition-colors">
              info@worldgame2010.com
            </a>
            <a href="tel:+17707976675" className="hover:text-primary-foreground transition-colors">
              (770) 797-6675
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-xs text-primary-foreground/40">
          &copy; {new Date().getFullYear()} World Game 2010. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
