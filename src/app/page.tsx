
import PageTransition from "@/common/components/PageTransition";
import Hero from "./layouts/Hero";


export default function Enter() {
  return (
    <>
    <PageTransition heightInitial="0dvh" heightInitialBlocks="0dvh"/>
      <main>
        <Hero />
      </main>
    </>
  );
}
