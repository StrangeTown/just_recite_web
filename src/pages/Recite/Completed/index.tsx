import { MdDone } from "react-icons/md"

interface CompletedProps {
  onCrazyPracticeClick: () => void
}
const Completed = ({ onCrazyPracticeClick }: CompletedProps) => {
  return (
    <div className="flex flex-col items-center">
      {/* completed icon */}
      <div>
        <MdDone className="text-4xl text-slate-300" />
      </div>
      <div className="mt-16">
        <div
          className="cursor-pointer underline text-slate-500"
          onClick={() => {
            window.location.reload()
          }}
        >
          再来一组
        </div>
        <div
          className="mt-4 cursor-pointer underline text-slate-500"
          onClick={onCrazyPracticeClick}
        >
          利用钩子疯狂复习
        </div>
      </div>
    </div>
  )
}

export default Completed
