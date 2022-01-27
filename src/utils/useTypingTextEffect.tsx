import { useEffect, useState } from 'react'

const DELAY_BETWEEN_TYPE = 80

export const useTypingTextEffect = (sentences: string[]): string => {
  const [accumulatedSentence, setAccumulatedSentence] = useState<string>('')
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0)

  useEffect(() => {
    if (currentIndex === sentences.length) return

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
    }, DELAY_BETWEEN_TYPE)

    return () => {
      clearTimeout(timeout)
    }
  }, [accumulatedSentence, currentSentenceIndex, currentIndex])

  return accumulatedSentence
}
