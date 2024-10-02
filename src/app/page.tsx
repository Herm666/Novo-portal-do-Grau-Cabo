
import PageTransition from "@/common/components/PageTransition";
import Hero from "./layouts/Hero";
import VideoBackground from "@/common/components/VideoBackground";


export default function Enter() {
  return (
    <>
    <PageTransition heightInitial="100dvh" heightInitialBlocks="100dvh"/>
      <main>

        <VideoBackground/>
        <Hero />
      </main>
    </>
  );
}
