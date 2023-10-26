import Image from "next/image";

const Headshot = () => {
  return (
    <div className="rounded-full border-white border p-2">
      <Image src="/headshot.jpeg" alt="Headshot photo" width="100" height="100" className="rounded-full"/>
    </div>
  )
}
export default Headshot;