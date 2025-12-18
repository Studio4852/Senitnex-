import React from 'react';
import { Target, Heart, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center animate-fade-in">
          <span className="text-secondary font-semibold tracking-wider text-sm uppercase mb-3 block">Who we are</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 tracking-tight">Our Story</h1>
          <div className="h-1 w-24 bg-gradient-to-r from-secondary to-teal-200 mx-auto rounded-full"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Section 1: Narrative */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-4">Purpose and Mission</h2>
              <div className="h-1 w-12 bg-secondary rounded-full mb-6"></div>
            </div>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p className="leading-relaxed">
                SentiNEX started with a simple idea. Nigeria is full of public conversations and signals, yet many teams struggle to understand them. We created SentiNEX to bring clarity to this space.
              </p>
              <p className="leading-relaxed">
                We focus on public sentiment because it shapes trust and guides real behaviour. Our team brings experience in data, research, and product thinking. We care about clear insight and responsible use of information.
              </p>
            </div>
          </div>

          {/* Section 3: Soft Visual */}
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl animate-fade-in delay-200 group">
             {/* Using a calm, abstract tech/data image */}
            <img 
              src="https://picsum.photos/seed/sentinex-office/800/1000" 
              alt="Team collaboration" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
               <p className="font-bold text-lg">Built in Lagos</p>
               <p className="text-white/80 text-sm">Serving clients across Africa</p>
            </div>
          </div>
        </div>

        {/* Section 2: Values */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Core Values</h2>
            <p className="text-gray-500">The principles that guide our analysis and our relationships.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Clarity", desc: "Turning noise into clear, actionable signals.", color: "bg-blue-50 text-primary" },
              { icon: Heart, title: "Responsibility", desc: "Handling data with care and ethical consideration.", color: "bg-teal-50 text-secondary" },
              { icon: ShieldCheck, title: "Trust", desc: "Building confidence through accurate understanding.", color: "bg-yellow-50 text-accent" }
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 border border-gray-100 text-center group hover:-translate-y-2">
                <div className={`inline-flex p-5 rounded-2xl ${value.color} mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <value.icon size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-primary">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;