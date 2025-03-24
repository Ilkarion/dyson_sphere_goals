import SkillDescribtion from "../skillsDescribtion/SkillDescribtion"
import SkillProgress from "../skillsProgress/SkillProgress"
import style from "./mobileTimeLine.module.css"

export default function SkillComponent({mode}:{mode:string}) {
    return(
        <>
            <div className={style.skillComponent}>
                <SkillDescribtion />
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
