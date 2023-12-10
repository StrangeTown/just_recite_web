import { globalStrings, tStringItem } from "../data"

// get random strings, but not repeat
interface IGetRandomStrings {
  len: number
  excludeIds?: string[]
}
const getRandomStrings = ({ len, excludeIds = [] }: IGetRandomStrings) => {
  let randomStrings: tStringItem[] = []
  let randomString: tStringItem
  let isValid = false
  while (randomStrings.length < len) {
    randomString =
      globalStrings[Math.floor(Math.random() * globalStrings.length)]
    isValid = true

    // check if randomString is in randomStrings
    for (const string of randomStrings) {
      if (string.id === randomString.id) {
        isValid = false
        break
      }
    }

    // check if randomString is in excludeIds
    if (excludeIds.includes(randomString.id)) {
      isValid = false
    }

    if (isValid) {
      randomStrings.push(randomString)
    }
  }
  return randomStrings
}

const getStringById = (id: string): tStringItem | undefined => {
  for (const string of globalStrings) {
    if (string.id === id) {
      return string
    }
  }
  return undefined
}

export { getRandomStrings, getStringById }
