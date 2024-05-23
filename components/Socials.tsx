import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'

const GITHUB_LINK = ""
const LINKEDIN_LINK = ""

const Socials = () => {
  return (
    <div className="grid grid-cols-3 mb-10">
      <a href="" className="p-5">
        <AiFillLinkedin
          size={30}
          className="transition cursor-pointer"
        />
      </a>
      <a href="" className="p-5">
        <AiFillGithub
          size={30}
          className="transition cursor-pointer"
        />
      </a>
    </div>
  )
}
export default Socials;