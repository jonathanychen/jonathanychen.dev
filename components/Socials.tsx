import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'

const Socials = () => {
  return (
    <div className="w-full justify-between grid grid-cols-3 gap-10">
      <a href="">
      <AiFillLinkedin
          size={30}
          className="hover:text-white transition cursor-pointer text-neutral-400"
        />
      </a>
      <a href="">
        <AiFillGithub
          size={30}
          className="hover:text-white transition cursor-pointer text-neutral-400"
        />
      </a>
      <a href="">
        <AiFillTwitterCircle
          size={30}
          className="hover:text-white transition cursor-pointer text-neutral-400"
        />
      </a>
    </div>
  )
}
export default Socials;