import { motion } from '@react-spring/web'

export function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-300 to-primary-500">
            Project Name
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            A revolutionary hardware solution for [your purpose]
          </p>
          <button className="px-8 py-3 bg-primary-500 hover:bg-primary-600 rounded-full text-white font-semibold transition duration-300">
            Learn More
          </button>
        </motion.div>
      </div>
      {/* Add animated background particles or patterns here */}
    </div>
  )
}