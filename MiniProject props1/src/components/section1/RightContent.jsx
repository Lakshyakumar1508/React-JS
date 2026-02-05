import Rightcard from "./Rightcard"

const RightContent = ({ users = [] }) => {
  return (
    <div className="h-full w-3/4 p-4 bg-white rounded-3xl flex flex-nowrap overflow-x-auto gap-5">
      {users.map((elem, index) => (
        <Rightcard          
         key={index}
        img={elem.img}
        tag={elem.tag}
        index={index + 1}
        color={elem.color}/>
      ))}
    </div>
  )
}

export default RightContent
