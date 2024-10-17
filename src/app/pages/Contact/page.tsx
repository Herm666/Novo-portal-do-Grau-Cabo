'use client'
import { TransitionOut } from "@/common/animatons/Transition";
import PageTransition from "@/common/components/PageTransition";
import { useLayoutEffect } from "react";

import Nav from "@/common/components/Nav";
import VideoBackground from "@/common/components/VideoBackground";
import Card from "./Card";
import backToHome from "@/common/functions/backToHome";

export default function Contact() {
    
    useLayoutEffect(()=>{
        TransitionOut()
    },[])

    
    setTimeout(()=>{
      backToHome() 
  }, 20000)  

  return (
    <>
    <PageTransition heightInitial="100dvh" heightInitialBlocks="100dvh"/>
      <header>
        <Nav page="contatos"/>
      </header>
      <main>
        <VideoBackground/>
        <Card/>
      </main>
    </>
  );
}
