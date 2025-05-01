import { Route, Puzzle, Activity, Users } from "lucide-react"

interface FeatureProps {
  feature: {
    title: string
    description: string
    icon: string
    color: string
  }
}

export function FeatureCard({ feature }: FeatureProps) {
  const getIcon = () => {
    switch (feature.icon) {
      case "route":
        return <Route className="w-6 h-6" />
      case "puzzle":
        return <Puzzle className="w-6 h-6" />
      case "activity":
        return <Activity className="w-6 h-6" />
      case "users":
        return <Users className="w-6 h-6" />
      default:
        return <Route className="w-6 h-6" />
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
      <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center text-white mb-4`}>
        {getIcon()}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
    </div>
  )
}
