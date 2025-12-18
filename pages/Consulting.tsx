import React from 'react';
import Button from '../components/Button';
import { Search, Users, FileText, ArrowRight } from 'lucide-react';

const Consulting: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-white pt-20 pb-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">Consulting & Insight Support</h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            We provide research and advisory sessions for banks, fintech teams, and regulators. Our work helps you understand public reaction, customer behaviour, and sentiment around your services.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex-grow">
        
        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            { 
              icon: Search, 
              title: "Sentiment Research", 
              desc: "Focused research on your specific product, sector, or campaign to gauge public temperature.",
              color: "text-secondary"
            },
            { 
              icon: Users, 
              title: "Product Feedback Study", 
              desc: "Trust and customer understanding sessions to dive deep into user needs and perceptions.",
              color: "text-accent"
            },
            { 
              icon: FileText, 
              title: "Insight Sessions", 
              desc: "Custom reports and leadership workshops based on your specific organizational needs.",
              color: "text-primary"
            }
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 group border border-gray-100 flex flex-col h-full">
              <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary/5 transition-colors">
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-8 flex-grow">{service.desc}</p>
              <div className="pt-6 border-t border-gray-50">
                <span className="text-sm font-semibold text-primary flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn more <ArrowRight size={16} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="relative rounded-3xl overflow-hidden">
           <div className="absolute inset-0 bg-primary"></div>
           <div className="absolute inset-0 bg-gradient-to-r from-primary to-[#275C46]"></div>
           <div className="absolute right-0 top-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
           
           <div className="relative z-10 px-8 py-16 md:py-20 text-center">
              <h3 className="font-bold text-white text-3xl mb-4">Ready to understand your market?</h3>
              <p className="text-green-100 mb-8 max-w-xl mx-auto text-lg">Let's discuss how SentiNEX can support your goals with tailored insights.</p>
              <Button to="/contact" variant="secondary" className="px-10 py-4 font-semibold text-base shadow-lg shadow-black/20">
                Request a Consultation
              </Button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Consulting;