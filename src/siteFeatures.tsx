"use client";
import React, {useState, useEffect, useRef} from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/all';

// Check if mobile
export function useIsMobile() {
    
    // true if viewport <= 768px, false if wider
    const [isMobile, setIsMobile] = useState(
        () => window.matchMedia(`(max-width: 768px)`).matches
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia(
            `(max-width: 768px)`
        );

        // listener for changes
        const handler = (e: MediaQueryListEvent) => 
            setIsMobile(e.matches);
    
        mediaQuery.addEventListener("change", handler);

        return () => {
            mediaQuery.removeEventListener("change", handler);
        };
    }, []);

    return isMobile;
}

gsap.registerPlugin(TextPlugin);

export const Typewriter: React.FC = () => {
    const textRef = useRef<HTMLSpanElement>(null);
    const cursorRef = useRef<HTMLSpanElement>(null);
    const isMobile = useIsMobile();

    useEffect(() => {
        gsap.to(cursorRef.current, {
            opacity: 0,
            repeat: -1,
            yoyo: true,
            duration: 0.5,
            ease: 'power2.inOut',
        });

        // timeline
        const tl = gsap.timeline();

        tl.to(textRef.current, {
            text: "&gt;",
            duration: 0,
            ease: "none",
        }).to(textRef.current, {
            text: "&gt; I plan.",
            duration: 1,
            ease: "none",
            delay: 0.3,
        }).to(textRef.current, {
            text: "&gt; I plan. I design.",
            duration: 1.5,
            ease: "none",
            delay: 0.2,
        }).to(textRef.current, {
            text: "&gt; I plan. I design. I code.",
            duration: 1.5,
            ease: "none",
            delay: 0.3,
        })
        

        return () => {
            tl.kill();
        };
    }, []);

    return (
        <h1 className="font-medium text-3xl dark:text-white">
            <span ref={textRef}></span>
            <span ref={cursorRef} className="ml-1 inline-block h-7 w-0.5 bg-gray-600 dark:bg-white"></span>
        </h1>
    )
}

export const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;

        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }

    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    window.addEventListener("scroll", toggleVisible);

    return (
        <button className="fixed bottom-5 right-5 z-80 cursor-pointer">
            <svg 
                width="50" 
                height="50" 
                viewBox="0 0 50 50" 
                xmlns="http://www.w3.org/2000/svg" 
                onClick={scrollToTop} 
                style={{ display: visible ? "inline" : "none", cursor: "pointer" }}
            >
                <circle cx="25" cy="25" r="24" fill="#6D75BB" />
                
                <path 
                    d="M 17 22 L 25 14 L 33 22 M 25 14 L 25 36" 
                    stroke="white" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    fill="none" 
                />
            </svg>
        </button>
    )
}