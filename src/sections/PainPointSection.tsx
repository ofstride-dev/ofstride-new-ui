import React from 'react';
import { useNavigate } from 'react-router-dom';

export function PainPointSection() {
  const navigate = useNavigate();
  const painPoints = [
    'Manual work slowing down sales, support, and operations',
    'Teams using AI tools inconsistently without clear processes',
    'Leaders needing faster insights without adding overhead',
    'Growth initiatives getting stuck in disconnected workflows',
  ];

  return (
    <section id="challenges" className="py-24 border-t border-slate-900/40">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#5D7CC1]">
              The Challenge
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-black text-white aintric-gradient-text leading-tight">
              The growth trap: when activity is high but momentum is low
            </h2>
            <p className="mt-4 text-sm text-slate-400 leading-relaxed">
              As your business grows, fragmented workflows and reactive decision-making create drag across the company. 
              The real opportunity is not more tools — it is better systems that help teams move faster with confidence.
            </p>
            <ul className="mt-6 space-y-3.5">
              {painPoints.map((item) => (
                <li key={item} className="flex items-start gap-3 text-xs font-medium text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => navigate('/contact')}
              className="inline-flex items-center gap-2 mt-8 text-xs font-bold uppercase tracking-wider text-[#5D7CC1] hover:text-[#A9B9E2] transition-colors bg-transparent border-none cursor-pointer"
            >
              Get your free assessment →
            </button>
          </div>
          
          <div className="aintric-card bg-gradient-to-br from-white/[0.02] to-transparent">
            <div className="space-y-6">
              {[
                { label: 'Operational Efficiency', value: 45, color: 'bg-red-500/80', textColor: 'text-red-400', status: 'Suboptimal' },
                { label: 'AI Workflow Adoption', value: 30, color: 'bg-amber-500/80', textColor: 'text-amber-400', status: 'Low' },
                { label: 'Decision Velocity', value: 85, color: 'bg-emerald-500', textColor: 'text-emerald-400', status: 'With Ofstride' },
              ].map((bar) => (
                <div key={bar.label}>
                  <div className="flex justify-between text-xs font-semibold mb-2">
                    <span className="text-slate-300">{bar.label}</span>
                    <span className={`font-bold uppercase tracking-wider text-[10px] ${bar.textColor}`}>{bar.status}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-950 overflow-hidden border border-white/5">
                    <div 
                      className={`h-full rounded-full ${bar.color} transition-all duration-1000`}
                      style={{ width: `${bar.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl bg-slate-950/60 p-5 text-center border border-white/5">
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Potential Business Impact</p>
              <p className="mt-1.5 text-2xl font-black text-white">20%–40% faster execution</p>
              <p className="text-xs text-slate-500 mt-1">For operations-heavy teams ready to scale</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
