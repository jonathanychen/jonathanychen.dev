import IntroTypewriter from '@/components/IntroTypewriter'
import IntroBlurb from '@/components/IntroBlurb'
import Headshot from '@/components/Headshot'
import LearnMore from '@/components/LearnMore'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between top-0.5">
      <div className="relative flex place-items-center text-center">
        <Headshot/>
      </div>

      <div className="relative flex place-items-center text-center pb-5 pt-10">
        <IntroTypewriter text="Hi, I'm Jonathan."/>
      </div>      

      <div className="relative flex place-items-center max-w-prose text-center">
        <IntroBlurb/>
      </div>

      <div className="relative flex place-items-center max-w-prose text-center">
        <LearnMore/>
      </div>
    </main>
  )
}
