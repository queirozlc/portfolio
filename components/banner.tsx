import Image from 'next/image'
import Link from 'next/link'

export function Banner() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-20 mt-24 z-20">
      <div className="flex justify-center">
        <Image
          priority
          src="/me.jpg"
          height={250}
          width={250}
          alt="Lucas Queiroz Perfil"
          className="rounded-full"
        />
      </div>

      <h1 className="flex flex-col gap-6 mt-10 pointer-events-none animate-bounce tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto">
        Lucas Queiroz
      </h1>

      <div className="flex flex-col justify-center gap-4">
        <p className="text-2xl font-medium tracking-tighter  text-gray-300 max-w-[600px]">
          Desenvolvedor de Software
        </p>
        <Link
          href="mailto:sepulchrolucas@gmail.com"
          className="hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-10 border-[0.1px] border-white hover:border-transparent transition-colors duration-200"
        >
          Manda um alô! 🚀
        </Link>
      </div>
    </section>
  )
}
