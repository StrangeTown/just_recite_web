import { useAppSelector } from "../../../../store/hooks"
import { selectEnFont } from "../../../../store/slices/settingSlice"
import { IStoreStringItem } from "../../../../store/slices/stringSlice"
import Audio from "../Audio"

interface IAnswerProps {
  item: IStoreStringItem
  answerVisible: boolean
}
const Answer = ({ item, answerVisible }: IAnswerProps) => {
  const enFont = useAppSelector(selectEnFont)

  const enVal = item.en
  const textSizeCls = enVal.length > 50 ? "text-2xl" : "text-3xl"
  interface IEnFonts {
    [key: string]: string
  }

  const enFonts: IEnFonts = {
    Satisfy: "font-[Satisfy]",
    Roboto: "font-[Roboto]",
  }
  const fontCls = enFonts[enFont]

  const blurCls = answerVisible ? "" : "blur-md"

  return (
    <>
      <div className={`${blurCls}`}>
        <div className={`${textSizeCls} text-slate-700 ${fontCls}`}>
          {enVal}
        </div>
        {item.audio && (
          <div className="mt-3">
            <Audio src={item.audio} />
          </div>
        )}
      </div>
    </>
  )
}

export default Answer
