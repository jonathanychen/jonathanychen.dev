const IntroTypewriter = ({ text } : { text : String }) => {
  return (
    <h1
      className={`
        animate-intro
        overflow-hidden whitespace-nowrap border-r-4 border-r-white border-opacity-0 text-5xl text-white font-bold`}>
      { text }
    </h1>
  )
};
export default IntroTypewriter;