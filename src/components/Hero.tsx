
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, CreditCard, TrendingUp } from 'lucide-react';

const Hero = () => {
  const handleGetStarted = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Professional
                  <span className="text-blue-600"> Financial</span>
                  <br />Services You Can Trust
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Specialized in Card Rotation, Card to Cash services, and comprehensive financial solutions. 
                  Your trusted partner for secure and efficient financial transactions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8" onClick={handleGetStarted}>
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8" onClick={handleLearnMore}>
                  Learn More
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-8">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">Secure & Trusted</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">Card Services Expert</span>
                </div>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Financial Dashboard</h3>
                    <TrendingUp className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-gray-600">Card Rotation</span>
                      <span className="text-green-600 font-semibold">Active</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-gray-600">Card to Cash</span>
                      <span className="text-blue-600 font-semibold">Available</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b">
                      <span className="text-gray-600">Success Rate</span>
                      <span className="text-green-600 font-semibold">99.8%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
