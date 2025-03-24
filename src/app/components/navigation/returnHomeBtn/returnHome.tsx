import style from "./retrunHome.module.css"
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
