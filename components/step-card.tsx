interface StepProps {
  step: {
    number: number
    title: string
    description: string
    color: string
  }
}

export function StepCard({ step }: StepProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
      <div
        className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center text-white text-xl font-bold mb-4`}
      >
        {step.number}
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
    </div>
  )
}
