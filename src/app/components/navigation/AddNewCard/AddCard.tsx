'use client'
import Image from "next/image"
import plusImg from "@/assets/addBtn.svg"
import style from "./addCard.module.scss"

import { useState, useRef } from "react"
import { createPortal } from "react-dom"


// const obj: skillObj = {
//     main_name: "",
//     stage: [
//         {
//             name: "",
//             points: []
//         }
//     ]
// }


interface stageObj {
    name: string
    points: string[]
}

// interface skillObj {
//     main_name: string
//     stage: stageObj[]
// }

function AddMenuPortalDOM({children}:{children: React.ReactNode}) {
    if (typeof window === 'undefined') {return null}
    const menuRoot = document.getElementById("creator-card-menu")
    return menuRoot ? createPortal(children, menuRoot) : null
}

// function collectDataSubmite(stageObject) {

// }

function collectStages({stage_name, stage_points}:{stage_name:string, stage_points:string}) {
    const stageObj: stageObj = {
                name: "",
                points: []
    }

    stageObj.name = stage_name
    const points = stage_points.split(" ")
    for(let i = 0; i < points.length; i++) {
        stageObj.points.push(points[i])
    }
    // console.log(`Stage object: ${JSON.stringify(stageObj)}`) OK
}

export default function AddCard() {

    const stageNameRef = useRef<HTMLInputElement>(null)
    const stagePointsRef = useRef<HTMLInputElement>(null)

    const [clicked, setClick] = useState(false)

    // const stageObject: stageObj[] = []

    return (
        <>
            <Image src={plusImg} alt="Add new skill" className={style.addCard} onClick={()=>setClick(!clicked)}/>
            {clicked ? 
            <AddMenuPortalDOM>
                <div className={style.cardCreatorMenu}>
                    <div>
                        <input type="text" aria-label="skill name" placeholder="skill name"/>
                        <div className={style.addStage}>
                            <div className={style.addStageInputs}>
                                <input 
                                type="text"
                                aria-label="Stage name"
                                placeholder="stage name"
                                ref={stageNameRef}/>

                                <input
                                type="text"
                                aria-label="stage points"
                                placeholder="stage points"
                                ref={stagePointsRef}/>

                            </div>
                            <input type="button" value="Add" className={style.addStageBtn} onClick={()=>{
                                {collectStages({
                                    stage_name: stageNameRef.current?.value || "", 
                                    stage_points: stagePointsRef.current?.value || ""}
                                )}
                                if (stageNameRef.current) stageNameRef.current.value = ""
                                if (stagePointsRef.current) stagePointsRef.current.value = ""
                            }}
                            />
                        </div>
                        <input type="submit" value="Add"/>
                    </div>
                </div>
            </AddMenuPortalDOM> : ""}
        </>
    )
};
