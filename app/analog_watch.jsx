'use client'
import { useState, useEffect } from "react"

export default function AnalogWatch() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const secondHandDegree = (time.getSeconds() / 60) * 360
    const minuteHandDegree = ((time.getMinutes() + time.getSeconds() / 60) / 60) * 360
    const hourHandDegree = ((time.getHours() + time.getMinutes() / 60) / 12) * 360

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="relative h-96 w-96 border-4 border-black rounded-full">
                <div 
                    className="absolute top-1/2 left-1/2 h-44 w-1 -mt-44 origin-bottom bg-red-500"
                    style={{ transform: `translateX(-50%) rotate(${secondHandDegree}deg)` }}
                />
                <div 
                    className="absolute top-1/2 left-1/2 h-36 w-2 -mt-36 origin-bottom bg-black"
                    style={{ transform: `translateX(-50%) rotate(${minuteHandDegree}deg)` }}
                />
                <div 
                    className="absolute top-1/2 left-1/2 h-24 w-3 -mt-24 origin-bottom bg-black"
                    style={{ transform: `translateX(-50%) rotate(${hourHandDegree}deg)` }}
                />
            </div>
        </main>
    );
}