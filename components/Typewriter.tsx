const Typewriter = ({ text } : { text : String }) => {
  return (
    <h1
      className={`
        animate-typing
        overflow-hidden whitespace-nowrap border-r-4 border-r-white border-opacity-0 text-5xl text-white font-bold`}>
      { text }
    </h1>
  )
};
export default Typewriter;