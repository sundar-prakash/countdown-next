export function getTimeRemaining(endTime: Date): {
    days: number
    hours: number
    minutes: number
    seconds: number
  } {
    const total = endTime.getTime() - Date.now()
    const seconds = Math.floor((total / 1000) % 60)
    const minutes = Math.floor((total / 1000 / 60) % 60)
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
    const days = Math.floor(total / (1000 * 60 * 60 * 24))
  
    return { days, hours, minutes, seconds }
  }
  
  