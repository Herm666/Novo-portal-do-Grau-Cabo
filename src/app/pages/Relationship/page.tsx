'use client'

import Nav from "@/common/components/Nav";
import Card from "./layouts/Card";
import PageTransition from "@/common/components/PageTransition";
import { useLayoutEffect } from "react";
import { TransitionOut } from "@/common/animatons/Transition";
import VideoBackground from "@/common/components/VideoBackground";
import backToHome from "@/common/functions/backToHome";

export default function Relationship() {

    useLayoutEffect(() => {
        TransitionOut()
    }, [])

    
    setTimeout(()=>{
        backToHome() 
    }, 20000)  

    return (
        <>
            <PageTransition heightInitial="100dvh" heightInitialBlocks="100dvh" />

            <header>
                <Nav page="relation"/>
            </header>
            <main>
                <VideoBackground/>
                <Card />
            </main>
        </>
    )
}