export function HeroIllustration() {
  return (
    <div className="relative w-full max-w-lg">
      {/* Main circle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      {/* Content */}
      <div className="relative">
        <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-8 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="h-4 w-24 bg-white/30 rounded-full"></div>
          </div>

          <div className="space-y-4">
            <div className="h-4 w-full bg-white/30 rounded-full"></div>
            <div className="h-4 w-5/6 bg-white/30 rounded-full"></div>
            <div className="h-4 w-4/6 bg-white/30 rounded-full"></div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <div className="h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <div className="h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
            <div className="h-20 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl rotate-12 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
          AI
        </div>

        <div className="absolute -bottom-12 -left-12 w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
          ML
        </div>
      </div>
    </div>
  )
}
