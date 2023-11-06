import { useEffect } from "react"
import { ArrowLeftKey, ArrowRightKey, ArrowUpKey } from "./keys"
import ReciteButton from "./ReciteButton"
import { tStringItem } from "../../../data"
import { useTranslation } from "react-i18next"
import { selectEnFont } from "../../../store/slices/settingSlice"
import { useAppSelector } from "../../../store/hooks"
import Translation from "./Translation"
import Progress from "../Progress"

interface IWorkAreaProps {
  item?: tStringItem
  answerVisible: boolean
  handleDisplayClick: () => void
  handleOkClick: () => void
  handleNotClick: () => void
  progressCurrent: number
  progressTotal: number
}
const WorkArea = ({
  item,
  answerVisible,
  handleDisplayClick,
  handleOkClick,
  handleNotClick,
  progressCurrent,
  progressTotal,
}: IWorkAreaProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        if (answerVisible) {
          handleNotClick()
        }
      } else if (e.key === "ArrowRight") {
        if (answerVisible) {
          handleOkClick()
        }
      } else if (e.key === "ArrowUp") {
        if (!answerVisible) {
          handleDisplayClick()
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleDisplayClick, handleNotClick, handleOkClick, answerVisible])
  const { t } = useTranslation()
  const enFont = useAppSelector(selectEnFont)

  if (!item) {
    return null
  }

  interface IEnFonts {
    [key: string]: string
  }

  const enFonts: IEnFonts = {
    Satisfy: "font-[Satisfy]",
    Roboto: "font-[Roboto]",
  }
  const fontCls = enFonts[enFont]

  const textSizeCls = item.en.length > 50 ? "text-2xl" : "text-3xl"

  const hookImgOpacityCls = answerVisible ? "opacity-20" : "opacity-70"
  const hookImg = item.hook?.imgUrl || ""

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex-1 flex flex-col relative">
        {hookImg && (
          <img
            src={item.hook?.imgUrl}
            alt=""
            className={`absolute top-0 left-0 w-full h-full object-cover -z-10 ${hookImgOpacityCls} transition-all duration-200`}
          />
        )}
        <div className="pt-2">
          <Progress current={progressCurrent} total={progressTotal} />
        </div>

        {/* Answer */}
        <div className="flex-1 h-32 w-full flex items-center justify-center p-4">
          {answerVisible && (
            <div>
              <div className={`${textSizeCls} text-slate-700 ${fontCls}`}>
                {item.en}
              </div>
              {item.audio && (
                <div>
                  <audio src={item.audio} controls></audio>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className="-mt-5 w-full h-72 flex flex-col items-center bg-slate-50 p-10 pt-10 rounded-tl-[20px] rounded-tr-[20px]"
        style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px -1px 12px" }}
      >
        {/* Tanslation */}
        <div className="flex flex-col items-center p-4">
          <Translation string={item.zh} keyText={item.hook?.text} />
        </div>

        <div className="mt-7">
          {answerVisible ? (
            <div className="flex justify-center gap-6">
              <ReciteButton onClick={handleNotClick}>
                <div className="flex items-center gap-1">
                  <div className="w-max">{t("notRemember")}</div>
                  <ArrowLeftKey />
                </div>
              </ReciteButton>
              <ReciteButton onClick={handleOkClick}>
                <div className="flex items-center gap-1">
                  <div className="w-max">{t("remember")}</div>
                  <ArrowRightKey />
                </div>
              </ReciteButton>
            </div>
          ) : (
            <div className="flex justify-center">
              <ReciteButton onClick={handleDisplayClick}>
                <div className="flex items-center gap-1">
                  <div className="w-max">{t("display")}</div>
                  <ArrowUpKey />
                </div>
              </ReciteButton>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default WorkArea
