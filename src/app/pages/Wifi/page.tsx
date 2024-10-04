'use client'
import { TransitionOut } from "@/common/animatons/Transition";
import PageTransition from "@/common/components/PageTransition";
import { useLayoutEffect } from "react";

import Nav from "@/common/components/Nav";
import VideoBackground from "@/common/components/VideoBackground";
import Card from "./Card";

export default function Home() {
    
    useLayoutEffect(()=>{
        TransitionOut()
    },[])

  return (
    <>
    <PageTransition heightInitial="100dvh" heightInitialBlocks="100dvh"/>
      <header>
        <Nav page="wifi"/>
      </header>
      <main>
        <VideoBackground/>
        <Card/>
      </main>
    </>
  );
}
