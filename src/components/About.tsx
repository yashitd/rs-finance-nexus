
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Clock, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "1000+" },
    { icon: Award, label: "Years Experience", value: "10+" },
    { icon: Clock, label: "Response Time", value: "< 1hr" },
    { icon: Shield, label: "Success Rate", value: "99.8%" }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900">About RS Associate Financial Services</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Led by experienced professionals <strong>Deepak Tiwari</strong> and <strong>Rama Shankar Tiwari</strong>, 
                  we are dedicated to providing exceptional financial services with a focus on security, efficiency, and customer satisfaction.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our expertise in Card Rotation and Card to Cash services, combined with our commitment to 
                  personalized service, makes us the trusted choice for individuals and businesses seeking 
                  reliable financial solutions.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <span className="text-gray-600">Experienced professionals with proven track record</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <span className="text-gray-600">Secure and transparent financial processes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <span className="text-gray-600">Personalized service and dedicated support</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                    <span className="text-gray-600">Competitive rates and fast processing</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Content - Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="space-y-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
