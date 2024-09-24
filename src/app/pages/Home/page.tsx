'use client'
import { TransitionOut } from "@/common/animatons/Transition";
import PageTransition from "@/common/components/PageTransition";
import { useLayoutEffect } from "react";
import Grids from "./Layouts/Grids";

export default function Home() {
    
    useLayoutEffect(()=>{
        TransitionOut()
    },[])

  return (
    <>
    <PageTransition heightInitial="100dvh" heightInitialBlocks="100dvh"/>
      <main>
        <Grids/>
      </main>
    </>
  );
}
