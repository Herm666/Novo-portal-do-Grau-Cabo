'use client'

import Nav from "@/common/components/Nav";
import Card from "./layouts/Card";
import PageTransition from "@/common/components/PageTransition";
import { useLayoutEffect } from "react";
import { TransitionOut } from "@/common/animatons/Transition";
import VideoBackground from "@/common/components/VideoBackground";

export default function Relationship() {

    useLayoutEffect(() => {
        TransitionOut()
    }, [])

    return (
        <>
            <PageTransition heightInitial="100dvh" heightInitialBlocks="100dvh" />

            <header>
                <Nav />
            </header>
            <main>
                <VideoBackground/>
                <Card />
            </main>
        </>
    )
}