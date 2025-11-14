'use client'

import { Hero } from "@/components/hero";
import { Leva } from "leva";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { Header } from "@/components/header";
import { WorldMapSection } from "@/components/world-map-section";
import { SmoothScroll } from "@/components/smooth-scroll";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <SmoothScroll />
      <Hero />
      <Header />
      <div className="flex flex-col overflow-hidden bg-black">
        <ContainerScroll
          titleComponent={
            <>
              
            </>
          }
        >
          <Image
            src="/Image-ui.png"
            alt="Intelligence Dashboard"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
      
      <WorldMapSection />
      
      <Leva hidden />
    </div>
  );
}
