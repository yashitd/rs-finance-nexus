
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, RotateCcw, DollarSign, Shield, Clock, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: RotateCcw,
      title: "Card Rotation",
      description: "Professional card rotation services with secure processing and optimal timing for maximum benefits.",
      features: ["Secure Processing", "Optimal Timing", "24/7 Support"]
    },
    {
      icon: CreditCard,
      title: "Card to Cash",
      description: "Convert your card balance to cash efficiently with competitive rates and instant processing.",
      features: ["Competitive Rates", "Instant Processing", "Multiple Options"]
    },
    {
      icon: DollarSign,
      title: "Financial Consulting",
      description: "Expert financial advice and consulting services to help you make informed financial decisions.",
      features: ["Expert Advice", "Personalized Solutions", "Strategic Planning"]
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description: "All transactions are protected with bank-level security and encryption protocols.",
      features: ["Bank-Level Security", "Encrypted Transactions", "Fraud Protection"]
    },
    {
      icon: Clock,
      title: "Quick Processing",
      description: "Fast and efficient processing of all financial services with minimal waiting time.",
      features: ["Fast Processing", "Minimal Wait Time", "Real-time Updates"]
    },
    {
      icon: Users,
      title: "Personal Support",
      description: "Dedicated personal support from our experienced financial service professionals.",
      features: ["Dedicated Support", "Expert Team", "Personalized Service"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial services designed to meet your needs with professionalism, 
              security, and efficiency at the forefront of everything we do.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-500 flex items-center justify-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="mt-4">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
