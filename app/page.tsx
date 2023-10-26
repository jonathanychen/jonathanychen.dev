import Typewriter from '@/components/Typewriter'
import Intro from '@/components/Intro'
import Headshot from '@/components/Headshot'
import LearnMore from '@/components/LearnMore'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between top-0.5">
      <div className="relative flex place-items-center text-center animate-fadeIn">
        <Headshot/>
      </div>

      <div className="relative flex place-items-center text-center pb-5 pt-10">
        <Typewriter text="Hi, I'm Jonathan."/>
      </div>      

      <div className="relative flex place-items-center max-w-prose text-center animate-fadeIn">
        <Intro/>
      </div>

      <div className="relative flex place-items-center max-w-prose text-center animate-fadeIn">
        <LearnMore/>
      </div>
    </main>
  )
}
