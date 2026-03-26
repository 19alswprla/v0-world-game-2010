export interface Job {
  id: string
  title: string
  location: string
  datePosted: string
  jobType: string
  overview: string
  responsibilities: string[]
  requirements: string[]
}

export const jobs: Job[] = [
  {
    id: "technical-solutions-engineer",
    title: "Technical Solutions Engineer",
    location: "Hybrid (Suwanee, GA)",
    datePosted: "03/15/2026",
    jobType: "Full-Time",
    overview: "The Technical Solutions Engineer will join our dynamic team to provide expert-level technical support and solutions for our COAM gaming systems. The ideal candidate will troubleshoot complex hardware and software issues, work directly with location partners, and ensure optimal system performance across Georgia.",
    responsibilities: [
      "Provide tier 2 and tier 3 technical support for gaming terminals and systems.",
      "Diagnose and resolve hardware, software, and network connectivity issues.",
      "Install, configure, and maintain gaming equipment at partner locations.",
      "Develop and document technical solutions and best practices.",
      "Collaborate with the development team to identify and report software bugs.",
      "Train location staff on proper equipment operation and basic troubleshooting.",
      "Maintain accurate service records and inventory management.",
      "Participate in on-call rotation for 24/7 support coverage."
    ],
    requirements: [
      "1-3 years of experience in technical support or field service engineering.",
      "Strong knowledge of computer hardware, networking, and operating systems.",
      "Experience with point-of-sale or gaming systems preferred.",
      "Excellent problem-solving and analytical skills.",
      "Strong communication skills and customer service orientation.",
      "Ability to work independently and manage multiple priorities.",
      "Background check required due to gaming industry regulations.",
      "Bachelor's degree in IT, Electronics, or related field preferred."
    ]
  },
  {
    id: "software-test-engineer",
    title: "Software Test Engineer",
    location: "Hybrid (Suwanee, GA)",
    datePosted: "03/12/2026",
    jobType: "Full-Time",
    overview: "The Software Test Engineer will be responsible for ensuring the quality and reliability of our gaming software platforms. You will design and execute test plans, identify defects, and work closely with developers to deliver exceptional gaming experiences while maintaining strict regulatory compliance.",
    responsibilities: [
      "Design, develop, and execute comprehensive test plans and test cases.",
      "Perform functional, regression, integration, and performance testing.",
      "Identify, document, and track software defects using issue tracking systems.",
      "Collaborate with developers to understand requirements and resolve issues.",
      "Develop and maintain automated test scripts and frameworks.",
      "Ensure compliance with Georgia Lottery Corporation gaming standards.",
      "Participate in code reviews and provide quality-focused feedback.",
      "Create and maintain testing documentation and reports."
    ],
    requirements: [
      "Bachelor's degree in Computer Science, Software Engineering, or related field.",
      "3+ years of experience in software testing or quality assurance.",
      "Experience with test automation tools (Selenium, Cypress, or similar).",
      "Knowledge of programming languages such as Python, JavaScript, or C#.",
      "Familiarity with Agile/Scrum development methodologies.",
      "Strong attention to detail and analytical thinking.",
      "Excellent written and verbal communication skills.",
      "Gaming industry experience is a plus.",
      "Background check required due to gaming industry regulations."
    ]
  },
  {
    id: "animator",
    title: "Animator",
    location: "Suwanee, Georgia",
    datePosted: "03/10/2026",
    jobType: "Full-Time",
    overview: "The Animator will join our creative team to bring gaming experiences to life through engaging animations and motion graphics. You will create animations for gaming terminals, promotional content, and user interfaces that captivate players while adhering to regulatory requirements.",
    responsibilities: [
      "Create 2D and 3D animations for gaming terminals and displays.",
      "Design motion graphics for promotional materials and marketing content.",
      "Develop animated UI elements and transitions for gaming software.",
      "Collaborate with game designers and artists to establish visual style.",
      "Optimize animations for performance on gaming hardware.",
      "Maintain animation libraries and asset organization.",
      "Stay current with animation trends and gaming industry standards.",
      "Participate in creative brainstorming and concept development."
    ],
    requirements: [
      "Portfolio required demonstrating animation and motion graphics skills.",
      "3+ years of professional animation experience.",
      "Proficiency in Adobe After Effects, Animate, and related tools.",
      "Experience with 3D animation software (Maya, Blender, or Cinema 4D).",
      "Understanding of animation principles and timing.",
      "Knowledge of sprite-based and frame-by-frame animation techniques.",
      "Ability to work under tight deadlines while maintaining quality.",
      "Strong collaboration and communication skills.",
      "Gaming or casino industry experience is a plus."
    ]
  },
  {
    id: "artist-ii",
    title: "Artist II",
    location: "Remote",
    datePosted: "03/10/2026",
    jobType: "Full-Time",
    overview: "The Artist II will join our team-oriented group of creatives in the Game Development Department. The ideal candidate will be required to work inside a group of artists to create the next highly-engaging and innovative slot games visuals and from start to finish.",
    responsibilities: [
      "Exercise of discretion and independent judgment with respect to matters of significance.",
      "Provide concept art for new projects, including layout, color schemes, symbol concepts, background designs etc.",
      "Create digital character paintings/illustrations, compositions/layouts, logos, UI elements.",
      "Actively participate and offer creative solutions to both art and game design challenges.",
      "Contribute to process improvements to increase productivity and the visual quality of the games.",
      "Brainstorm and conceptualize ideas (produce concept sketches and quick concept edits).",
      "Create art assets from game concept through production, testing and handoff.",
      "Exercise of discretion and independent judgment with respect to matters of significance."
    ],
    requirements: [
      "Portfolio required.",
      "Local applicants encouraged, or willing to relocate on own.",
      "3-5 years Professional Job Experience.",
      "Bachelor's degree in art/design or equivalent experience.",
      "Design and create overall look and feel for projects.",
      "Ability to meet deadlines and manage multiple projects simultaneously and be flexible to the ever-changing environment of a fast-growing company.",
      "Strong team collaboration skills.",
      "Excellent communication skills and organizational skills.",
      "Ability to take and give constructive feedback throughout a very iterative design process.",
      "Highly proficient in Photoshop.",
      "Basic animation knowledge.",
      "After Effects, Maya and Unity skills/knowledge are pluses.",
      "Casino industry experience is a huge plus."
    ]
  }
]

export function getJobById(id: string): Job | undefined {
  return jobs.find(job => job.id === id)
}
