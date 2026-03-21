import { Card, CardContent } from '@/components/ui/card';
import { 
  IdCard, 
  TrendingUp, 
  GraduationCap, 
  HeartHandshake 
} from 'lucide-react';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description?: string;
  color: string;
}

const FeatureSection: React.FC = () => {
  const features: FeatureItem[] = [
    {
      icon: <IdCard className="w-12 h-12" />,
      title: "Green Card",
      description: "Digital identity card for citizens with easy access to government services",
      color: "text-green-600"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Industry Training",
      description: "Skill development programs for industrial and vocational training",
      color: "text-yellow-600"
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Education",
      description: "Quality education resources and learning opportunities for all",
      color: "text-orange-600"
    },
    {
      icon: <HeartHandshake className="w-12 h-12" />,
      title: "Good Health",
      description: "Healthcare services and medical facilities for community wellness",
      color: "text-blue-600"
    }
  ];

  return (
    <section className="bg-transparent py-16 lg:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for village and city development through digital innovation
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
            >
              <CardContent className="p-8 lg:p-10">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className={`${feature.color} transition-transform duration-300 group-hover:scale-110`}>
                    {feature.icon}
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Want to learn more about our services?
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
