import { useState } from 'react'

export function useAntiCheatDetection() {
  const [isMouseOutAlertOpen, setIsMouseOutAlertOpen] = useState(false)

  // useEffect(() => {
  //   const handleMouseOut = (event: MouseEvent) => {
  //     // 창 밖으로 나간 경우 4초 후 알림
  //     if (event.relatedTarget === null && !document.hidden) {
  //       timeoutRef.current = setTimeout(() => {
  //         setIsMouseOutAlertOpen(true)
  //       }, 4000)
  //     }
  //   }

  //   const handleMouseOver = () => {
  //     // 창 안으로 돌아오면 알림 취소
  //     if (timeoutRef.current) {
  //       clearTimeout(timeoutRef.current)
  //       timeoutRef.current = null
  //     }
  //   }

  //   document.documentElement.addEventListener('mouseout', handleMouseOut)
  //   document.documentElement.addEventListener('mouseover', handleMouseOver)

  //   return () => {
  //     document.documentElement.removeEventListener('mouseout', handleMouseOut)
  //     document.documentElement.removeEventListener('mouseover', handleMouseOver)
  //     if (timeoutRef.current) {
  //       clearTimeout(timeoutRef.current)
  //     }
  //   }
  // }, [])

  return {
    isMouseOutAlertOpen,
    setIsMouseOutAlertOpen,
  }
}
