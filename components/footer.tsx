import Link from 'next/link'
import Image from 'next/image'

type SocialLinks = {
  link: string
  image: string
  alt: string
}

const social_links: SocialLinks[] = [
  {
    link: 'https://github.com/queirozlc',
    alt: 'GitHub',
    image: './github.svg'
  },
  {
    link: 'https://www.linkedin.com/in/queiroz-lucas/',
    alt: 'Linkedin',
    image: './linkedin.svg'
  }
]

export function Footer() {
  return (
    <div className="container mx-auto pt-12 pb-8">
      <div className="pb-10 justify-center flex">
        {social_links.map(({ link, image, alt }) => {
          return (
            <Link
              href={link}
              target="_blank"
              key={alt}
              className="z-[1] transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={image}
                height={30}
                width={30}
                alt={alt}
                sizes="100vw"
                className="mx-5"
              />
            </Link>
          )
        })}
      </div>
      <p className="text-gray-300 text-center text-sm">
        © 2024 Lucas Queiroz. Todos os direitos reservados.
      </p>
    </div>
  )
}
