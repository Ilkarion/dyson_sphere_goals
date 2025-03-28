'use client'
import style from "./skillProgress.module.css" 

export default function SkillProgress({stage}:{stage:string}) {
    let textShow = stage
    if(textShow == "In progress") {
        textShow = "In progress 55%"
    }
    console.log(stage)
    return(
        <>
            <div 
            className={`${style.skillProgress} ${style.mobileSkillProgress}
            ${stage === "In progress" ? 
                style.inProgressBg : stage === "completed" ? 
                style.completedBg : stage === "unfinished" ? 
                style.unfinishedBg : stage === "not started" ?
                style.notStartedBg : ''}`}
            >
                <span className={`${style.progressTitle} ${style.mobileProgressTitle}`}>{textShow}</span>
            </div>
        </>
    )
};
