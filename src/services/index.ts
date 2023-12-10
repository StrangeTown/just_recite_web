import store from "../store"
import { IStoreStringItem, setRandomStrings } from "../store/slices/stringSlice"
import appLocalstorage from "../utils/appLocalstorage"
import { getRandomStrings, getStringById } from "../utils/data"
const preloadImages = (urls: string[]) => {
  for (const url of urls) {
    const img = new Image()
    img.src = url
  }
}

const getPreviousIds = () => {
  const ids = appLocalstorage.getItem(appLocalstorage.keys.ids)
  if (ids) {
    return JSON.parse(ids) as string[]
  }
  return []
}

const generateItems = () => {
  // get random one of previous ids
  const previousIds = getPreviousIds()
  const previousId = previousIds[Math.floor(Math.random() * previousIds.length)]

  const randomStrings: IStoreStringItem[] = getRandomStrings({
    len: 9,
    excludeIds: [previousId],
  })

  const stringFromPreviousSession = getStringById(previousId)
  // insert string from previous session to randomStrings in a random position
  if (stringFromPreviousSession) {
    randomStrings.splice(Math.floor(Math.random() * randomStrings.length), 0, {
      ...stringFromPreviousSession,
      fromPrevSession: true,
    })
  }

  const imageUrls = randomStrings
    .map((s) => s.hook?.imgUrl)
    .filter((img) => img) as string[]
  preloadImages(imageUrls)

  store.dispatch(setRandomStrings(randomStrings))
}

const saveIdsToLocalStorage = (ids: string[]) => {
  appLocalstorage.setItem(appLocalstorage.keys.ids, JSON.stringify(ids))
}

export { generateItems, saveIdsToLocalStorage }
