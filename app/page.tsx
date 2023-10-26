import Typewriter from '@/components/Typewriter'
import Intro from '@/components/Intro'
import Socials from '@/components/Socials'
import Headshot from '@/components/Headshot'
import LearnMore from '@/components/LearnMore'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">

      <div className="flex flex-col items-center absolute top-1/4">
        <div className="relative flex place-items-center text-center">
          <Headshot/>
        </div>

        <div className="relative flex place-items-center text-center pb-5 pt-10">
          <Typewriter text="Hi, I'm Jonathan."/>
        </div>      

        <div className="relative flex place-items-center max-w-prose text-center animate-fadeIn">
          <Intro/>
        </div>

        <div>
          <LearnMore/>
        </div>

      </div>

      <div className="align-bottom absolute top-3/4">
        <Socials/>
      </div>
        
    </main>
  )
}
