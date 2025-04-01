'use client'
import style from "./skillDescribtion.module.scss"
import * as Accordion from "@radix-ui/react-accordion"
import { useState } from "react";
import MiniGoal from "./components/miniGoalSection/MiniGoal";

export default function SkillDescribtion() {
    // const { resolvedTheme } = useTheme()
    const [open, setOpen] = useState(false);
    return(
        <>
        <Accordion.Root type="single" className={style.accordion}>
            <Accordion.Item value="item-1" className={style.item}>
                <Accordion.Header className={style.header}>
                    <Accordion.Trigger 
                        onClick={() => setOpen(!open)} 
                        className={style.trigger}
                    >
                        <span>Emotional Intelligence</span>
                    </Accordion.Trigger>
                </Accordion.Header>
                    <Accordion.Content className={`${style.content} ${open ? style.show : ""}`}>
                    <div className={style.body}>
                        <MiniGoal 
                        title="Time"
                        textBoxTitles={["money", "time", "trip-plane"]}
                        dateFrom="2025-07-03"
                        DateTo="2029-07-03"/>
                    </div>
                    </Accordion.Content>
            </Accordion.Item>
        </Accordion.Root>
        </>
    )
};
