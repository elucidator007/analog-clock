'use client'
import { useState, useEffect } from "react"

export default function Home() {
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
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[#303841]">
            <div className="relative w-80 h-96 bg-[#3A4750] rounded-3xl shadow-xl overflow-hidden">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#EEEEEE] rounded-full border-8 border-[#00ADB5] shadow-inner">
                    {[...Array(12)].map((_, i) => (
                        <div 
                            key={i} 
                            className="absolute w-full h-full text-center"
                            style={{
                                transform: `rotate(${i * 30}deg)`,
                            }}
                        >
                            <span 
                                className="inline-block text-[#3A4750] text-xl"
                                style={{
                                    transform: `rotate(-${i * 30}deg)`,
                                    height: '30px',
                                    lineHeight: '30px',
                                    marginTop: '-15px',
                                }}
                            >
                                {i === 0 ? 12 : i}
                            </span>
                        </div>
                    ))}
                    <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-[#3A4750] rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                    <div 
                        className="absolute top-1/2 left-1/2 h-24 w-1 -mt-24 origin-bottom bg-[#00ADB5]"
                        style={{ transform: `translateX(-50%) rotate(${secondHandDegree}deg)` }}
                    />
                    <div 
                        className="absolute top-1/2 left-1/2 h-20 w-2 -mt-20 origin-bottom bg-[#3A4750]"
                        style={{ transform: `translateX(-50%) rotate(${minuteHandDegree}deg)` }}
                    />
                    <div 
                        className="absolute top-1/2 left-1/2 h-16 w-2 -mt-16 origin-bottom bg-[#3A4750]"
                        style={{ transform: `translateX(-50%) rotate(${hourHandDegree}deg)` }}
                    />
                </div>
            </div>
        </main>
    );
}