import Image from "next/image";
import Link from "next/link"; // Import Link from next/link
import { PageWrapper } from "@/components/page-wrapper";

export default function AboutPage() {
  return (
    <PageWrapper>
      {/* Breadcrumbs Hero Section */}
      <div
        className="breadcrumbs-section"
        style={{
          backgroundImage: "url('https://ext.same-assets.com/3337743476/2203922552.jpeg')"
        }}
      >
        <div className="breadcrumbs-content container mx-auto px-4">
          <h1 className="text-4xl font-oswald font-bold mb-2">ABOUT</h1>
          <div className="flex items-center justify-center space-x-2 text-sm">
            <Link href="/" className="text-white hover:text-teal transition-colors">Home</Link>
            <span className="text-white">/</span>
            <span className="text-gray-300">About</span>
          </div>
        </div>
      </div>

      {/* About Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <Image
                src="https://ext.same-assets.com/3960624266/1430038062.jpeg"
                alt="About Backpack Story"
                width={364}
                height={459}
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-oswald font-bold mb-6 text-navy">A FEW WORDS ABOUT US</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2006, Backpack Story was established by driven, dynamic, and innovative individuals who banded together.
              </p>
              <p className="text-gray-600 mb-6">
                Within five years of business operations, we have expanded Backpack Story and opened up three other subsidiary offices to focus on the various needs of our customers. After just two years in the business, Journey Inc presented with two valuable awards – the US Travel Excellence Award 2013.
              </p>
              <p className="text-gray-600 mb-6">
                In addition, the travel agency has gone through the year-long Customer Centric Initiative (CCI) program and successfully attained the US Service Class certification. We offer plenty of destinations, including Europe, USA, and Exotic Spring tours, making it professional to provide better services.
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
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-oswald font-bold mb-12 text-center text-navy">MEET OUR TEAM</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1">
              <div className="relative h-96">
                <Image
                  src="https://ext.same-assets.com/3960624266/3636985669.jpeg"
                  alt="Team Member 1"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-oswald text-xl font-bold mb-1 text-navy">AMANDA SMITH</h3>
                <p className="text-teal mb-4">Travel Specialist</p>
                <p className="text-gray-600 text-sm">
                  Amanda specializes in exotic destinations and adventure tours. She has personally visited over 45 countries.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1">
              <div className="relative h-96">
                <Image
                  src="https://ext.same-assets.com/3960624266/1335257531.jpeg"
                  alt="Team Member 2"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-oswald text-xl font-bold mb-1 text-navy">DAVID WILSON</h3>
                <p className="text-teal mb-4">Marketing Director</p>
                <p className="text-gray-600 text-sm">
                  With 10+ years in travel marketing, David ensures our tours reach the right audiences with compelling messaging.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1">
              <div className="relative h-96">
                <Image
                  src="https://ext.same-assets.com/3960624266/3636985669.jpeg"
                  alt="Team Member 3"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-oswald text-xl font-bold mb-1 text-navy">SARAH THOMPSON</h3>
                <p className="text-teal mb-4">Customer Relations</p>
                <p className="text-gray-600 text-sm">
                  Sarah is dedicated to ensuring every client has an exceptional experience from first contact to post-trip feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-oswald font-bold mb-12 text-center text-navy">WHAT YOU GET WITH US</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-mint mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="font-oswald text-lg font-bold mb-3 text-navy">DAILY TOURS</h3>
              <p className="text-gray-600 text-sm">
                Choose from a variety of daily tours and excursions at your destination, led by knowledgeable local guides.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-mint mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                  <line x1="4" y1="22" x2="4" y2="15" />
                </svg>
              </div>
              <h3 className="font-oswald text-lg font-bold mb-3 text-navy">CRUISES</h3>
              <p className="text-gray-600 text-sm">
                Experience luxury cruises to stunning destinations around the world, with all-inclusive packages and excursions.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-mint mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>
              </div>
              <h3 className="font-oswald text-lg font-bold mb-3 text-navy">EPIC JOURNEYS</h3>
              <p className="text-gray-600 text-sm">
                Embark on extraordinary multi-country adventures designed for those seeking unique and immersive experiences.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-mint mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                  <line x1="6" y1="1" x2="6" y2="4" />
                  <line x1="10" y1="1" x2="10" y2="4" />
                  <line x1="14" y1="1" x2="14" y2="4" />
                </svg>
              </div>
              <h3 className="font-oswald text-lg font-bold mb-3 text-navy">NEW DESTINATIONS</h3>
              <p className="text-gray-600 text-sm">
                Discover new and emerging destinations that offer authentic experiences away from typical tourist routes.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-mint mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
              <h3 className="font-oswald text-lg font-bold mb-3 text-navy">CYCLING TRIPS</h3>
              <p className="text-gray-600 text-sm">
                Explore scenic landscapes on two wheels with our guided cycling tours, suitable for all experience levels.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-mint mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3 className="font-oswald text-lg font-bold mb-3 text-navy">24/7 ONLINE SUPPORT</h3>
              <p className="text-gray-600 text-sm">
                Access our dedicated support team any time, day or night, for assistance with your travel plans or while on your journey.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-mint mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                  <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                  <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                </svg>
              </div>
              <h3 className="font-oswald text-lg font-bold mb-3 text-navy">ECO LODGES & TOURS</h3>
              <p className="text-gray-600 text-sm">
                Experience sustainable travel with our eco-friendly accommodations and tours that minimize environmental impact.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-mint mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal">
                  <polygon points="11 5 6 9 2 6 7 2 11 5" />
                  <polygon points="22 12 16 16 14 13 20 9 22 12" />
                  <line x1="7" y1="2" x2="14" y2="13" />
                  <line x1="11" y1="5" x2="20" y2="9" />
                </svg>
              </div>
              <h3 className="font-oswald text-lg font-bold mb-3 text-navy">BUS TOURS</h3>
              <p className="text-gray-600 text-sm">
                Join our comfortable bus tours for a convenient way to explore multiple destinations with expert guides and likeminded travelers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-20 bg-fixed bg-cover bg-center relative"
        style={{
          backgroundImage: "url('https://ext.same-assets.com/3960624266/906030615.jpeg')",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-navy-dark bg-opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-oswald font-bold mb-14 text-center text-white">RECENT FACTS ABOUT OUR TOUR AGENCY</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal bg-opacity-20 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className="stats-counter text-white">3241</div>
              <div className="stats-label text-gray-300">HAPPY CUSTOMERS</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal bg-opacity-20 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="stats-counter text-white">787</div>
              <div className="stats-label text-gray-300">FLIGHTS</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal bg-opacity-20 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div className="stats-counter text-white">1203</div>
              <div className="stats-label text-gray-300">HOTELS TO STAY</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal bg-opacity-20 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="stats-counter text-white">9874</div>
              <div className="stats-label text-gray-300">AWESOME TOURS</div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
