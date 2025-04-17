// app/tours/ClientSlider.tsx
'use client';

import HeroSlider from "@/components/ui/HeroSlider";

interface ClientSliderProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function ClientSlider({ images }: ClientSliderProps) {
  return <HeroSlider images={images} />;
}