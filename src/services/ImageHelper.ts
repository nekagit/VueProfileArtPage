import Intro1 from '@/assets/Nana/introGallery/1.jpg'
import Intro2 from "@/assets/Nana/introGallery/2.jpg"
import Intro3 from "@/assets/Nana/introGallery/3.jpg"
import Intro4 from '@/assets/Nana/introGallery/4.jpg'
import ProfilePic from '@/assets/Nana/introGallery/profilePic.jpg'
import logo from '@/assets/Nana/introGallery/logo.png'
export default function ImageHelper() {
  const introGallery = [Intro1, Intro2, Intro3, Intro4, ProfilePic, logo]
  const exhibitionGallery = [Intro1, Intro2, Intro3, Intro4, ProfilePic, logo]
  const artworkGallery = [Intro1, Intro2, Intro3, Intro4, ProfilePic, logo]
  const lifeGallery = [Intro1, Intro2, Intro3, Intro4, ProfilePic, logo]
  const artPage = [
    [Intro1, Intro2, Intro3, Intro4, ProfilePic, logo],
    [Intro1, Intro2, Intro3, Intro4, ProfilePic, logo],
    [Intro1, Intro2, Intro3, Intro4, ProfilePic, logo],
    [Intro1, Intro2, Intro3, Intro4, ProfilePic, logo],
    [Intro1, Intro2, Intro3, Intro4, ProfilePic, logo],
    [Intro1, Intro2, Intro3, Intro4, ProfilePic, logo]
  ]
  return { introGallery, artPage, exhibitionGallery, artworkGallery, lifeGallery }
}
