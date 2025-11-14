"use client";

import { useRouter } from "next/navigation";
import { GL } from "./gl";
import { Pill } from "./pill";
import { Button } from "./ui/button";
import { LoadingSphere } from "./loading-sphere";
import { useState } from "react";

/**
 * Hero Component
 * 
 * Main landing hero section with GL background
 * Configurable loading duration for Portal navigation
 */

// Configuration: Adjust loading duration here (in milliseconds)
const LOADING_DURATION = 1000; // 3 seconds - change this value to adjust loading time

export function Hero() {
  const router = useRouter();
  const [hovering, setHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleExploreClick = () => {
    setIsLoading(true);
  };

  const handleLoadingComplete = () => {
    router.push("/Portal");
  };

  return (
    <>
      {isLoading && (
        <LoadingSphere 
          duration={LOADING_DURATION} 
          onComplete={handleLoadingComplete} 
        />
      )}
      
      <div className="flex flex-col min-h-svh justify-between relative bg-black">
        <GL hovering={hovering} />

        <div className="pb-16 mt-auto text-center relative z-10">
          <Pill className="mb-6">BETA RELEASE</Pill>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient">
            Intelligence that works<br />
            <i className="font-light">For</i> You
          </h1>
          <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[440px] mx-auto">
           Built on smart intelligence
          </p>

          <Button
            className="mt-14 max-sm:hidden"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            onClick={handleExploreClick}
          >
            [Explorer Intelligence]
          </Button>
          <Button
            size="sm"
            className="mt-14 sm:hidden"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            onClick={handleExploreClick}
          >
            [Explorer Intelligence]
          </Button>
        </div>
      </div>
    </>
  );
}
