import RightCardContent from "./RightCardContent"

const Rightcard = ({ img ,tag, index}) => {
  return (
    <div className="relative h-150 w-80 rounded-3xl overflow-hidden flex shrink-0">
      
      {/* Background Image */}
      <img
        className="h-full w-full object-cover"
        src={img}
        alt="card"
      />


      <RightCardContent tag={tag} index={index}/>
    </div>
  )
}

export default Rightcard
