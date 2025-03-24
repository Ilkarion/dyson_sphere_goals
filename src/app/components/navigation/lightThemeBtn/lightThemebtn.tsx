'use client'
import lighgtOption from "@/assets/light-theme.png"
import Image from "next/image"
import { useTheme } from "next-themes"
import style from "./lightBtn.module.css"
import { useState, useEffect } from "react"


export default function LightThemebtn() {
    const { resolvedTheme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
      setMounted(true);
    }, []);
    if (!mounted) return null;
    return(
            <Image src={lighgtOption} alt="light theme" 
            onClick={()=>setTheme("light")} 
            className={`${resolvedTheme=='light' ? style.lightBtnActive : style.lightBtn}
                        ${resolvedTheme=='light' ? "" : style.lightBtnEf}`}
            />
    )
};

