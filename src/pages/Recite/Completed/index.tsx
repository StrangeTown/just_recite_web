import { MdDone } from "react-icons/md"
import { OneKey, TwoKey } from "../WorkArea/keys"
import { useEffect } from "react"

interface CompletedProps {
  onCrazyPracticeClick: () => void
}
const Completed = ({ onCrazyPracticeClick }: CompletedProps) => {
  const reload = () => {
    window.location.reload()
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "1") {
        reload()
      } else if (e.key === "2") {
        onCrazyPracticeClick()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <div className="flex flex-col items-center">
      {/* completed icon */}
      <div>
        <MdDone className="text-4xl text-slate-300" />
      </div>
      <div className="mt-16">
        <div
          className="cursor-pointer text-slate-500 px-3 py-2  shadow justify-center flex items-center gap-x-1"
          onClick={() => {
            reload()
          }}
        >
          再来一组
          <OneKey />
        </div>
        <div
          className="mt-4 cursor-pointer text-slate-500 px-3 py-2 shadow justify-center flex items-center gap-x-1"
          onClick={onCrazyPracticeClick}
        >
          利用<span className="highlighter">钩子</span>疯狂复习
          <TwoKey />
        </div>
      </div>
    </div>
  )
}

export default Completed
