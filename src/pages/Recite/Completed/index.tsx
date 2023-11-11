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
          className="cursor-pointer text-slate-500 px-3 py-2  shadow"
          onClick={() => {
            window.location.reload()
          }}
        >
          再来一组
        </div>
        <div
          className="mt-4 cursor-pointer text-slate-500 px-3 py-2 shadow"
          onClick={onCrazyPracticeClick}
        >
          利用<span className="highlighter">钩子</span>疯狂复习
        </div>
      </div>
    </div>
  )
}

export default Completed
