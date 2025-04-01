import style from "./retrunHome.module.scss"
import Image from "next/image"
import homeLogo from "@/assets/home.png"



export default function returnHome() {
    return (
        <Image src={homeLogo} 
        alt="show guide"
        className={style.navigBtn}
        /> 
    )
};
