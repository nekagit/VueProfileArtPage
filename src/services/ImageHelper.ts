import Intro1 from '@/assets/Nana/introGallery/1.jpg'
import Intro2 from '@/assets/Nana/introGallery/2.jpg'
import Intro3 from '@/assets/Nana/introGallery/3.jpg'
import Intro4 from '@/assets/Nana/introGallery/4.jpg'

import spring1 from '@/assets/Nana/springGallery/1.jpg'
import spring2 from '@/assets/Nana/springGallery/2.jpg'
import spring3 from '@/assets/Nana/springGallery/3.jpg'

import summer1 from '@/assets/Nana/summerGallery/1.jpg'
import summer2 from '@/assets/Nana/summerGallery/2.jpg'
import summer3 from '@/assets/Nana/summerGallery/3.jpg'
import summer4 from '@/assets/Nana/summerGallery/4.jpg'

import autmn1 from '@/assets/Nana/autmnGallery/1.jpg'
import autmn2 from '@/assets/Nana/autmnGallery/2.jpg'
import autmn3 from '@/assets/Nana/autmnGallery/3.jpg'
import autmn4 from '@/assets/Nana/autmnGallery/4.jpg'

import winter1 from '@/assets/Nana/winterGallery/1.jpg'
import winter2 from '@/assets/Nana/winterGallery/2.jpg'
import winter3 from '@/assets/Nana/winterGallery/3.jpg'
import winter4 from '@/assets/Nana/winterGallery/4.jpg'

import abstract1 from '@/assets/Nana/abstractGallery/1.jpg'
import abstract2 from '@/assets/Nana/abstractGallery/2.jpg'
import abstract3 from '@/assets/Nana/abstractGallery/3.jpg'
import abstract4 from '@/assets/Nana/abstractGallery/4.jpg'

import other1 from '@/assets/Nana/otherGallery/1.jpg'
import other2 from '@/assets/Nana/otherGallery/2.jpg'
import other3 from '@/assets/Nana/otherGallery/3.jpg'
import other4 from '@/assets/Nana/otherGallery/4.jpg'

import ProfilePic from '@/assets/Nana/introGallery/profilePic.jpg'
import logo from '@/assets/Nana/introGallery/logo.png'
export default function ImageHelper() {
  const introGallery = [Intro1, Intro2, Intro3, Intro4, ProfilePic, logo]
  const exhibitionGallery = [Intro1, Intro2, Intro3, Intro4, ProfilePic, logo]
  const artworkGallery = [Intro1, Intro2, Intro3, Intro4, ProfilePic, logo]
  const lifeGallery = [Intro1, Intro2, Intro3, Intro4, ProfilePic, logo]
  const springGallery = [spring1, spring2, spring3]
  const summerGallery = [summer1, summer2, summer3, summer4]
  const autmnGallery = [autmn1, autmn2, autmn3, autmn4]
  const winterGallery = [winter1, winter2, winter3, winter4]
  const abstractGallery = [abstract1, abstract2, abstract3, abstract4]
  const otherGallery = [other1, other2, other3, other4]
  const artPage = [
    [Intro1, Intro2, Intro3, Intro4, ProfilePic, logo],
    [Intro1, Intro2, Intro3, Intro4, ProfilePic, logo],
    [Intro1, Intro2, Intro3, Intro4, ProfilePic, logo],
    [Intro1, Intro2, Intro3, Intro4, ProfilePic, logo],
    [Intro1, Intro2, Intro3, Intro4, ProfilePic, logo],
    [Intro1, Intro2, Intro3, Intro4, ProfilePic, logo]
  ]
  return {
    introGallery,
    artPage,
    exhibitionGallery,
    artworkGallery,
    lifeGallery,
    springGallery,
    summerGallery,
    autmnGallery,
    winterGallery,
    abstractGallery,
    otherGallery
  }
}
