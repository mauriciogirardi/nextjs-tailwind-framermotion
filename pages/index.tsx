import Card from '../components/Card'

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl md:mt-24 mt-10 leading-none font-extrabold tracking-tight text-gray-800">
        Construa sites modernos com agilidade sem precisar sair do HTML.
      </h1>

      <div className=" mt-10 md:mt-24 grid w-full grid-cols-1 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-1">
        <Card
          img="/img/nextjs.svg"
          alt="next.js"
          href="/nextjs"
          layoutId="nextjs-logo"
        />
        <Card
          img="/img/tailwind.svg"
          alt="tailwind"
          href="/tailwind"
          layoutId="tailwind-logo"
        />
        <Card
          img="/img/framermotion.svg"
          alt="framermotion"
          href="/framermotion"
          layoutId="framermotion-logo"
        />
      </div>
    </div>
  )
}
