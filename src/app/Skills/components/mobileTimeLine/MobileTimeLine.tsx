import style from "./mobileTimeLine.module.scss"
import SkillComponent from "./SkillComponent"

export default function MobileTimeLine() {
    return(
        <>
            <div className={style.mainLine}></div>
            <div className={style.allLine}>
                <SkillComponent mode="not started" idBox={1}/>
                <SkillComponent mode="unfinished" idBox={2}/>
                <SkillComponent mode="completed" idBox={3}/>
                <SkillComponent mode="In progress" idBox={4}/>
                <SkillComponent mode="In progress" idBox={5}/>
                <SkillComponent mode="completed" idBox={6}/>
                <SkillComponent mode="completed" idBox={7}/>
            </div>
        </>
    )
};
