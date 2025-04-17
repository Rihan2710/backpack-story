import Image from "next/image";
import Link from "next/link";
import { PageWrapper } from "@/components/page-wrapper";
import HeroSlider from "@/components/ui/HeroSlider";

const tourPackages = [
  {
    id: 1,
    title: "French Autumn",
    image: "https://ext.same-assets.com/3337743476/1934287881.jpeg",
    oldPrice: "$1925.00",
    newPrice: "$1825.00",
    description: "Calculus studere in infernum! Cum cedium pedis, omnes tumultumquees gravis fatalis, domesticus!",
    features: {
      meal: true,
      days: 5,
      flight: true,
    }
  },
  {
    id: 2,
    title: "Grand Switzerland",
    image: "https://ext.same-assets.com/3337743476/4180887178.jpeg",
    oldPrice: "$2285.00",
    newPrice: "$2045.00",
    description: "Gabalium pius quadra est. Teres, altus triticums mechanice resuscitabo de clemens, gratis fiscina.",
    features: {
      meal: true,
      days: 5,
      flight: true,
    }
  },
  {
    id: 3,
    title: "Prague Trip",
    image: "https://ext.same-assets.com/3337743476/149305523.jpeg",
    oldPrice: "$1215.00",
    newPrice: "$1055.00",
    description: "Aonides observare in cella! Talis, nobilis liberis ferox tractare de peritus, clemens bulla!",
    features: {
      meal: true,
      days: 5,
      flight: true,
    }
  },
  {
    id: 4,
    title: "Phi-phi Trip",
    image: "https://ext.same-assets.com/3337743476/2693475815.jpeg",
    oldPrice: "$1625.00",
    newPrice: "$1525.00",
    description: "Cur capio mori? Lactas assimilant in vasa! Oller de ferox lapsus, anhelare clabulare!",
    features: {
      meal: true,
      days: 5,
      flight: true,
    }
  },
  {
    id: 5,
    title: "Rome Trip",
    image: "https://ext.same-assets.com/3337743476/483801493.jpeg",
    oldPrice: "$2100.00",
    newPrice: "$2000.00",
    description: "Fidelis abactus solite perderes imitari est. Guttus, abactor, et zeta. Abaculus castus medusa est.",
    features: {
      meal: true,
      days: 5,
      flight: true,
    }
  },
  {
    id: 6,
    title: "Prague Trip",
    image: "https://ext.same-assets.com/3337743476/621002295.jpeg",
    oldPrice: "$1215.00",
    newPrice: "$1055.00",
    description: "Dexter zelus ducunt ad gallus. Ferox, albus adgiums foris anhelare de altus, fatalis triticum.",
    features: {
      meal: true,
      days: 5,
      flight: true,
    }
  },
  {
    id: 7,
    title: "Magnificent Italy",
    image: "https://ext.same-assets.com/3337743476/2589307091.jpeg",
    oldPrice: "$1200.00",
    newPrice: "$1450.00",
    description: "Urbs est ferox fortis? Cum gluten trabem, omnes ionicis tormentos manifestum secundus, clemens!",
    features: {
      meal: true,
      days: 5,
      flight: true,
    }
  },
  {
    id: 8,
    title: "Bora-Bora",
    image: "https://ext.same-assets.com/3337743476/663859757.jpeg",
    oldPrice: "$2650.00",
    newPrice: "$2500.00",
    description: "Grandis, emeritis luba recte manifestum de azureus, fortis numen. Messis semper ducunt ad mobilis!",
    features: {
      meal: true,
      days: 5,
      flight: true,
    }
  },
  {
    id: 9,
    title: "Discover Japan",
    image: "https://ext.same-assets.com/3337743476/2859806995.jpeg",
    oldPrice: "$1500.00",
    newPrice: "$1655.00",
    description: "Musa de bassus elogium, convertam gemna! Cum nuptias mori, omnes eposs imitari raptus, nobilis!",
    features: {
      meal: true,
      days: 5,
      flight: true,
    }
  },
];

// Hero slider images
const heroImages = [
  {
    src: "https://ext.same-assets.com/3337743476/2203922552.jpeg",
    alt: "Beautiful travel destination with turquoise river"
  },
  {
    src: "https://ext.same-assets.com/3337743476/2589307091.jpeg",
    alt: "Magnificent Italy landscape"
  },
  {
    src: "https://ext.same-assets.com/3337743476/663859757.jpeg",
    alt: "Tropical paradise beach"
  }
];

export default function ToursPage() {
  return (
    <PageWrapper>
      {/* Hero Image Slider Section */}
      <HeroSlider images={heroImages} />

      {/* Breadcrumbs Hero Section */}
      <div
        className="breadcrumbs-section"
        style={{
          backgroundImage: "url('https://ext.same-assets.com/3337743476/2203922552.jpeg')"
        }}
      >
        <div className="breadcrumbs-content container mx-auto px-4">
          <h1 className="text-4xl font-oswald font-bold mb-2">TOURS</h1>
          <div className="flex items-center justify-center space-x-2 text-sm">
            <Link href="/" className="text-white hover:text-teal transition-colors">Home</Link>
            <span className="text-white">/</span>
            <span className="text-gray-300">Tours</span>
          </div>
        </div>
      </div>

      {/* Tours Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-oswald font-bold mb-12 text-center text-navy">EXPLORE TOP DESTINATION</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourPackages.map((tour) => (
              <div key={tour.id} className="bg-white rounded-lg overflow-hidden shadow-md tour-card">
                <div className="relative">
                  <Image
                    src={tour.image}
                    alt={tour.title}
                    width={370}
                    height={284}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-teal text-white py-1 px-3 rounded-sm text-sm">
                    POPULAR
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-oswald text-xl font-bold mb-2 text-navy">{tour.title}</h3>
                  <div className="price-tag mb-4">
                    <span className="old-price">{tour.oldPrice}</span>
                    <span className="new-price">{tour.newPrice}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-6">
                    {tour.description}
                  </p>
                  <div className="flex items-center justify-between text-gray-500 mb-4">
                    {tour.features.meal && (
                      <div className="flex items-center">
                        <span className="inline-block mr-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4"
                          >
                            <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                            <line x1="6" y1="1" x2="6" y2="4" />
                            <line x1="10" y1="1" x2="10" y2="4" />
                            <line x1="14" y1="1" x2="14" y2="4" />
                          </svg>
                        </span>
                        <span className="text-xs">Meal</span>
                      </div>
                    )}
                    {tour.features.days && (
                      <div className="flex items-center">
                        <span className="inline-block mr-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                        </span>
                        <span className="text-xs">{tour.features.days} Days</span>
                      </div>
                    )}
                    {tour.features.flight && (
                      <div className="flex items-center">
                        <span className="inline-block mr-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4"
                          >
                            <path d="M22 2L11 13" />
                            <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                          </svg>
                        </span>
                        <span className="text-xs">Flight</span>
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <Link
                      href={`/tours/${tour.id}`}
                      className="inline-block text-teal hover:text-navy transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-20 bg-cover bg-center relative text-white"
        style={{
          backgroundImage: "url('https://ext.same-assets.com/3960624266/906030615.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-navy-dark bg-opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-oswald font-bold mb-6">LOOKING FOR A PERFECT VACATION?</h2>
            <p className="text-gray-300 mb-8">
              Let us help you find the perfect destination for your next journey. Our travel experts are ready to create a personalized itinerary just for you.
            </p>
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-navy bg-white hover:bg-gray-100 transition-colors rounded-md"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}