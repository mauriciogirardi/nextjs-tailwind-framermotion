import { motion } from 'framer-motion'
import Link from 'next/link'

const TailwindPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.img
        src="/img/tailwind.svg"
        alt="tailwind"
        className="w-full h-full md:max-w-2xl"
        layoutId="tailwind-logo"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link href="/">
          <a className="bg-green-500 text-gray-50 px-6 py-3 font-semibold rounded-xl hover:bg-green-400 transition">
            Voltar para a Home
          </a>
        </Link>
      </motion.div>
    </div>
  )
}

export default TailwindPage
