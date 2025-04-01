import style from "./miniGoal.module.scss"
import CheckBox from "../checkBox/CheckBox"


export default function MiniGoal({title, textBoxTitles, dateFrom, DateTo}
    :
    {title:string, textBoxTitles:string[], dateFrom:string, DateTo:string}) {
    return(
        <>
            <p className={style.titleMiniGoal}>{title}</p>
            <div className={style.checkBoxGroup}>
                {textBoxTitles.map((name, id)=> <CheckBox text={name} idBox={id} key={id}/>)}
            </div>
            <p className={style.date}>
                <time dateTime={dateFrom}>{dateFrom}</time> - <time dateTime={DateTo}>{DateTo}</time>
            </p>
        </>
    )
};
