import { notFound } from "next/navigation"
import { jobs, getJobById } from "@/lib/jobs"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { JobDetailClient } from "@/components/job-detail-client"

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
        <JobDetailClient job={job} />
      </main>
      <Footer />
    </>
  )
}
