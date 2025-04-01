import SkillDescribtion from "../skillsDescribtion/SkillDescribtion"
import SkillProgress from "../skillsProgress/SkillProgress"
import style from "./mobileTimeLine.module.scss"

export default function SkillComponent({mode, idBox}:{mode:string, idBox:number}) {
    return(
        <>
            <div className={style.skillComponent}>
                <SkillDescribtion idBox={idBox}/>
                <div className={style.connectionElement}>
                    <div className={style.connectionCircle}>
                    </div>
                    <div className={style.connectionLine}></div>
                </div>
                <SkillProgress stage={mode}/>
            </div>
        </>
    )
};
