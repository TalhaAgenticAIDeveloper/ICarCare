"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date()
      const currentHour = now.getHours()
      const currentMinute = now.getMinutes()
      const currentSecond = now.getSeconds()

      // Workshop hours: 9 AM to 11 PM (23:00)
      const openHour = 9
      const closeHour = 23

      let targetTime: Date
      let message: string

      if (currentHour >= openHour && currentHour < closeHour) {
        // Workshop is open, calculate time until closing
        setIsOpen(true)
        targetTime = new Date()
        targetTime.setHours(closeHour, 0, 0, 0)
        message = "Workshop closes in"
      } else {
        // Workshop is closed, calculate time until opening
        setIsOpen(false)
        targetTime = new Date()

        if (currentHour >= closeHour) {
          // After closing time, next opening is tomorrow
          targetTime.setDate(targetTime.getDate() + 1)
        }

        targetTime.setHours(openHour, 0, 0, 0)
        message = "Workshop opens in"
      }

      const timeDiff = targetTime.getTime() - now.getTime()

      if (timeDiff > 0) {
        const hours = Math.floor(timeDiff / (1000 * 60 * 60))
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)

        setTimeLeft(`${message} ${hours}h ${minutes}m ${seconds}s`)
      } else {
        setTimeLeft("")
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!timeLeft) return null

  return (
    <div
      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium ${
        isOpen
          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
          : "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
      }`}
    >
      <Clock className="h-4 w-4" />
      <span>{timeLeft}</span>
    </div>
  )
}
