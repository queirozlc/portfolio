import { About } from '@/components/about'
import { Banner } from '@/components/banner'

export default function Home() {
  return (
    <main className="size-full min-h-screen bg-[url('/Looper.png')] bg-no-repeat">
      <div className="flex flex-col gap-20">
        <Banner />
        <About />
      </div>
    </main>
  )
}
