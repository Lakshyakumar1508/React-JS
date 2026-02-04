import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

const Page1Content = (props) => {
  return (
    <div className="py-4 px-16 flex justify-between items-start min-h-screen bg-fuchsia-100">
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content
