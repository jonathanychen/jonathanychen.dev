const ButtonLink = ({ url, text } : { url : string, text: string }) => {
  return (
    <button className="rounded-full mt-5 p-2 pl-3 bg-blue-800 transition duration-175 hover:scale-105 mx-5">
      <a href={url} className="flex flex-row align-middle text-white cursor-pointer">
        <p className="align-middle">{text} -&gt;</p>
      </a>
    </button>
  )
}
export default ButtonLink;