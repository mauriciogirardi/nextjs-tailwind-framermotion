import { motion } from 'framer-motion'
import Link from 'next/link'

interface CardProps {
  img: string
  alt: string
  href: string
  layoutId: string
}

const Card: React.FC<CardProps> = ({ img, alt, href, layoutId }) => {
  return (
    <Link href={href}>
      <div className="relative h-20 md:h-40 bg-gray-100 rounded-xl cursor-pointer hover:bg-gray-200 transition">
        <motion.img
          src={img}
          alt={alt}
          className="w-full h-full"
          layoutId={layoutId}
        />
      </div>
    </Link>
  )
}

export default Card
