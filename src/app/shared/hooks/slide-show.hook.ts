import { useEffect, useState } from 'react'

export const useSlideShow = (length: number, ms = 3000) => {
  const [activeIdx, setActiveIdx] = useState(0)

  let interval: ReturnType<typeof setInterval>

  useEffect(() => {
    if (length === 1) return
    interval = setInterval(() => {
      setActiveIdx((state) => (state + 1 >= length ? 0 : state + 1))
      return clearInterval(interval)
    }, ms)
  }, [])

  return { activeIdx }
}
