import Image from "next/image";
import localFont from 'next/font/local'

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: '../../public/fonts/space-age.ttf',
  display: 'swap',
})

const Homescreen = () => {
  return (
    <>
      <div className={`${myFont.className} absolute w-96 ml-72 pt-72` }>
  <h1 className="text-6xl mb-0">
      <span className="text-yellow-400">Earth</span>
      <br />
      <span className="text-white">Shaping Solution</span>
  </h1>
    <hr className="w-96 h-1 bg-yellow-400 border-0 rounded md:my-2"/>
  </div>   
    <div className="relative h-screen w-screen overflow-hidden -z-10">
    <Image
      alt="JCB"
      src='/images/jcb.jpg'
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8doi1HgAGsQI+jZszvgAAAABJRU5ErkJggg=="
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
    />
  </div>
  
  </>
  )
}

export default Homescreen;