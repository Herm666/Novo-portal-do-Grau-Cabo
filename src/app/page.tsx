
import PageTransition from "@/common/components/PageTransition";
import Hero from "./layouts/Hero";


export default function Enter() {
  return (
    <>
    <PageTransition heightInitial="100dvh" heightInitialBlocks="100dvh"/>
      <main>
        <Hero />
      </main>
    </>
  );
}
