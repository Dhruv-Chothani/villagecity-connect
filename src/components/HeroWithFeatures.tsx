import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  IdCard, 
  TrendingUp, 
  GraduationCap, 
  HeartHandshake,
  Phone
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  color: string;
}

interface CarouselImage {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
  content: string;
  buttonText: string;
  phoneNumber: string;
}

const HeroWithFeatures: React.FC = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel images
  const carouselImages: CarouselImage[] = [
    {
      src: "/src/assets/ngo-hero.jpg",
      alt: "SVCDA Hero Banner",
      title: "One App for Village & City Development",
      subtitle: "Small Village & City Development Agency",
      description: "All in One Sector Service Hub",
      content: "Building a digitally connected & empowered rural and urban community through easy access to education, employment, business, healthcare, agriculture & local services — all on one platform.",
      buttonText: "Get Started",
      phoneNumber: "+91 8978210705"
    },
    {
      src: "/src/assets/ngo-hero2.png",
      alt: "Development Services Banner", 
      title: "Empowering Communities",
      subtitle: "Digital Transformation for All",
      description: "Your Complete Solution Hub",
      content: "Connecting villages and cities through innovative digital services. Access education, healthcare, business opportunities, and more from one unified platform.",
      buttonText: "Explore Services",
      phoneNumber: "+91 8978210705"
    },
    {
      src: "/src/assets/ngo-hero3.png",
      alt: "Community Development Banner", 
      title: "Transforming Lives",
      subtitle: "Building Better Futures",
      description: "Together We Grow",
      content: "Join us in creating sustainable communities through technology, education, and collaborative development. Every village and city deserves access to quality services and opportunities.",
      buttonText: "Join Now",
      phoneNumber: "+91 8978210705"
    }
  ];

  const features: FeatureItem[] = [
    {
      icon: <IdCard className="w-14 h-14" />,
      title: "Green Card",
      color: "text-green-600"
    },
    {
      icon: <TrendingUp className="w-14 h-14" />,
      title: "Industry Training",
      color: "text-yellow-600"
    },
    {
      icon: <GraduationCap className="w-14 h-14" />,
      title: "Education",
      color: "text-orange-600"
    },
    {
      icon: <HeartHandshake className="w-14 h-14" />,
      title: "Good Health",
      color: "text-blue-600"
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const handleCallNow = () => {
    window.open('tel:+91 8978210705');
  };

  const handleGetStarted = () => {
    navigate('/login');
  };

  const currentImage = carouselImages[currentIndex];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] lg:h-[700px] overflow-hidden">
        {/* Background Images with Carousel */}
        <div className="absolute inset-0">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            {/* Small Tagline */}
            <div className="text-blue-400 font-semibold text-lg mb-4 uppercase tracking-wide">
              {currentImage.title}
            </div>
            
            {/* Large Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {currentImage.subtitle}
              <br />
              {currentImage.description}
            </h1>
            
            {/* Short Description */}
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              {currentImage.content}
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleGetStarted}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg"
              >
                {currentImage.buttonText}
              </Button>
              
              <Button
                onClick={handleCallNow}
                variant="outline"
                size="lg"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50 px-6 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 backdrop-blur-sm text-lg"
              >
                <Phone className="h-5 w-5" />
                Call Now: {currentImage.phoneNumber}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overlapping Feature Cards */}
      <section className="relative -mt-10 lg:-mt-16 z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
              >
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className={`${feature.color} transition-transform duration-300 group-hover:scale-110`}>
                      {feature.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroWithFeatures;
