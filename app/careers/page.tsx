import Link from "next/link"
import Image from "next/image"
import { jobs } from "@/lib/jobs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Careers | World Game 2010",
  description: "Join our team at World Game 2010. Explore open positions in gaming technology, engineering, and creative roles.",
}

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-[#0a1628] py-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#0a1628]" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] border border-[#d4a845]/10 rounded-[50%] rotate-[-15deg]" />
            <div className="absolute top-20 right-[15%] w-3 h-3 bg-[#e8932c] rounded-full opacity-60 animate-pulse" />
            <div className="absolute bottom-20 left-[10%] w-4 h-4 bg-[#3498db] rounded-full opacity-30 animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-[#d4a845] mb-4">
              Join Our Team
            </p>
            <h1 className="text-4xl font-serif font-semibold tracking-tight text-white sm:text-5xl text-balance">
              We Can&apos;t Wait to Meet You
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/70 max-w-2xl mx-auto">
              Join our growing team and help shape the future of Georgia&apos;s COAM industry. We offer competitive benefits, a collaborative culture, and opportunities for growth.
            </p>
          </div>
        </section>

        {/* Team Photos Section */}
        <section className="relative bg-gradient-to-b from-[#1a365d] to-[#2a4a7a] py-16 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            {/* Abstract shapes */}
            <div className="absolute top-0 left-[10%] w-32 h-32 bg-[#3498db]/20 rounded-tr-[80px] rounded-bl-[80px]" />
            <div className="absolute top-1/3 left-[30%] w-24 h-24 bg-[#2a4a7a] rotate-45" />
            <div className="absolute top-1/4 right-[20%] w-40 h-40 bg-[#3498db]/15 rounded-full" />
            <div className="absolute bottom-0 right-[10%] w-28 h-28 bg-[#1a365d] rotate-12" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex justify-center items-center gap-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/World_games_logo_final-Photoroom-ytXoCU9fKgw8bkpHSEtvhQWfmKEPL9.png"
                alt="World Game 2010"
                width={200}
                height={80}
                className="h-24 w-auto"
                unoptimized
              />
            </div>
            <p className="text-center text-white/80 mt-6 text-lg">
              Building the future of gaming technology in Georgia
            </p>
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm mb-8">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                World Game 2010
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-[#3498db] font-medium">All Jobs</span>
            </div>

            {/* Job Table */}
            <div className="overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-3 gap-4 py-4 border-b-2 border-[#d4a845]">
                <div className="text-sm font-bold uppercase tracking-wide text-foreground">
                  Job Title
                </div>
                <div className="text-sm font-bold uppercase tracking-wide text-foreground">
                  Location
                </div>
                <div className="text-sm font-bold uppercase tracking-wide text-foreground">
                  Date Posted
                </div>
              </div>

              {/* Job Rows */}
              {jobs.map((job) => (
                <Link
                  key={job.id}
                  href={`/careers/${job.id}`}
                  className="grid grid-cols-3 gap-4 py-4 border-b border-border hover:bg-secondary/50 transition-colors group"
                >
                  <div className="text-[#3498db] font-medium group-hover:underline">
                    {job.title}
                  </div>
                  <div className="text-muted-foreground">
                    {job.location}
                  </div>
                  <div className="text-muted-foreground">
                    {job.datePosted}
                  </div>
                </Link>
              ))}
            </div>

            {/* Note Section */}
            <div className="mt-12 p-6 bg-secondary/30 rounded-lg border border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Note:</strong> All offers are contingent upon successful completion of a background check.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                <strong className="text-foreground">*Posted positions are not open to third party recruiters and unsolicited resume submissions will be considered free referrals.</strong>
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                World Game 2010 is an equal opportunity employer.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
