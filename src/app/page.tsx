import Image from "next/image";
import Link from "next/link";
import { PageWrapper } from "@/components/page-wrapper";

export default function HomePage() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <div
        className="hero-section"
        style={{
          backgroundImage: "url('https://ext.same-assets.com/230652411/2448187753.jpeg')"
        }}
      >
        <div className="content container mx-auto px-4">
          <h1 className="hero-text text-white mb-8">
            EXPLORING<br />THE WORLD
          </h1>
          <Link
            href="/tours"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-teal hover:bg-opacity-90 transition-colors rounded-md"
          >
            DISCOVER TOURS
          </Link>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-oswald font-bold mb-6 text-navy">EXPLORE A DIFFERENT WAY TO TRAVEL</h2>
              <p className="text-gray-600 mb-6">
                Discover new cultures and have a wonderful tour with Backpack Story! Select the country you'd like to visit and we'll create one of our most suitable tours for you. We'll offer the most suitable tours and hotels.
              </p>
              <p className="text-gray-600 mb-6">
                During your vacation, we organize perfect journeys for our clients. We started as a small tour bureau, but now we have our own destinations. We can offer the most valuable vacation.
              </p>
              <div className="flex items-center">
                <Image
                  src="https://ext.same-assets.com/230652411/2387547168.png"
                  alt="Signature"
                  width={113}
                  height={66}
                />
              </div>
            </div>
            <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
              <Image
                src="https://ext.same-assets.com/230652411/3923059783.jpeg"
                alt="Travel Image 1"
                width={364}
                height={459}
                className="rounded-lg shadow-md w-full h-auto"
              />
              <Image
                src="https://ext.same-assets.com/230652411/3949145075.jpeg"
                alt="Travel Image 2"
                width={364}
                height={459}
                className="rounded-lg shadow-md w-full h-auto mt-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-mint">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-xl text-navy-dark italic mb-8">
              " At Backpack Story, we personally plan and create all our tours to offer flexibility and unique impressions that you won't get anywhere else. Moreover, each tour is tailor-made for our customers to provide the experience they are looking for. "
            </blockquote>
            <div className="text-teal font-semibold">Jane Wilson, Agency director</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="text-2xl font-oswald font-bold mb-4 text-navy">01. BEST HOTELS</div>
              <p className="text-gray-600">
                We guarantee the best hotels and most comfortable rooms, which will be pre-booked for you to ensure the perfect stay. Our experts work only with the hotel and will make a wonderful vacation there.
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-oswald font-bold mb-4 text-navy">02. TOURIST GUIDE</div>
              <p className="text-gray-600">
                We provide our clients with such a service as Tourist Guide. It is very easy to be abroad but not understand what to see and how to get there. This service is crucial for comfortable tourism with enjoyment.
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-oswald font-bold mb-4 text-navy">03. FLIGHTS TICKETS</div>
              <p className="text-gray-600">
                You can book tickets for any plane online via our booking system. Have you found a best price deal? Let us know and we'll try to beat it. Our representatives will help you with the details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-teal text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-oswald font-bold mb-8">START YOUR JOURNEY!</h2>
          <Link
            href="/tours"
            className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-navy bg-white hover:bg-gray-100 transition-colors rounded-md"
          >
            VIEW ALL TOURS
          </Link>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-oswald font-bold mb-10 text-center text-navy">OUR BLOG POSTS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1">
              <div className="relative h-64">
                <Image
                  src="https://ext.same-assets.com/230652411/3824994200.jpeg"
                  alt="Blog Post 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-oswald text-xl font-bold mb-3 text-navy">5 PLACES TO VISIT THIS WINTER</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Winter is the perfect time to visit these magical locations with beautiful atmosphere. You can either go somewhere with your family or friends, or even join one of our guided tours.
                </p>
                <Link href="/blog/winter-places" className="text-teal font-medium hover:underline">
                  Read More
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1">
              <div className="relative h-64">
                <Image
                  src="https://ext.same-assets.com/230652411/3864433446.jpeg"
                  alt="Blog Post 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-oswald text-xl font-bold mb-3 text-navy">BUDGET TIPS FOR WINTER BREAK</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Winter vacation doesn't have to be a budget buster. Even if you don't have much money. The golden sands of Egypt and Turkey are closer than you might think.
                </p>
                <Link href="/blog/budget-winter-tips" className="text-teal font-medium hover:underline">
                  Read More
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1">
              <div className="relative h-64">
                <Image
                  src="https://ext.same-assets.com/230652411/1071231732.jpeg"
                  alt="Blog Post 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-oswald text-xl font-bold mb-3 text-navy">WALKING IN MACHU PICCHU, PERU</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Machu Picchu is one of the most fabulous places for all tourists visiting Peru. If you agree to take this path you need to know these important tips before you go!
                </p>
                <Link href="/blog/machu-picchu" className="text-teal font-medium hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
