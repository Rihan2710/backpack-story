// app/tours/ClientBody.tsx
'use client';

import ImageSlider from '@/components/ui/ImageSlider';

export default function ClientBody() {
  // These would be your actual image paths
  const sliderImages = [
    {
      src: "C:/Users/rihan/Desktop/backpack-story/destination1.jpg", // Update with your actual image paths
      alt: "Beautiful river gorge"
    },
    {
      src: "C:/Users/rihan/Desktop/backpack-story/destination2.jpg", 
      alt: "Mountain landscape"
    },
    {
      src: "C:/Users/rihan/Desktop/backpack-story/destination3.jpg",
      alt: "Beach paradise"
    }
  ];

  return (
    <div className="w-full">
      <ImageSlider images={sliderImages} />
      
      {/* Rest of your tours page content here */}
      <section className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6">Our Popular Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Tour cards would go here */}
        </div>
      </section>
    </div>
  );
}