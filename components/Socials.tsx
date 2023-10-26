import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'

const Socials = () => {
  return (
    <div className="grid grid-cols-3 mb-10">
      <a href="" className="p-5">
        <AiFillLinkedin
          size={30}
          className="hover:text-white transition cursor-pointer text-neutral-400"
        />
      </a>
      <a href="" className="p-5">
        <AiFillGithub
          size={30}
          className="hover:text-white transition cursor-pointer text-neutral-400"
        />
      </a>
      <a href="" className="p-5">
        <AiFillTwitterCircle
          size={30}
          className="hover:text-white transition cursor-pointer text-neutral-400"
        />
      </a>
    </div>
  )
}
export default Socials;