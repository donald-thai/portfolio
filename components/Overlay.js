import {useEffect} from 'react'

const Overlay = ({navOpen}) => {

  useEffect(() => {
    if (navOpen) {
      // prevent scroll
      document.body.style.overflow = 'hidden';
    } else {
      // set back to initial value
      document.body.style.overflow = 'unset';
    }
  }, [navOpen])

  return (
    <div className={`h-0 w-full fixed top-0 left-0 z-[49] ${navOpen ? "h-full" : ""} bg-white opacity-0`}>
      
    </div>
  )
}

export default Overlay