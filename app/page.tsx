import { LearningPathCard } from "@/components/learning-path-card"
import { FeatureCard } from "@/components/feature-card"
import { StepCard } from "@/components/step-card"
import { GradientButton } from "@/components/gradient-button"
import { HeroIllustration } from "@/components/hero-illustration"

export default function Home() {
  const learningPaths = [
    {
      id: "ai-fundamentals",
      title: "AI Fundamentals",
      description: "Learn the basics of artificial intelligence and machine learning",
      icon: "brain",
      color: "from-purple-500 to-indigo-600",
      steps: 5,
    },
    {
      id: "web-development",
      title: "Web Development",
      description: "Master modern web technologies and frameworks",
      icon: "code",
      color: "from-blue-500 to-cyan-600",
      steps: 7,
    },
    {
      id: "language-learning",
      title: "Language Learning",
      description: "Acquire new languages with AI-powered techniques",
      icon: "languages",
      color: "from-green-500 to-emerald-600",
      steps: 6,
    },
    {
      id: "data-science",
      title: "Data Science",
      description: "Analyze and visualize data to extract meaningful insights",
      icon: "bar-chart",
      color: "from-orange-500 to-amber-600",
      steps: 8,
    },
  ]

  const features = [
    {
      title: "Personalized Learning Paths",
      description: "AI-generated learning journeys tailored to your goals and experience level",
      icon: "route",
      color: "bg-gradient-to-br from-pink-500 to-rose-600",
    },
    {
      title: "Interactive Exercises",
      description: "Hands-on practice with real-time feedback to reinforce your learning",
      icon: "puzzle",
      color: "bg-gradient-to-br from-blue-500 to-violet-600",
    },
    {
      title: "Progress Tracking",
      description: "Visualize your learning journey with detailed analytics and milestones",
      icon: "activity",
      color: "bg-gradient-to-br from-green-500 to-teal-600",
    },
    {
      title: "Community Support",
      description: "Connect with fellow learners and mentors for guidance and collaboration",
      icon: "users",
      color: "bg-gradient-to-br from-amber-500 to-orange-600",
    },
  ]

  const gettingStartedSteps = [
    {
      number: 1,
      title: "Create an Account",
      description: "Sign up for free and set up your learning profile",
      color: "bg-gradient-to-r from-pink-500 to-purple-600",
    },
    {
      number: 2,
      title: "Choose Your Path",
      description: "Select a learning path that matches your interests and goals",
      color: "bg-gradient-to-r from-purple-500 to-blue-600",
    },
    {
      number: 3,
      title: "Take the Assessment",
      description: "Complete a quick assessment to personalize your learning experience",
      color: "bg-gradient-to-r from-blue-500 to-cyan-600",
    },
    {
      number: 4,
      title: "Start Learning",
      description: "Begin your journey with interactive lessons and exercises",
      color: "bg-gradient-to-r from-cyan-500 to-teal-600",
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/80 to-pink-900/80"></div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
                  Master AI & Languages
                </span>
                <br />
                with Guided Learning
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Your personalized journey to tech and language mastery with step-by-step guidance
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <GradientButton href="/get-started" primary>
                  Start Your Journey
                </GradientButton>
                <GradientButton href="/learning-paths">Explore Paths</GradientButton>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <HeroIllustration />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-950 to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Supercharge Your Learning
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Our AI-powered platform adapts to your learning style and pace, making education more effective and
              enjoyable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                Choose Your Learning Path
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our curated learning paths designed to take you from beginner to expert
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {learningPaths.map((path) => (
              <LearningPathCard key={path.id} path={path} />
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
                Getting Started is Easy
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Follow these simple steps to begin your learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gettingStartedSteps.map((step) => (
              <StepCard key={step.number} step={step} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <GradientButton href="/signup" primary>
              Create Your Free Account
            </GradientButton>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
                Success Stories
              </span>
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Hear from learners who have transformed their skills with our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial cards would go here */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                  S
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-300">Web Developer</p>
                </div>
              </div>
              <p className="text-gray-200">
                "The step-by-step approach made learning React so much easier. I went from complete beginner to building
                my own projects in just 2 months!"
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center text-white font-bold text-xl">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-sm text-gray-300">Data Scientist</p>
                </div>
              </div>
              <p className="text-gray-200">
                "The AI learning paths adapted perfectly to my skill level. I was able to master Python and data
                analysis techniques much faster than with traditional courses."
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-xl">
                  L
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Lucia Garcia</h4>
                  <p className="text-sm text-gray-300">Language Learner</p>
                </div>
              </div>
              <p className="text-gray-200">
                "I tried learning Japanese for years with little success. The personalized approach and interactive
                exercises finally helped me become conversational!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-10 md:p-16 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Learning?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of learners who are mastering new skills with our AI-powered platform
            </p>
            <GradientButton href="/signup" light>
              Get Started for Free
            </GradientButton>
          </div>
        </div>
      </section>
    </main>
  )
}
