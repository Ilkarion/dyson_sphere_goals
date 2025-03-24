import style from "./guideBtn.module.css"
import Image from "next/image"
import guideImg from "@/assets/guide.png"

export default function GuideBtn() {
    return (
        <Image src={guideImg} 
        alt="show guide"
        className={style.navigBtn}
        />        
    )

};
