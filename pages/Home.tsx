import React from 'react';
import Button from '../components/Button';
import { BarChart3, Radio, Users, ChevronRight, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-10 pb-20 bg-primary overflow-hidden">
        {/* Deep Forest Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A6B3E] via-[#124d2c] to-[#0a2e1a]"></div>
        
        {/* Animated Accent Glows */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
           <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-secondary blur-[100px] animate-pulse"></div>
           <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-accent blur-[120px]"></div>
        </div>

        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl animate-slide-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#6BC05C] text-sm font-medium mb-6 border border-white/5 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#6BC05C] animate-pulse"></span>
                Public Sentiment Intelligence
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight text-white italic">
                Sentinex.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6BC05C] to-[#39994F]">National</span> <br/>
                Insight.
              </h1>
              <p className="text-lg lg:text-xl text-green-50/80 mb-10 leading-relaxed max-w-lg">
                We transform digital noise into clarity. Sentinex helps teams understand the pulse of Nigeria through data-driven signals and high-fidelity sentiment analysis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button to="/contact" variant="secondary" className="px-8 py-4 text-base bg-[#39994F] hover:bg-[#2D7A3F]" icon={<ArrowRight size={18} />}>
                  Start Conversation
                </Button>
                <Button to="/product" variant="outline" className="px-8 py-4 text-base border-white/20 text-white hover:bg-white/10 hover:border-white/40">
                  View Platform
                </Button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="hidden lg:block relative animate-fade-in delay-200">
               <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="h-2 w-24 bg-white/20 rounded mb-2"></div>
                      <div className="h-4 w-32 bg-white/40 rounded"></div>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-secondary/20 flex items-center justify-center">
                       <Zap size={16} className="text-white" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-24 bg-gradient-to-r from-[#39994F]/20 to-transparent rounded-lg border border-white/10 flex items-end p-2 gap-1">
                        {[40, 60, 45, 70, 55, 80, 65].map((h, i) => (
                          <div key={i} style={{height: `${h}%`}} className="flex-1 bg-[#6BC05C]/60 rounded-sm"></div>
                        ))}
                    </div>
                    <div className="flex justify-between text-xs text-white/40 pt-2">
                       <span>Mon</span><span>Sun</span>
                    </div>
                  </div>
               </div>
               
               <div className="absolute top-10 -right-4 z-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl w-full h-full transform rotate-[3deg]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4 tracking-tight">Understanding the pulse of the nation</h2>
            <p className="text-gray-500 text-lg">We combine advanced data collection with human context to deliver insights that matter.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="w-14 h-14 bg-green-50 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Radio size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Public data at scale</h3>
              <p className="text-gray-500 leading-relaxed">
                We monitor vast amounts of digital conversation across news, social, and forums to capture the true voice of the market across Nigeria.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="w-14 h-14 bg-green-50 text-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                <BarChart3 size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Patterns that act</h3>
              <p className="text-gray-500 leading-relaxed">
                Raw data is noisy. We provide clear patterns and signals that leaders can actually use to make decisions, filtering out the static.
              </p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 border border-gray-100 hover:-translate-y-1">
              <div className="w-14 h-14 bg-yellow-50 text-accent rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary">Decision support</h3>
              <p className="text-gray-500 leading-relaxed">
                Trusted by banks, fintech teams, and policy groups to navigate complex public sentiment landscapes and build trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-primary text-white shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"></div>
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 p-12 md:p-20 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Need deeper understanding?</h2>
                <p className="text-green-50 text-lg mb-8 leading-relaxed">
                  Beyond our platform, we offer focused research and advisory sessions. Our experts help you interpret the nuance behind the numbers to understand public reaction and customer trust.
                </p>
                <Link 
                  to="/consulting" 
                  className="inline-flex items-center gap-2 font-semibold text-accent hover:text-white transition-colors text-lg group"
                >
                  Explore Consulting Services 
                  <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
              <div className="relative hidden md:block">
                 <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 shadow-lg">
                    <div className="flex items-center gap-4 mb-4">
                       <ShieldCheck className="text-[#6BC05C]" size={32} />
                       <div>
                          <div className="font-bold">Strategic Advisory</div>
                          <div className="text-sm text-green-100">Custom tailored insights</div>
                       </div>
                    </div>
                    <div className="space-y-2">
                       <div className="h-2 bg-white/20 rounded w-full"></div>
                       <div className="h-2 bg-white/20 rounded w-5/6"></div>
                       <div className="h-2 bg-white/20 rounded w-4/6"></div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;