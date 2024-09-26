'use client'
import { TransitionOut } from "@/common/animatons/Transition";
import PageTransition from "@/common/components/PageTransition";
import { useLayoutEffect } from "react";
import Grids from "./Layouts/Grids";
import Nav from "@/common/components/Nav";

export default function Home() {
    
    useLayoutEffect(()=>{
        TransitionOut()
    },[])

  return (
    <>
    <PageTransition heightInitial="100dvh" heightInitialBlocks="100dvh"/>
      <header>
        <Nav/>
      </header>
      <main>
        <Grids/>
      </main>
    </>
  );
}
