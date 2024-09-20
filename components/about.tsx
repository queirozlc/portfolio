export function About() {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] scale-[0.9] z-50"
    >
      <div className="flex flex-col justify-around flex-wrap items-center max-w-[900px] gap-6">
        <h1 className="text-white font-black text-6xl uppercase">SOBRE MIM</h1>
        <p className="text-gray-300 text-justify lg:text-xl text-lg">
          Desenvolvedor de software com sólida experiência em projetos back-end
          e fullstack, trabalhando principalmente com Node.JS e Java, além de
          contribuições de open source para a linguagem Elixir e seu principal
          framework Phoenix em tempo livre. Sempre tento contribuir para
          tecnologias de código aberto que fazem parte do meu dia a dia.
          Atualmente estou cursando Sistemas de Informação na FAESA em Vitória,
          ES.
        </p>
      </div>
    </section>
  )
}
