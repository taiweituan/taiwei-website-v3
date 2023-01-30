import { useEffect, useState } from 'react'
import { randomChanceGenerator } from '../utils'
import { FUN_CHANCE } from '../utils/constants'
import profilePic from '../assets/profile-pic.jpeg'
import profilePicMe from '../assets/profile-pic_me.jpeg'
import profilePicMeMe from '../assets/profile-pic_meme.jpeg'

const useProfilePic = ():string => {
  const [pic, setPic] = useState(profilePicMe)

  useEffect(() => {
    const randomNumber = randomChanceGenerator()

    if (randomNumber >= FUN_CHANCE) {
      setPic(profilePicMe)
    } else if (randomNumber < FUN_CHANCE - 1) {
      setPic(profilePicMeMe) // alt pic
    } else {
      setPic(profilePic) // Sago
    }
  }, [])

  return pic
}

export default useProfilePic
