"use client"

import { useState } from "react"
import { X, Upload, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface ApplyModalProps {
  isOpen: boolean
  onClose: () => void
  jobTitle: string
}

export function ApplyModal({ isOpen, onClose, jobTitle }: ApplyModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  })
  const [resume, setResume] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setResume(file)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("fullName", formData.fullName)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("jobTitle", jobTitle)
      if (resume) {
        formDataToSend.append("resume", resume)
      }

      const response = await fetch("/api/apply", {
        method: "POST",
        body: formDataToSend,
      })

      if (!response.ok) {
        throw new Error("Failed to submit application")
      }

      setSubmitted(true)
    } catch (error) {
      console.error("Error submitting application:", error)
      alert("Failed to submit application. Please try again or email us directly at info@worldgame2010.com")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setFormData({ fullName: "", email: "" })
    setResume(null)
    setSubmitted(false)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground">
            Apply for {jobTitle}
          </DialogTitle>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d4a845] text-[#0a1628] mx-auto mb-4">
              <FileText className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">Application Submitted!</h3>
            <p className="mt-2 text-muted-foreground text-sm">
              Thank you for your interest. We&apos;ll review your application and get back to you soon.
            </p>
            <Button
              onClick={handleClose}
              className="mt-6 bg-[#0a1628] hover:bg-[#0d2847] text-white"
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 py-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <Input
                id="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="John Doe"
                className="bg-secondary/50 border-border"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
                className="bg-secondary/50 border-border"
              />
            </div>

            <div>
              <label htmlFor="resume" className="block text-sm font-medium text-foreground mb-2">
                Resume <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="resume"
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="sr-only"
                />
                <label
                  htmlFor="resume"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-secondary/50 border border-border rounded-md cursor-pointer hover:bg-secondary transition-colors"
                >
                  <Upload className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {resume ? resume.name : "Upload your resume (PDF, DOC, DOCX)"}
                  </span>
                </label>
              </div>
              {resume && (
                <div className="mt-2 flex items-center gap-2 text-sm text-[#d4a845]">
                  <FileText className="h-4 w-4" />
                  <span>{resume.name}</span>
                  <button
                    type="button"
                    onClick={() => setResume(null)}
                    className="ml-auto text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>

            <div className="pt-4 flex gap-3">
              <Button
                type="submit"
                className="flex-1 bg-[#e8932c] hover:bg-[#d4820f] text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
