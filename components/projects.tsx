import Image from 'next/image'
import Link from 'next/link'

type Repo = {
  id: number
  name: string
  full_name: string
  description: string
  private: boolean
}

async function getRepos() {
  const data = await fetch('https://api.github.com/users/queirozlc/repos')
  return (await data.json()) as Repo[]
}

export async function Projects() {
  const repos = await getRepos()
  const publicRepos = repos.filter((repo) => !repo.private)

  return (
    <section id="projects">
      <h2 className="text-white font-black text-center text-6xl pt-9">
        PROJETOS
      </h2>

      <div className="px-4 md:mx-auto max-w-[900px]">
        <div className="flex-col flex md:flex-row mt-7">
          <Link
            href="https://github.com/queirozlc/pontocao"
            target="_blank"
            className="z-10 transition-transform duration-300 hover:scale-105"
          >
            <div className="flex mb-5">
              <Image
                src="/PontoCao.png"
                height={150}
                width={150}
                alt="First Project"
              />
              <div className="p-3">
                <p className="text-white font-black text-xl underline tracking-tight">
                  PontoCao
                </p>
                <p className="text-zinc-600 md:text-lg">
                  Um app para conectar pessoas que estão buscando adotar pets
                  com ONGs, instituições e protetores independentes.
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex-col flex md:flex-row mt-7">
          <Link
            href="https://github.com/elixir-lang/elixir"
            target="_blank"
            className="z-10 transition-transform duration-300 hover:scale-105"
          >
            <div className="flex mb-5">
              <div className="relative min-w-[150px]">
                <Image src="/elixir.png" alt="Elixir" fill />
              </div>

              <div className="p-3">
                <p className="text-white font-black text-xl underline tracking-tight">
                  Elixir
                </p>
                <p className="text-zinc-600 md:text-lg">
                  Contribuição Open Source para a linguagem de programação
                  Elixir 🚀 <br /> Elixir é uma linaguagem funcional e
                  concorrente que roda na máquina virtual Erlang.
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex-col flex md:flex-row mt-7">
          <Link
            href="https://github.com/phoenixframework/phoenix"
            target="_blank"
            className="z-10 transition-transform duration-300 hover:scale-105"
          >
            <div className="flex mb-5">
              <div className="relative min-w-[150px]">
                <Image src="/phoenix.png" fill alt="Phoenix" />
              </div>

              <div className="p-3">
                <p className="text-white font-black text-xl underline tracking-tight">
                  Phoenix Framework
                </p>
                <p className="text-zinc-600 md:text-lg">
                  Contribuição Open Source para o principal framework web para
                  Elixir
                  <br /> Phoenix é um framework web MVC "Rails Like" para
                  construição de aplicações web escaláveis, concorrentes e
                  resilientes.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
