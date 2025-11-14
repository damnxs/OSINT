"use client";

import { WorldMap } from "@/components/ui/world-map";
import { motion } from "framer-motion";

/**
 * WorldMap Section Component
 * OSINT-themed global intelligence network visualization
 */
export function WorldMapSection() {
  return (
    <div className="py-20 md:py-40 bg-black w-full">
      <div className="max-w-7xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-sentient text-2xl md:text-5xl text-white mb-4">
            Global Intelligence{" "}
            <span className="text-yellow-600">
              {"Network".split("").map((char, idx) => (
                <motion.span
                  key={idx}
                  className="inline-block"
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </p>
          <p className="font-mono text-sm md:text-lg text-gray-400 max-w-2xl mx-auto py-4">
            Real-time intelligence gathering across global networks. 
            Monitor data sources worldwide with advanced OSINT capabilities 
            and cross-border analysis.
          </p>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-10"
      >
        <WorldMap
          dots={[
            {
              start: {
                lat: 40.7128,
                lng: -74.0060,
              }, // New York
              end: {
                lat: 51.5074,
                lng: -0.1278,
              }, // London
            },
            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: 55.7558, lng: 37.6173 }, // Moscow
            },
            {
              start: { lat: 55.7558, lng: 37.6173 }, // Moscow
              end: { lat: 35.6762, lng: 139.6503 }, // Tokyo
            },
            {
              start: { lat: 35.6762, lng: 139.6503 }, // Tokyo
              end: { lat: -33.8688, lng: 151.2093 }, // Sydney
            },
            {
              start: { lat: 40.7128, lng: -74.0060 }, // New York
              end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            },
            {
              start: { lat: -15.7975, lng: -47.8919 }, // Brazil
              end: { lat: -33.4489, lng: -70.6693 }, // Santiago
            },
            {
              start: { lat: 51.5074, lng: -0.1278 }, // London
              end: { lat: 30.0444, lng: 31.2357 }, // Cairo
            },
            {
              start: { lat: 30.0444, lng: 31.2357 }, // Cairo
              end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
            },
            {
              start: { lat: 28.6139, lng: 77.2090 }, // New Delhi
              end: { lat: 39.9042, lng: 116.4074 }, // Beijing
            },
            {
              start: { lat: 1.3521, lng: 103.8198 }, // Singapore
              end: { lat: -6.2088, lng: 106.8456 }, // Jakarta
            },
          ]}
          lineColor="#FFC700"
        />
      </motion.div>
    </div>
  );
}

