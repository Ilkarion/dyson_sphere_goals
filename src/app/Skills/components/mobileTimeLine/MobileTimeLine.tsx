import style from "./mobileTimeLine.module.css"
import SkillComponent from "./SkillComponent"

export default function MobileTimeLine() {
    return(
        <>
            <div className={style.mainLine}></div>
            <div className={style.allLine}>
                <SkillComponent mode="not started" />
                <SkillComponent mode="unfinished" />
                <SkillComponent mode="completed" />
            </div>
        </>
    )
};
