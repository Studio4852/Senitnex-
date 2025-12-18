import React from 'react';
import Button from '../components/Button';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { Globe, MessageSquare, TrendingUp, ShieldAlert, CheckCircle2 } from 'lucide-react';

const data = [
  { name: 'Mon', sentiment: 40, volume: 2400 },
  { name: 'Tue', sentiment: 30, volume: 1398 },
  { name: 'Wed', sentiment: 55, volume: 5000 },
  { name: 'Thu', sentiment: 68, volume: 3908 },
  { name: 'Fri', sentiment: 60, volume: 4800 },
  { name: 'Sat', sentiment: 75, volume: 3800 },
  { name: 'Sun', sentiment: 80, volume: 4300 },
];

const Product: React.FC = () => {
  return (
    <div className="flex flex-col bg-background">
      {/* Header */}
      <div className="bg-primary pt-24 pb-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">The SentiNEX Platform</h1>
          <p className="text-lg text-green-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            SentiNEX gathers public data across digital channels in Nigeria. We process news updates, public conversations, reviews, and signals that help teams understand what people care about.
          </p>
          <div className="flex justify-center">
            <Button to="/contact" variant="secondary" className="shadow-lg shadow-secondary/30">Request a Demo</Button>
          </div>
        </div>
      </div>

      {/* Demo Chart Section - "Simple Result Example" - Overlapping Header */}
      <div className="relative -mt-20 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white p-8 rounded-2xl shadow-card border border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800">Sentiment & Trust Tracking</h3>
                <p className="text-gray-500 text-sm mt-1">Real-time analysis of market perception</p>
              </div>
              <div className="flex items-center gap-3">
                 <div className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-lg border border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    <span className="text-xs font-medium text-gray-600">Positive</span>
                 </div>
                 <span className="text-xs bg-green-100 text-green-800 px-3 py-1.5 rounded-full font-semibold uppercase tracking-wide">Live Demo View</span>
              </div>
            </div>
            
            <div className="h-80 w-full bg-gray-50/50 rounded-xl p-4 border border-gray-100">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorSentiment" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#57A78C" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#57A78C" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#9ca3af', fontSize: 12}} 
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#9ca3af', fontSize: 12}} 
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '12px' }}
                    cursor={{ stroke: '#57A78C', strokeWidth: 1, strokeDasharray: '5 5' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="sentiment" 
                    stroke="#57A78C" 
                    fillOpacity={1} 
                    fill="url(#colorSentiment)" 
                    strokeWidth={3}
                    activeDot={{ r: 6, strokeWidth: 0, fill: '#1A4331' }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-400 mt-6 text-center italic">
              Visualization: Tracking public sentiment lift following a major product announcement event.
            </p>
          </div>
        </div>
      </div>

      {/* Data Sources */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Integrated Data Sources</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We aggregate data from the most relevant channels to provide a holistic view.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Globe, label: "Digital Chatter", desc: "Forums & Blogs" },
              { icon: MessageSquare, label: "Social Media", desc: "X, FB, LinkedIn" },
              { icon: TrendingUp, label: "News Updates", desc: "Major Outlets" },
              { icon: ShieldAlert, label: "Risk Signals", desc: "Early Warnings" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center p-8 bg-background rounded-2xl border border-gray-100 hover:border-secondary/30 transition-colors text-center group">
                <div className="w-16 h-16 bg-white rounded-full shadow-soft flex items-center justify-center mb-6 text-gray-400 group-hover:text-secondary group-hover:scale-110 transition-all duration-300">
                  <item.icon size={32} />
                </div>
                <h3 className="font-bold text-lg text-primary mb-1">{item.label}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-primary">What the platform delivers</h2>
              <div className="space-y-8">
                {[
                  { title: "Clear sentiment readings", desc: "Understand the emotional tone of the market in real-time." },
                  { title: "Pattern spotting", desc: "Identify rising concerns before they become critical issues." },
                  { title: "Trust signals", desc: "Support for teams that want to understand risk and reaction." }
                ].map((feature, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-secondary/10 flex items-center justify-center mt-1">
                      <span className="text-secondary text-sm font-bold">{i + 1}</span>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/5 blur-3xl rounded-full"></div>
              <div className="relative bg-white p-8 rounded-2xl border border-gray-100 shadow-xl">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-6">Live Intelligence Feed</h3>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-xl border border-red-100 flex gap-3 items-start">
                    <div className="mt-1"><ShieldAlert size={18} className="text-red-500" /></div>
                    <div>
                      <div className="text-red-700 font-bold text-sm mb-1">Negative Sentiment Spike</div>
                      <p className="text-red-600/80 text-sm leading-snug">Rising concerns detected in Lagos region regarding recent policy update. Volume up 40%.</p>
                    </div>
                  </div>
                  
                  <div className="bg-teal-50 p-4 rounded-xl border border-teal-100 flex gap-3 items-start">
                    <div className="mt-1"><CheckCircle2 size={18} className="text-teal-600" /></div>
                    <div>
                      <div className="text-teal-700 font-bold text-sm mb-1">Trust Metric Improvement</div>
                      <p className="text-teal-600/80 text-sm leading-snug">Trust metrics improving for mobile payment sector (+12% this week).</p>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100 flex gap-3 items-start">
                    <div className="mt-1"><TrendingUp size={18} className="text-yellow-600" /></div>
                    <div>
                      <div className="text-yellow-700 font-bold text-sm mb-1">Engagement Signal</div>
                      <p className="text-yellow-600/80 text-sm leading-snug">High engagement on community support channels indicates need for clarity.</p>
                    </div>
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

export default Product;