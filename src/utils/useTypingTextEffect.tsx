import { useEffect, useState } from 'react'

export const useTypingTextEffect = (sentences: string[]): string => {
  const [typeText, setTypeText] = useState<string>('')
  useEffect(() => {
    const nextTextToType = sentences[0].slice(0, typeText.length + 1)

    if (nextTextToType === typeText) return

    const timeout = setTimeout(() => {
      setTypeText(nextTextToType)
    }, 200)

    return () => {
      clearTimeout(timeout)
    }
  }, [typeText])

  return typeText
}
