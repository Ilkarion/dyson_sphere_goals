import style from "./miniGoal.module.scss"
import CheckBox from "../checkBox/CheckBox"


export default function MiniGoal({title, textBoxTitles, dateFrom, DateTo, idBox}
    :
    {title:string, textBoxTitles:string[], dateFrom:string, DateTo:string, idBox:number}) {
    return(
        <>
            <p className={style.titleMiniGoal}>{title}</p>
            <div className={style.checkBoxGroup}>
                {textBoxTitles.map((name, id)=> { 
                    return <CheckBox text={name} idBox={idBox * 100 + id} key={id}/>})}
            </div>
            <p className={style.date}>
                <time dateTime={dateFrom}>{dateFrom}</time> - <time dateTime={DateTo}>{DateTo}</time>
            </p>
        </>
    )
};
