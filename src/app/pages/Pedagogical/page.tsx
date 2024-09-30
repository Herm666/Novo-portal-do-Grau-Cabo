'use client'
import { TransitionOut } from "@/common/animatons/Transition"
import Nav from "@/common/components/Nav"
import PageTransition from "@/common/components/PageTransition"
import { useLayoutEffect } from "react"
import Grids from "./Layouts/Grids"

export default function Pedagogical() {


    useLayoutEffect(() => {
        TransitionOut()
    }, [])

    return (
        <>
            <PageTransition heightInitial="100dvh" heightInitialBlocks="100dvh" />
            <header>
                <Nav/>
            </header>
            <main>
                <Grids/>
            </main>
        </>
    )
}