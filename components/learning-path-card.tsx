import Link from "next/link"
import { Brain, Code, Languages, BarChart } from "lucide-react"

interface LearningPathProps {
  path: {
    id: string
    title: string
    description: string
    icon: string
    color: string
    steps: number
  }
}

export function LearningPathCard({ path }: LearningPathProps) {
  const getIcon = () => {
    switch (path.icon) {
      case "brain":
        return <Brain className="w-6 h-6" />
      case "code":
        return <Code className="w-6 h-6" />
      case "languages":
        return <Languages className="w-6 h-6" />
      case "bar-chart":
        return <BarChart className="w-6 h-6" />
      default:
        return <Brain className="w-6 h-6" />
    }
  }

  return (
    <Link
      href={`/learning-paths/${path.id}`}
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
    >
      <div className={`h-2 bg-gradient-to-r ${path.color}`}></div>
      <div className="p-6">
        <div
          className={`w-12 h-12 rounded-lg bg-gradient-to-r ${path.color} flex items-center justify-center text-white mb-4`}
        >
          {getIcon()}
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
          {path.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{path.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">{path.steps} steps</span>
          <span className="text-purple-600 dark:text-purple-400 font-medium text-sm flex items-center">
            Explore
            <svg
              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
