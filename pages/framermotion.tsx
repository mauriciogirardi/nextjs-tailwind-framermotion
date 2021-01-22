import { motion } from 'framer-motion'
import Link from 'next/link'

const FramermotionPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.img
        src="/img/framermotion.svg"
        alt="framermotion"
        className="w-full h-full md:max-w-2xl"
        layoutId="framermotion-logo"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link href="/">
          <a className="bg-pink-300 text-pink-50 px-6 py-3 font-semibold rounded-xl hover:bg-pink-200 transition">
            Voltar para a Home
          </a>
        </Link>
      </motion.div>
    </div>
  )
}

export default FramermotionPage
