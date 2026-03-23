import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { MapPin, Briefcase, Calendar, ArrowLeft } from "lucide-react"
import { jobs, getJobById } from "@/lib/jobs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export async function generateStaticParams() {
  return jobs.map((job) => ({
    id: job.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const job = getJobById(id)
  
  if (!job) {
    return {
      title: "Job Not Found | World Game 2010",
    }
  }

  return {
    title: `${job.title} | Careers | World Game 2010`,
    description: job.overview,
  }
}

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const job = getJobById(id)

  if (!job) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-[#0a1628] py-16 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#0a1628]" />
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[200px] border border-[#d4a845]/10 rounded-[50%] rotate-[-15deg]" />
          </div>
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-[#d4a845] mb-4">
              Career Opportunity
            </p>
            <h1 className="text-3xl font-serif font-semibold tracking-tight text-white sm:text-4xl text-balance">
              We Can&apos;t Wait to Meet You
            </h1>
          </div>
        </section>

        {/* Job Content */}
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Job Header */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground uppercase tracking-wide">
                  {job.title}
                </h2>
                <p className="text-[#3498db] font-medium mt-1 uppercase text-sm">
                  {job.location}
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  Date Posted: {job.datePosted}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Button className="bg-[#e8932c] hover:bg-[#d4820f] text-white px-8">
                  Apply
                </Button>
                <button className="text-sm text-muted-foreground hover:text-foreground transition-colors underline">
                  Apply Later
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Job Description */}
                <div className="mb-10">
                  <h3 className="text-lg font-bold text-foreground uppercase tracking-wide mb-4 pb-2 border-b-2 border-[#d4a845]">
                    Job Description
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-foreground mb-2">Job Overview</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {job.overview}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-foreground mb-3">Responsibilities</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((item, index) => (
                          <li key={index} className="flex gap-2 text-muted-foreground">
                            <span className="text-foreground">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-foreground mb-3">Skills/Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((item, index) => (
                          <li key={index} className="flex gap-2 text-muted-foreground">
                            <span className="text-foreground">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Note Section */}
                <div className="bg-secondary/30 p-6 rounded-lg border border-border">
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

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Job Snapshot */}
                <div className="bg-secondary/30 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-bold text-foreground uppercase tracking-wide mb-6 pb-2 border-b-2 border-[#d4a845]">
                    Job Snapshot
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-[#e8932c] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">Location:</p>
                        <p className="text-foreground font-medium">{job.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Briefcase className="h-5 w-5 text-[#e8932c] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">Job Type:</p>
                        <p className="text-foreground font-medium">{job.jobType}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-[#e8932c] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide">Date Posted:</p>
                        <p className="text-foreground font-medium">{job.datePosted}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* About Us */}
                <div className="bg-secondary/30 rounded-lg p-6">
                  <div className="flex justify-center mb-4">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/World_games_logo_final-Photoroom-ytXoCU9fKgw8bkpHSEtvhQWfmKEPL9.png"
                      alt="World Game 2010"
                      width={120}
                      height={48}
                      className="h-12 w-auto"
                      unoptimized
                    />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground uppercase tracking-wide mb-4">
                    About Us
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    World Game 2010 is a licensed Georgia COAM Master Company focused on delivering exceptional gaming experiences and infrastructure solutions. Our roots are firmly planted in the Georgia gaming market, and our commitment to excellence has helped us become a leading provider of gaming systems and technical support. We offer high-performing gaming products, revenue optimization services, and best-in-class support for our location partners. Learn more at{" "}
                    <Link href="/" className="text-[#3498db] hover:underline">
                      worldgame2010.com
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-12 text-center">
              <Button className="bg-[#e8932c] hover:bg-[#d4820f] text-white px-12 py-6 text-lg">
                Apply
              </Button>
              <div className="mt-3">
                <button className="text-sm text-muted-foreground hover:text-foreground transition-colors underline">
                  Apply Later
                </button>
              </div>
              <div className="mt-6">
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 text-sm text-[#3498db] hover:underline"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Current Openings
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
