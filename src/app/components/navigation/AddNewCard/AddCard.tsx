'use client'
import Image from "next/image"
import plusImg from "@/assets/addBtn.svg"
import style from "./addCard.module.scss"

import { useState } from "react"


export default function AddCard() {

    const [clicked, setClick] = useState(false)

    return (
        <>
            <Image src={plusImg} alt="Add new skill" className={style.addCard} onClick={()=>setClick(!clicked)}/>
            {clicked ? 
            
            <div className={style.cardCreatorMenu}>

            </div>
            
            : ""}
        </>
    )
};
