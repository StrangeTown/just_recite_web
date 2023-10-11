import { globalStrings, tStringItem } from "../data"

// get random strings, but not repeat
const getRandomStrings = (length:number): tStringItem[] => {
  let randomStrings:tStringItem[] = []
  let randomString:tStringItem
  let isRepeat = false
  while (randomStrings.length < length) {
    randomString = globalStrings[Math.floor(Math.random() * globalStrings.length)]
    isRepeat = false
    for (let i = 0; i < randomStrings.length; i++) {
      if (randomStrings[i] === randomString) {
        isRepeat = true
        break
      }
    }
    if (!isRepeat) {
      randomStrings.push(randomString)
    }
  }
  return randomStrings
}

export { getRandomStrings }