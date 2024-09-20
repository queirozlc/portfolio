import { About } from '@/components/about'
import { Banner } from '@/components/banner'
import { Experience } from '@/components/experience'

export default function Home() {
  return (
    <main className="size-full bg-[url('/Looper.png')] bg-no-repeat">
      <div className="flex flex-col gap-14">
        <Banner />
        <About />
        <Experience />
      </div>
    </main>
  )
}
