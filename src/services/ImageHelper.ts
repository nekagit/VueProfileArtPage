import Intro1 from '@/assets/Nana/introGallery/1.JPG'
import Intro2 from '@/assets/Nana/introGallery/2.jpg'
import Intro3 from '@/assets/Nana/introGallery/3.JPG'
import Intro4 from '@/assets/Nana/introGallery/4.jpg'

import spring1 from '@/assets/Nana/springGallery/1.JPG'
import spring2 from '@/assets/Nana/springGallery/2.JPG'
import spring3 from '@/assets/Nana/springGallery/3.jpg'

import summer1 from '@/assets/Nana/summerGallery/1.jpg'
import summer2 from '@/assets/Nana/summerGallery/2.jpg'
import summer3 from '@/assets/Nana/summerGallery/3.jpg'
import summer4 from '@/assets/Nana/summerGallery/4.jpg'

import autmn1 from '@/assets/Nana/autmnGallery/1.JPG'
import autmn2 from '@/assets/Nana/autmnGallery/2.JPG'
import autmn3 from '@/assets/Nana/autmnGallery/3.JPG'
import autmn4 from '@/assets/Nana/autmnGallery/4.jpeg'

import winter1 from '@/assets/Nana/winterGallery/1.JPG'
import winter2 from '@/assets/Nana/winterGallery/2.jpg'
import winter3 from '@/assets/Nana/winterGallery/3.jpg'
import winter4 from '@/assets/Nana/winterGallery/4.jpg'

import abstract1 from '@/assets/Nana/abstractGallery/1.jpg'
import abstract2 from '@/assets/Nana/abstractGallery/2.jpg'
import abstract3 from '@/assets/Nana/abstractGallery/3.jpg'
import abstract4 from '@/assets/Nana/abstractGallery/4.jpg'

import other1 from '@/assets/Nana/otherGallery/1.JPG'
import other2 from '@/assets/Nana/otherGallery/2.jpg'
import other3 from '@/assets/Nana/otherGallery/3.jpg'
import other4 from '@/assets/Nana/otherGallery/4.jpg'

import ProfilePic from '@/assets/Nana/introGallery/profilePic.jpg'
import logo from '@/assets/Nana/introGallery/logo.png'
export default function ImageHelper() {
  const introGallery = [
    { src: Intro1, title: '#1' },
    { src: Intro2, title: '#1' },
    { src: Intro3, title: '#1' },Intro1
Intro1
    { src: Intro4, title: '#1' },
    { src: abstract1, title: '#1' },
    { src: spring2, title: '#1' },
    { src: summer1, title: '#1' },
    { src: winter1, title: '#1' },
    { src: abstract2, title: '#1' }
  ]
  const exhibitionGallery = [
    { src: Intro1, title: '#1' },
    { src: Intro2, title: '#1' },
    { src: Intro3, title: '#1' },
    { src: Intro4, title: '#1' },
    { src: ProfilePic, title: '#1' },
    { src: logo, title: '#1' }
  ]
  const artworkGallery = [
    { src: Intro1, title: '#1' },
    { src: Intro2, title: '#1' },
    { src: Intro3, title: '#1' },
    { src: Intro4, title: '#1' },
    { src: ProfilePic, title: '#1' },
    { src: logo, title: '#1' }
  ]
  const lifeGallery = [
    { src: Intro1, title: '#1' },
    { src: Intro2, title: '#1' },
    { src: Intro3, title: '#1' },
    { src: Intro4, title: '#1' },
    { src: ProfilePic, title: '#1' },
    { src: logo, title: '#1' }
  ]
  const springGallery = [
    { src: spring1, title: '#1' },
    { src: spring2, title: '#1' },
    { src: spring3, title: '#1' }
  ]
  const summerGallery = [
    { src: summer1, title: '#1' },
    { src: summer2, title: '#1' },
    { src: summer3, title: '#1' },
    { src: summer4, title: '#1' }
  ]
  const autmnGallery = [
    { src: autmn1, title: '#1' },
    { src: autmn2, title: '#1' },
    { src: autmn3, title: '#1' },
    { src: autmn4, title: '#1' }
  ]
  const winterGallery = [
    { src: winter1, title: '#1' },
    { src: winter2, title: '#1' },
    { src: winter3, title: '#1' },
    { src: winter4, title: '#1' }
  ]
  const abstractGallery = [
    { src: abstract1, title: '#1' },
    { src: abstract2, title: '#1' },
    { src: abstract3, title: '#1' },
    { src: abstract4, title: '#1' }
  ]
  const otherGallery = [
    { src: other1, title: '#1' },
    { src: other2, title: '#1' },
    { src: other3, title: '#1' },
    { src: other4, title: '#1' }
  ]
  const artPage = [
    springGallery,
    summerGallery,
    autmnGallery,
    winterGallery,
    abstractGallery,
    otherGallery
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
