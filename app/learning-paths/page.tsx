import Link from "next/link"
import { Brain, Code, Languages, BarChart, Cpu, Database, Globe, Palette } from "lucide-react"
import { GradientButton } from "@/components/gradient-button"

export default function LearningPaths() {
  const learningPaths = [
    {
      id: "ai-fundamentals",
      title: "AI Fundamentals",
      description: "Learn the basics of artificial intelligence and machine learning",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-600",
      level: "Beginner",
      duration: "8 weeks",
      topics: [
        "Machine Learning Basics",
        "Neural Networks",
        "AI Ethics",
        "Computer Vision",
        "Natural Language Processing",
      ],
    },
    {
      id: "web-development",
      title: "Web Development",
      description: "Master modern web technologies and frameworks",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-600",
      level: "Beginner to Intermediate",
      duration: "12 weeks",
      topics: ["HTML & CSS", "JavaScript", "React", "Node.js", "Databases", "Deployment"],
    },
    {
      id: "language-learning",
      title: "Language Learning",
      description: "Acquire new languages with AI-powered techniques",
      icon: <Languages className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600",
      level: "All Levels",
      duration: "Ongoing",
      topics: ["Vocabulary Building", "Grammar", "Conversation Practice", "Reading Comprehension", "Cultural Context"],
    },
    {
      id: "data-science",
      title: "Data Science",
      description: "Analyze and visualize data to extract meaningful insights",
      icon: <BarChart className="w-6 h-6" />,
      color: "from-orange-500 to-amber-600",
      level: "Intermediate",
      duration: "10 weeks",
      topics: ["Statistics", "Data Visualization", "Python for Data Science", "Machine Learning", "Big Data"],
    },
    {
      id: "cloud-computing",
      title: "Cloud Computing",
      description: "Build and deploy scalable applications in the cloud",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-pink-500 to-rose-600",
      level: "Intermediate",
      duration: "8 weeks",
      topics: ["AWS", "Azure", "Google Cloud", "Serverless", "Containers", "DevOps"],
    },
    {
      id: "database-management",
      title: "Database Management",
      description: "Design and optimize databases for various applications",
      icon: <Database className="w-6 h-6" />,
      color: "from-violet-500 to-purple-600",
      level: "Intermediate",
      duration: "6 weeks",
      topics: ["SQL", "NoSQL", "Database Design", "Performance Tuning", "Data Modeling"],
    },
    {
      id: "mobile-development",
      title: "Mobile Development",
      description: "Create native and cross-platform mobile applications",
      icon: <Globe className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-600",
      level: "Intermediate",
      duration: "10 weeks",
      topics: ["React Native", "Flutter", "iOS Development", "Android Development", "Mobile UI/UX"],
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      description: "Design beautiful and functional user interfaces",
      icon: <Palette className="w-6 h-6" />,
      color: "from-teal-500 to-green-600",
      level: "Beginner to Intermediate",
      duration: "8 weeks",
      topics: ["Design Principles", "Wireframing", "Prototyping", "User Research", "Accessibility"],
    },
  ]

  return (
    <main className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Learning Paths
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Choose from our curated learning paths designed to take you from beginner to expert in your chosen field
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {learningPaths.map((path) => (
            <div
              key={path.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 flex flex-col"
            >
              <div className={`h-2 bg-gradient-to-r ${path.color}`}></div>
              <div className="p-6 flex-grow">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${path.color} flex items-center justify-center text-white mb-4`}
                >
                  {path.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{path.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{path.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full">
                    {path.level}
                  </span>
                  <span className="text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full">
                    {path.duration}
                  </span>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Topics covered:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    {path.topics.map((topic, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mr-2"></span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0 mt-auto">
                <Link
                  href={`/learning-paths/${path.id}`}
                  className={`w-full bg-gradient-to-r ${path.color} text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center`}
                >
                  Explore Path
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Not sure which path to choose?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Take our quick assessment to get personalized recommendations based on your interests and goals
          </p>
          <GradientButton href="/assessment" primary>
            Take the Assessment
          </GradientButton>
        </div>
      </div>
    </main>
  )
}
