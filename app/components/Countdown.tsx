"use client"

import { useState, useEffect } from "react"
import { getTimeRemaining } from "@/utils/timeCalculations"

interface CountdownProps {
  targetDate: Date
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(targetDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining(targetDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      {Object.entries(timeRemaining).map(([unit, value]) => (
        <div key={unit} className="bg-white bg-opacity-10 rounded-lg p-4">
          <div className="text-4xl font-bold">{value}</div>
          <div className="text-sm uppercase">{unit}</div>
        </div>
      ))}
    </div>
  )
}

