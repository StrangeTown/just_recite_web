import { useTranslation } from "react-i18next"
import appLocalstorage from "../../utils/appLocalstorage"
import SettingsItem from "./SettingsItem"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { selectEnFont, setEnFont } from "../../store/slices/settingSlice"
import Contact from "./Contact"
import Refresh from "./Refresh"
import { useEffect, useState } from "react"
import ContactModal from "./ContactModal"
import {
  setCrazyModeVisible,
  setCycleModeVisible,
} from "../../store/slices/recitePageSlice"

const languageArr = ["en", "zh"]
const enFontArr = ["Satisfy", "Roboto"]

interface ISettingsProps {
  onClose: () => void
}
const Settings = ({ onClose }: ISettingsProps) => {
  const { i18n } = useTranslation()
  const dispatch = useAppDispatch()
  const enFont = useAppSelector(selectEnFont)
  const [contactModalVisible, setContactModalVisible] = useState(false)
  const [backdropBgOpacityCls, setBackdropBgOpacityCls] =
    useState("bg-opacity-0")
  const [contentTranslateX, setContentTranslateX] = useState("translate-x-full")
  useEffect(() => {
    setTimeout(() => {
      setBackdropBgOpacityCls("bg-opacity-50")
      setContentTranslateX("translate-x-0")
    }, 0)
  }, [])

  const currentLanguage =
    appLocalstorage.getItem(appLocalstorage.keys.language) || "en"

  const handleLanguageClick = (language: string) => {
    appLocalstorage.setItem(appLocalstorage.keys.language, language)
    i18n.changeLanguage(language)
  }
  const handleEnFontClick = (font: string) => {
    appLocalstorage.setItem(appLocalstorage.keys.enFont, font)
    dispatch(setEnFont(font))
  }

  // check if the click is on the backdrop
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) {
      return
    }

    setBackdropBgOpacityCls("bg-opacity-0")
    setContentTranslateX("translate-x-full")
    setTimeout(() => {
      onClose()
    }, 500)
  }

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full flex z-100 bg-black ${backdropBgOpacityCls} transition-all duration-500 flex justify-end`}
      onClick={handleBackdropClick}
    >
      {contactModalVisible && (
        <ContactModal onClose={() => setContactModalVisible(false)} />
      )}
      <div
        className={`w-2/3 h-full bg-white ${contentTranslateX} transition-all duration-500 flex flex-col gap-y-3`}
      >
        <SettingsItem
          options={languageArr}
          current={currentLanguage}
          onClick={handleLanguageClick}
        />
        <SettingsItem
          options={enFontArr}
          current={enFont}
          onClick={handleEnFontClick}
        />
        <Contact onClick={() => setContactModalVisible(true)} />
        <Refresh />

        <div
          onClick={() => {
            dispatch(setCrazyModeVisible(true))
          }}
        >
          Crazy Mode
        </div>
        <div
          onClick={() => {
            dispatch(setCycleModeVisible(true))
          }}
        >
          Cycle Mode
        </div>
      </div>
    </div>
  )
}

export default Settings
