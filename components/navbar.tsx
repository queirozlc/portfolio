'use client'

import Link from 'next/link'

export function NavBar() {
  return (
    <header className="w-full h-[65px] bg-['#111'] fixed backdrop-blur-sm z-50 md:px-10">
      <div className="size-full flex items-center m-auto px-2.5 gap-5">
        <button className="bg-transparent text-nowrap cursor-pointer rounded-lg text-white py-2 px-5 border border-white font-medium">
          Sobre Mim
        </button>

        <Link
          href={'mailto:sepulchrolucas@gmail.com'}
          className="text-zinc-800 bg-white px-2.5 h-10 flex items-center justify-center rounded-lg font-medium transition-all hover:bg-zinc-200 gap-2 text-nowrap"
        >
          Entrar em contato
        </Link>
      </div>
    </header>
  )
}
