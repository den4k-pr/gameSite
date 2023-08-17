"use client"

import Image from "next/image"
import { useEffect, useState } from 'react';
import greeting from "../Greeting.module.scss"

export const SliderGreeting = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = ["/greeting/gretingSlideOne.png", "/greeting/gretingSlideTwo.png"]

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [images.length]);

    return(
        <div className={greeting.greeting__slider}>
            {images.map((image, index) =>
                <Image key={index} src={image} alt={`Slide ${index + 1}`} fill style={{
                    opacity: index === currentIndex ? 1 : 0,
                    transition: 'opacity 1s ease-in-out',
                  }} 
                />
            )}
        </div>
    )
}