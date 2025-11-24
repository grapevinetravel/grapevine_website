"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";

const partners = [
  { name: "Amadeus", file: "amadeus.svg", width: 153, height: 23 },
  { name: "Travelport", file: "travelport.svg", width: 151, height: 19 },
  { name: "Sabre", file: "sabre.svg", width: 117, height: 28 },
  { name: 'Advantage Travel Partnership', file: 'advantage-travel-partnetship.svg', width: 140, height: 30 },
  { name: "Booking.com", file: "booking.com.svg", width: 180, height: 40 },
  { name: "Expedia", file: "expedia.svg", width: 160, height: 35 },
  { name: "Gray Dawes", file: "gray-dawes-travel.svg", width: 140, height: 30 },
  { name: "Omega World Travel", file: "omega-world-travel.svg", width: 140, height: 30 },
  { name: "Carousel Travel", file: "carousel-travel.svg", width: 130, height: 28 },
  { name: "Meon", file: "meon-travel-management.svg", width: 120, height: 25 },
  { name: 'Focus Travel Partnership', file: 'focus-travel-partnership.svg', width: 140, height: 30 },
  { name: "Holiday Extras", file: "holiday-extras.svg", width: 130, height: 25 },
  { name: "OpenTable", file: "open-table.svg", width: 120, height: 25 },
];

export default function PartnerCarousel() {
  const [position, setPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [singleSetWidth, setSingleSetWidth] = useState(0);
  const animationFrameRef = useRef<number | null>(null);
  const duplicatedPartners = [...partners, ...partners, ...partners];

  const updateWidth = useCallback(() => {
    if (containerRef.current && containerRef.current.children.length > 0) {
      let totalWidth = 0;
      const partnerCount = Math.min(partners.length, containerRef.current.children.length);

      for (let i = 0; i < partnerCount; i++) {
        const child = containerRef.current.children[i] as HTMLElement;
        if (child) {
          totalWidth += child.offsetWidth;
        }
      }

      // Only update if width is valid and different
      if (totalWidth > 0 && totalWidth !== singleSetWidth) {
        setSingleSetWidth(totalWidth);
      }
    }
  }, [singleSetWidth]);

  // Wait for images to load before calculating width
  useEffect(() => {
    const images = containerRef.current?.querySelectorAll('img');
    if (!images || images.length === 0) return;

    let loadedCount = 0;
    const totalImages = images.length;

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        updateWidth();
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        handleImageLoad();
      } else {
        img.addEventListener('load', handleImageLoad, { once: true });
      }
    });

    // Fallback timeout in case some images fail to load
    const fallbackTimer = setTimeout(updateWidth, 500);

    return () => {
      clearTimeout(fallbackTimer);
      images.forEach((img) => {
        img.removeEventListener('load', handleImageLoad);
      });
    };
  }, [updateWidth]);

  // Handle resize
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [updateWidth]);

  // Animation loop
  useEffect(() => {
    if (singleSetWidth === 0) return;

    const animate = () => {
      setPosition((prev) => {
        const newPosition = prev - 1;
        // Reset position seamlessly when reaching the end of first set
        if (Math.abs(newPosition) >= singleSetWidth) {
          return newPosition + singleSetWidth;
        }
        return newPosition;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [singleSetWidth]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={containerRef}
        className="flex will-change-transform"
        style={{
          transform: `translateX(${position}px)`,
        }}
      >
        {duplicatedPartners.map((partner, index) => (
          <div
            key={`${partner.file}-${index}`}
            className="bg-navy flex shrink-0 items-center justify-center h-14 px-5 md:h-[75px] md:px-10"
          >
            <Image
              src={`/images/partners/${partner.file}`}
              alt={partner.name}
              width={partner.width}
              height={partner.height}
              className="h-auto max-h-full w-auto object-contain opacity-80 mix-blend-luminosity"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
