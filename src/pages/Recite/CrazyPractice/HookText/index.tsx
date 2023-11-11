import { useState } from "react"

interface HookTextProps {
  hookText: string
  string: string
}
const HookText = ({ hookText, string }: HookTextProps) => {
  const [stringVisible, setStringVisible] = useState(false)

  return (
    <div>
      {stringVisible && <div>{string}</div>}
      <div
        className="highlighter text-slate-500"
        onClick={() => {
          setStringVisible(!stringVisible)
        }}
      >
        {hookText}
      </div>
    </div>
  )
}

export default HookText
