import { useEffect, useState } from 'react'

enum TYPING_STATUS {
  INITIALIZING = 'initializing',
  TYPING = 'typing',
  FINSIHED = 'finished',
}

const INITIALIZING_TIMER = 2000
const DELAY_BETWEEN_TYPE = 75

export const useTypingTextEffect = (sentences: string[]): string => {
  const [typingStatus, setTypingStatus] = useState(TYPING_STATUS.INITIALIZING)
  const [accumulatedSentence, setAccumulatedSentence] = useState<string>('')
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0)

  useEffect(() => {
    if (typingStatus !== TYPING_STATUS.INITIALIZING) {
      return
    }

    const typingStatusTimeout = setTimeout(() => {
      setTypingStatus(TYPING_STATUS.TYPING)
    }, INITIALIZING_TIMER)

    return () => {
      clearTimeout(typingStatusTimeout)
    }
  }, [typingStatus])

  useEffect(() => {
    if (
      currentIndex === sentences.length ||
      typingStatus !== TYPING_STATUS.TYPING
    ) {
      return
    }

    const currentSetence = sentences[currentIndex]
    const nextCharToType = currentSetence[currentSentenceIndex]

    const timeout = setTimeout(() => {
      const isEndOfSentenceReached =
        currentSentenceIndex === currentSetence.length - 1
      const isEndReached =
        isEndOfSentenceReached && currentIndex + 1 === sentences.length

      if (isEndOfSentenceReached) {
        setAccumulatedSentence(
          `${accumulatedSentence}${nextCharToType}${isEndReached ? '' : '\n'}`,
        )
        setCurrentIndex(currentIndex + 1)
        setCurrentSentenceIndex(0)
      } else {
        setAccumulatedSentence(`${accumulatedSentence}${nextCharToType}`)
        setCurrentSentenceIndex(currentSentenceIndex + 1)
      }

      if (isEndReached) {
        setTypingStatus(TYPING_STATUS.FINSIHED)
      }
    }, DELAY_BETWEEN_TYPE)

    return () => {
      clearTimeout(timeout)
    }
  }, [accumulatedSentence, currentSentenceIndex, currentIndex, typingStatus])

  return accumulatedSentence
}
